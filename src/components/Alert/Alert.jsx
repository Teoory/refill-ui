import React, { useState } from 'react';
import RfIcon from '../Icon/Icon';
import './Alert.scss';

// Renk dönüşümü için yardımcı fonksiyon
const convertToRGBA = (color, opacity = 0.1) => {
  const tempDiv = document.createElement('div');
  tempDiv.style.color = color;
  document.body.appendChild(tempDiv);
  const computedColor = window.getComputedStyle(tempDiv).color;
  document.body.removeChild(tempDiv);

  const match = computedColor.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
  if (match) {
    const [, r, g, b] = match;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  return computedColor;
};

const RfAlert = ({
  children,
  acts,
  color,
  size = 'medium',
  closable,
  label,
  help,
  buttons,
  reverse,
  className = '',
  onClose,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  const actIcons = {
    info: 'info',
    warning: 'exclamation-triangle',
    success: 'check-circle',
    danger: 'exclamation-circle'
  };

  const style = color ? {
    '--alert-color': color,
    '--alert-bg-color': convertToRGBA(color, 0.1),
    '--alert-border-color': convertToRGBA(color, 0.2)
  } : undefined;

  const classes = `
    rf-alert
    ${acts ? `acts-${acts}` : ''}
    size-${size}
    ${buttons ? 'has-buttons' : ''}
    ${reverse ? 'reverse' : ''}
    ${className}
  `.trim();

  return (
    <div className={classes} style={style} {...props}>
      {/* Alert Content */}
      <div className="rf-alert-content">
        {/* Icon */}
        {acts && actIcons[acts] && (
          <span className="rf-alert-icon">
            <RfIcon icon={actIcons[acts]} />
          </span>
        )}
        {!acts && children && !buttons && (
          <span className="rf-alert-icon">
            {children}
          </span>
        )}

        {/* Text Content */}
        <div className="rf-alert-text">
          {label && <div className="rf-alert-label">{label}</div>}
          {help && <div className="rf-alert-help">{help}</div>}
        </div>

        {/* Actions */}
        {buttons && <div className="rf-alert-actions">{children}</div>}
      </div>

      {/* Close Button */}
      {closable && (
        <button className="rf-alert-close" onClick={handleClose}>
          <RfIcon icon="x" size="16" />
        </button>
      )}
    </div>
  );
};

// Web Component
if (window?.customElements && !customElements.get('rf-alert')) {
  class RfAlertElement extends HTMLElement {
    static get observedAttributes() {
      return ['acts', 'color', 'size', 'closable', 'label', 'help', 'buttons', 'reverse'];
    }

    constructor() {
      super();
      this.isVisible = true;
    }

    attributeChangedCallback() {
      if (this.isVisible) this.render();
    }

    convertToRGBA(color, opacity = 0.1) {
      const tempDiv = document.createElement('div');
      tempDiv.style.color = color;
      document.body.appendChild(tempDiv);
      const computedColor = window.getComputedStyle(tempDiv).color;
      document.body.removeChild(tempDiv);

      const match = computedColor.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
      if (match) {
        const [, r, g, b] = match;
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      }

      return computedColor;
    }

    handleClose() {
      this.isVisible = false;
      this.style.display = 'none';
      this.dispatchEvent(new CustomEvent('close'));
    }

    render() {
      const acts = this.getAttribute('acts');
      const color = this.getAttribute('color');
      const size = this.getAttribute('size') || 'medium';
      const closable = this.hasAttribute('closable');
      const label = this.getAttribute('label');
      const help = this.getAttribute('help');
      const buttons = this.hasAttribute('buttons');
      const reverse = this.hasAttribute('reverse');

      const style = color ? `style="
        --alert-color: ${color};
        --alert-bg-color: ${this.convertToRGBA(color, 0.1)};
        --alert-border-color: ${this.convertToRGBA(color, 0.2)};
      "` : '';

      const classes = `
        rf-alert
        ${acts ? `acts-${acts}` : ''}
        size-${size}
        ${buttons ? 'has-buttons' : ''}
        ${reverse ? 'reverse' : ''}
      `.trim();

      const actIcons = {
        info: 'info',
        warning: 'exclamation-triangle',
        success: 'check-circle',
        danger: 'exclamation-circle'
      };

      this.innerHTML = `
        <div class="${classes}" ${style}>
          ${acts && actIcons[acts] ? `
            <span class="rf-alert-icon">
              <rf-icon icon="${actIcons[acts]}"></rf-icon>
            </span>
          ` : ''}
          
          <div class="rf-alert-content">
            <div class="rf-alert-text">
              ${label ? `<div class="rf-alert-label">${label}</div>` : ''}
              ${help ? `<div class="rf-alert-help">${help}</div>` : ''}
            </div>
            ${buttons ? `<div class="rf-alert-actions">${this.innerHTML}</div>` : this.innerHTML}
          </div>

          ${closable ? `
            <button class="rf-alert-close">
              <rf-icon icon="x" size="16"></rf-icon>
            </button>
          ` : ''}
        </div>
      `;

      if (closable) {
        this.querySelector('.rf-alert-close')?.addEventListener('click', () => this.handleClose());
      }
    }
  }

  customElements.define('rf-alert', RfAlertElement);
}

export default RfAlert; 