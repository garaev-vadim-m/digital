export class BaseButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const button = document.createElement('button');
    button.textContent = this.textContent;
    this.textContent = '';

    const style = document.createElement('style');
    style.textContent = `
      button {
        padding: 8px clamp(30px, 5vw, ${this.getAttribute('maxPadding') || '100'}px);
        font-size: clamp(14px, 5vw, ${this.getAttribute('maxFontSize') || '36'}px);
        color: var(--color-yellow);
        background-color: ${this.getAttribute('color') || 'var(--color-black)'};
        border:1px solid  var(--color-yellow);
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.4s ease;
        width: ${this.getAttribute('size') || '100'}%;
        max-height: ${this.getAttribute('size') || '100'}%;
        text-align: center;
      }

      button:hover {
        background-color: ${this.getAttribute('hover-bg') || 'var(--color-yellow)'};
        color: ${this.getAttribute('hover-color') || 'var(--color-black)'};
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(button);
  }
}
