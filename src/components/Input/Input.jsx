import React, { useState } from 'react';
import RfIcon from '../Icon/Icon';
import './Input.scss';

const RfInput = ({
  type = 'text',
  size = 'medium',
  label,
  icon,
  help,
  required,
  disabled,
  placeholder,
  minlength,
  maxlength,
  min,
  max,
  className = '',
  fixed,
  value,
  defaultValue,
  reverse = false,
  color,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value || defaultValue || '');

  const inputType = type === 'password' && showPassword ? 'text' : type;

  const wrapperClasses = `
    rf-input-wrapper
    size-${size}
    ${icon ? 'has-icon' : ''}
    ${reverse ? 'icon-right' : 'icon-left'}
    ${disabled ? 'disabled' : ''}
    ${isFocused ? 'focused' : ''}
    ${inputValue ? 'has-value' : ''}
    ${fixed ? 'fixed-label' : ''}
    ${required ? 'required' : ''}
    ${className}
  `.trim();

  // Custom color için style objesi
  const wrapperStyle = color ? {
    borderColor: color,
    '--input-color': color,
    '--input-shadow': `${color}33`, // 20% opacity
  } : undefined;

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <div className="rf-input-container">
      <div className={wrapperClasses} style={wrapperStyle}>
        {label && (
          <label className="rf-input-label">
            {label}
            {required && <span className="required">*</span>}
          </label>
        )}
        
        {icon && !reverse && <span className="rf-input-icon">{icon}</span>}
        
        <input
          type={inputType}
          className="rf-input"
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          minLength={minlength}
          maxLength={maxlength}
          min={min}
          max={max}
          {...props}
        />

        {icon && reverse && <span className="rf-input-icon">{icon}</span>}

        {type === 'password' && (
          <button
            type="button"
            className="rf-input-password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            <RfIcon icon={showPassword ? 'eye-slash' : 'eye'} />
          </button>
        )}
      </div>

      {help && <p className="rf-input-help">{help}</p>}
    </div>
  );
};

// Web Component tanımlaması
if (window?.customElements && !customElements.get('rf-input')) {
  class RfInputElement extends HTMLElement {
    static get observedAttributes() {
      return [
        'type', 'size', 'label', 'icon', 'help', 'required',
        'disabled', 'placeholder', 'minlength', 'maxlength',
        'min', 'max', 'fixed', 'value', 'reverse', 'color'
      ];
    }

    constructor() {
      super();
      this.showPassword = false;
    }

    connectedCallback() {
      this.render();
    }

    attributeChangedCallback() {
      this.render();
    }

    togglePassword() {
      this.showPassword = !this.showPassword;
      this.render();
    }

    render() {
      const type = this.getAttribute('type') || 'text';
      const size = this.getAttribute('size') || 'medium';
      const label = this.getAttribute('label');
      const icon = this.getAttribute('icon');
      const help = this.getAttribute('help');
      const required = this.hasAttribute('required');
      const disabled = this.hasAttribute('disabled');
      const placeholder = this.getAttribute('placeholder');
      const minlength = this.getAttribute('minlength');
      const maxlength = this.getAttribute('maxlength');
      const min = this.getAttribute('min');
      const max = this.getAttribute('max');
      const fixed = this.hasAttribute('fixed');
      const value = this.getAttribute('value') || '';
      const reverse = this.hasAttribute('reverse');
      const color = this.getAttribute('color');

      const inputType = type === 'password' && this.showPassword ? 'text' : type;

      const classes = `
        rf-input-wrapper
        size-${size}
        ${icon ? 'has-icon' : ''}
        ${reverse ? 'icon-right' : 'icon-left'}
        ${disabled ? 'disabled' : ''}
        ${value ? 'has-value' : ''}
        ${fixed ? 'fixed-label' : ''}
        ${required ? 'required' : ''}
      `.trim();

      const style = color ? `style="
        border-color: ${color};
        --input-color: ${color};
        --input-shadow: ${color}33;
      "` : '';

      this.innerHTML = `
        <div class="rf-input-container">
          <div class="${classes}" ${style}>
            ${label ? `
              <label class="rf-input-label">
                ${label}
                ${required ? '<span class="required">*</span>' : ''}
              </label>
            ` : ''}
            
            ${icon && !reverse ? `
              <span class="rf-input-icon">
                <rf-icon icon="${icon}"></rf-icon>
              </span>
            ` : ''}
            
            <input
              type="${inputType}"
              class="rf-input"
              value="${value}"
              ${disabled ? 'disabled' : ''}
              ${placeholder ? `placeholder="${placeholder}"` : ''}
              ${required ? 'required' : ''}
              ${minlength ? `minlength="${minlength}"` : ''}
              ${maxlength ? `maxlength="${maxlength}"` : ''}
              ${min ? `min="${min}"` : ''}
              ${max ? `max="${max}"` : ''}
            />

            ${icon && reverse ? `
              <span class="rf-input-icon">
                <rf-icon icon="${icon}"></rf-icon>
              </span>
            ` : ''}

            ${type === 'password' ? `
              <button
                type="button"
                class="rf-input-password-toggle"
                onclick="this.getRootNode().host.togglePassword()"
              >
                <rf-icon icon="${this.showPassword ? 'eye-slash' : 'eye'}"></rf-icon>
              </button>
            ` : ''}
          </div>

          ${help ? `<p class="rf-input-help">${help}</p>` : ''}
        </div>
      `;

      // Input değer değişikliğini dinle
      const input = this.querySelector('input');
      if (input) {
        input.addEventListener('input', () => {
          const wrapper = this.querySelector('.rf-input-wrapper');
          if (wrapper) {
            wrapper.classList.toggle('has-value', input.value.length > 0);
          }
        });
      }
    }
  }

  customElements.define('rf-input', RfInputElement);
}

export default RfInput; 