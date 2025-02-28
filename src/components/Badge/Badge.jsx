import React from 'react';
import './Badge.scss';

// Renk dönüşümü için yardımcı fonksiyon
const convertToRGBA = (color, forBackground = false) => {
  // CSS renk değerini geçici bir div'e uygulayarak RGB değerlerini alalım
  const tempDiv = document.createElement('div');
  tempDiv.style.color = color;
  document.body.appendChild(tempDiv);
  const computedColor = window.getComputedStyle(tempDiv).color;
  document.body.removeChild(tempDiv);

  // RGB veya RGBA formatındaki rengi parse edelim
  const match = computedColor.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
  if (match) {
    const [, r, g, b, a] = match;
    // Arka plan için: Eğer rgba formatında opacity belirtilmişse onu kullan, yoksa 0.1
    // Yazı rengi için: Her zaman 0.8 opacity
    const opacity = forBackground ? (a || 0.1) : 0.8;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  return computedColor;
};

const RfBadge = ({
  children,
  color,
  bgColor,
  acts,
  size = 'medium',
  className = '',
  ...props
}) => {
  const style = color ? {
    '--badge-color': convertToRGBA(color), // Her zaman 0.8 opacity
    '--badge-bg-color': bgColor ? convertToRGBA(color, true) : undefined, // rgba ise kendi opacity'si, değilse 0.1
  } : undefined;

  const classes = `
    rf-badge
    size-${size}
    ${acts ? `acts-${acts}` : ''}
    ${bgColor ? 'has-bg' : ''}
    ${className}
  `.trim();

  return (
    <span className={classes} style={style} {...props}>
      {children}
    </span>
  );
};

// Web Component
if (window?.customElements && !customElements.get('rf-badge')) {
  class RfBadgeElement extends HTMLElement {
    static get observedAttributes() {
      return ['color', 'bg-color', 'size', 'acts'];
    }

    attributeChangedCallback() {
      this.render();
    }

    convertToRGBA(color, forBackground = false) {
      const tempDiv = document.createElement('div');
      tempDiv.style.color = color;
      document.body.appendChild(tempDiv);
      const computedColor = window.getComputedStyle(tempDiv).color;
      document.body.removeChild(tempDiv);

      const match = computedColor.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
      if (match) {
        const [, r, g, b, a] = match;
        const opacity = forBackground ? (a || 0.1) : 0.8;
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      }

      return computedColor;
    }

    render() {
      const color = this.getAttribute('color');
      const bgColor = this.hasAttribute('bg-color');
      const size = this.getAttribute('size') || 'medium';
      const acts = this.getAttribute('acts');

      const style = color ? `style="
        --badge-color: ${this.convertToRGBA(color)};
        ${bgColor ? `--badge-bg-color: ${this.convertToRGBA(color, true)};` : ''}
      "` : '';

      const classes = `
        rf-badge
        size-${size}
        ${acts ? `acts-${acts}` : ''}
        ${bgColor ? 'has-bg' : ''}
      `.trim();

      this.innerHTML = `
        <span class="${classes}" ${style}>
          ${this.textContent}
        </span>
      `;
    }
  }

  customElements.define('rf-badge', RfBadgeElement);
}

export default RfBadge; 