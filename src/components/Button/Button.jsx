import React from 'react';
import './Button.scss';

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
  </svg>
);

const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
  </svg>
);

const ArrowDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
  </svg>
);

const iconMap = {
  info: InfoIcon,
  check: CheckIcon,
  close: CloseIcon,
  'arrow-left': ArrowLeftIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-up': ArrowUpIcon,
  'arrow-down': ArrowDownIcon
};

const RfButton = ({
  variant = 'primary',
  size = 'medium',
  icon,
  label,
  loading = false,
  disabled = false,
  acts,
  color,
  children,
  className = '',
  href,
  blank,
  nolink,
  ...props
}) => {
  const IconComponent = icon ? iconMap[icon] : null;
  
  const buttonStyle = color ? {
    ...(variant === 'primary' && { 
      backgroundColor: color 
    }),
    ...(variant === 'secondary' && { 
      borderColor: color, 
      color: color,
      '--hover-bg': `${color}19`,
      '--active-bg': `${color}33`
    }),
    ...(variant === 'tertiary' && { 
      color: color 
    })
  } : undefined;
  
  const classes = `
    rf-btn 
    rf-btn-${variant} 
    size-${size}
    ${acts ? `acts-${acts}` : ''} 
    ${loading ? 'loading' : ''} 
    ${nolink ? 'nolink' : ''}
    ${className}
  `.trim();

  const content = (
    <>
      {IconComponent && (
        <span className="rf-btn-icon">
          <IconComponent />
        </span>
      )}
      {!label && <span className="rf-btn-content">{children}</span>}
    </>
  );

  if (href) {
    return (
      <a 
        href={href}
        className={classes}
        style={buttonStyle}
        disabled={disabled || loading}
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
      style={buttonStyle}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
};

// Web Component tanımlaması
const customElements = window?.customElements;

if (customElements && !customElements.get('rf-button')) {
  class RfButtonElement extends HTMLElement {
    static get observedAttributes() {
      return ['variant', 'size', 'icon', 'label', 'loading', 'disabled', 'href', 'blank', 'acts', 'nolink'];
    }

    connectedCallback() {
      this.render();
    }

    attributeChangedCallback() {
      this.render();
    }

    getIconSvg(iconName) {
      const icons = {
        info: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/></svg>',
        check: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>',
        close: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/></svg>',
        'arrow-left': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/></svg>',
        'arrow-right': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/></svg>',
        'arrow-up': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/></svg>',
        'arrow-down': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/></svg>'
      };
      return icons[iconName] || '';
    }

    render() {
      const variant = this.getAttribute('variant') || 'primary';
      const size = this.getAttribute('size') || 'medium';
      const icon = this.getAttribute('icon');
      const label = this.hasAttribute('label');
      const loading = this.hasAttribute('loading');
      const disabled = this.hasAttribute('disabled');
      const href = this.getAttribute('href');
      const blank = this.hasAttribute('blank');
      const acts = this.getAttribute('acts');
      const nolink = this.hasAttribute('nolink');
      const color = this.getAttribute('color');
      
      const classes = `
        rf-btn 
        rf-btn-${variant} 
        size-${size}
        ${acts ? `acts-${acts}` : ''}
        ${loading ? 'loading' : ''}
        ${nolink ? 'nolink' : ''}
      `.trim();

      const style = color ? `style="${
        variant === 'primary' ? 
          `background-color: ${color};` :
        variant === 'secondary' ? 
          `border-color: ${color}; color: ${color}; ` +
          `--hover-bg: ${color}19; ` +
          `--active-bg: ${color}33;` :
        variant === 'tertiary' ? 
          `color: ${color};` : 
        ''
      }"` : '';

      const iconHtml = icon ? `<span class="rf-btn-icon">${this.getIconSvg(icon)}</span>` : '';
      const content = `
        ${iconHtml}
        ${!label ? `<span class="rf-btn-content">${this.textContent}</span>` : ''}
      `;

      if (href) {
        this.innerHTML = `
          <a 
            href="${href}" 
            class="${classes}" 
            ${disabled ? 'disabled' : ''}
            ${blank ? 'target="_blank" rel="noopener noreferrer"' : ''}
            ${style}
          >
            ${content}
          </a>
        `;
      } else {
        this.innerHTML = `
          <button class="${classes}" ${disabled ? 'disabled' : ''} ${style}>
            ${content}
          </button>
        `;
      }
    }
  }

  customElements.define('rf-button', RfButtonElement);
}

export default RfButton;
