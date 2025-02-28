import React, { useState, useRef, useEffect } from 'react';
import RfButton from '../Button/Button';
import RfIcon from '../Icon/Icon';
import './Dropdown.scss';

const convertToRGBA = (color) => {
  const tempDiv = document.createElement('div');
  tempDiv.style.color = color;
  document.body.appendChild(tempDiv);
  const computedColor = window.getComputedStyle(tempDiv).color;
  document.body.removeChild(tempDiv);

  const match = computedColor.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
  if (match) {
    const [, r, g, b] = match;
    return `${r}, ${g}, ${b}`;
  }
  return null;
};

const RfDropdownItem = ({
  children,
  icon,
  variant,
  size,
  color,
  acts,
  loading,
  disabled,
  href,
  blank,
  nolink,
  className = '',
  onClick,
  ...props
}) => {
  const style = color ? {
    '--item-color': color,
    '--item-color-rgb': convertToRGBA(color)
  } : undefined;

  const classes = `
    rf-dropdown-item
    ${variant ? `variant-${variant}` : ''}
    ${size ? `size-${size}` : ''}
    ${acts ? `acts-${acts}` : ''}
    ${loading ? 'loading' : ''}
    ${disabled ? 'disabled' : ''}
    ${className}
  `.trim();

  const content = (
    <>
      {icon && <span className="rf-dropdown-item-icon">{icon}</span>}
      <span className="rf-dropdown-item-content">{children}</span>
    </>
  );

  if (href) {
    return (
      <a 
        href={href}
        className={classes}
        style={style}
        target={blank ? '_blank' : undefined}
        rel={blank ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={classes}
      style={style}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

const RfDropdownGroup = ({ label, children }) => {
  return (
    <div className="rf-dropdown-group">
      {label && <div className="rf-dropdown-group-label">{label}</div>}
      {children}
    </div>
  );
};

const RfDropdown = ({
  header,
  icon,
  children,
  variant = 'primary',
  size = 'medium',
  color,
  acts,
  loading,
  disabled,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    if (!disabled && !loading) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`rf-dropdown ${className}`} ref={dropdownRef}>
      <RfButton
        variant={variant}
        size={size}
        color={color}
        acts={acts}
        loading={loading}
        disabled={disabled}
        onClick={toggleDropdown}
        {...props}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginRight: 'auto' }}>
          {icon}
          {header}
        </span>
        <RfIcon icon={isOpen ? 'chevron-up' : 'chevron-down'} />
      </RfButton>

      {isOpen && (
        <div className={`rf-dropdown-menu size-${size}`}>
          {children}
        </div>
      )}
    </div>
  );
};

// Web Component tanımlamaları
if (window?.customElements) {
  if (!customElements.get('rf-dropdown-item')) {
    class RfDropdownItemElement extends HTMLElement {
      static get observedAttributes() {
        return ['variant', 'size', 'color', 'acts', 'loading', 'disabled', 'href', 'blank', 'nolink'];
      }

      connectedCallback() {
        this.render();
      }

      attributeChangedCallback() {
        this.render();
      }

      render() {
        const variant = this.getAttribute('variant');
        const size = this.getAttribute('size');
        const color = this.getAttribute('color');
        const acts = this.getAttribute('acts');
        const loading = this.hasAttribute('loading');
        const disabled = this.hasAttribute('disabled');
        const href = this.getAttribute('href');
        const blank = this.hasAttribute('blank');
        const nolink = this.hasAttribute('nolink');

        const classes = `
          rf-dropdown-item
          ${variant ? `variant-${variant}` : ''}
          ${size ? `size-${size}` : ''}
          ${acts ? `acts-${acts}` : ''}
          ${loading ? 'loading' : ''}
          ${disabled ? 'disabled' : ''}
        `.trim();

        if (href) {
          this.innerHTML = `
            <a 
              href="${href}"
              class="${classes}"
              ${blank ? 'target="_blank" rel="noopener noreferrer"' : ''}
            >
              ${this.innerHTML}
            </a>
          `;
        } else {
          this.innerHTML = `
            <button class="${classes}" ${disabled || loading ? 'disabled' : ''}>
              ${this.innerHTML}
            </button>
          `;
        }
      }
    }
    customElements.define('rf-dropdown-item', RfDropdownItemElement);
  }

  if (!customElements.get('rf-dropdown-group')) {
    class RfDropdownGroupElement extends HTMLElement {
      connectedCallback() {
        const label = this.getAttribute('label');
        this.innerHTML = `
          <div class="rf-dropdown-group">
            ${label ? `<div class="rf-dropdown-group-label">${label}</div>` : ''}
            ${this.innerHTML}
          </div>
        `;
      }
    }
    customElements.define('rf-dropdown-group', RfDropdownGroupElement);
  }

  if (!customElements.get('rf-dropdown')) {
    class RfDropdownElement extends HTMLElement {
      static get observedAttributes() {
        return ['header', 'icon', 'variant', 'size', 'color', 'acts', 'loading', 'disabled'];
      }

      constructor() {
        super();
        this.isOpen = false;
      }

      connectedCallback() {
        this.render();
        this.addEventListeners();
      }

      attributeChangedCallback() {
        this.render();
      }

      addEventListeners() {
        document.addEventListener('click', (e) => {
          if (!this.contains(e.target)) {
            this.isOpen = false;
            this.render();
          }
        });
      }

      toggleDropdown() {
        this.isOpen = !this.isOpen;
        this.render();
      }

      render() {
        const header = this.getAttribute('header');
        const icon = this.getAttribute('icon');
        const variant = this.getAttribute('variant') || 'primary';
        const size = this.getAttribute('size') || 'medium';
        const color = this.getAttribute('color');
        const acts = this.getAttribute('acts');
        const loading = this.hasAttribute('loading');
        const disabled = this.hasAttribute('disabled');

        this.innerHTML = `
          <div class="rf-dropdown">
            <rf-button
              variant="${variant}"
              size="${size}"
              ${color ? `color="${color}"` : ''}
              ${acts ? `acts="${acts}"` : ''}
              ${loading ? 'loading' : ''}
              ${disabled ? 'disabled' : ''}
              onclick="this.getRootNode().host.toggleDropdown()"
            >
              <span style="display: flex; align-items: center; gap: 0.5rem; margin-right: auto">
                ${icon ? `<rf-icon icon="${icon}"></rf-icon>` : ''}
                ${header}
              </span>
              <rf-icon icon="${this.isOpen ? 'chevron-up' : 'chevron-down'}"></rf-icon>
            </rf-button>

            ${this.isOpen ? `
              <div class="rf-dropdown-menu size-${size}">
                ${this.innerHTML}
              </div>
            ` : ''}
          </div>
        `;
      }
    }
    customElements.define('rf-dropdown', RfDropdownElement);
  }
}

export { RfDropdown as default, RfDropdownGroup, RfDropdownItem }; 