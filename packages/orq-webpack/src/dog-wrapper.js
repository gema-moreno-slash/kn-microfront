import { LitElement, html, css, unsafeCSS } from 'lit';

export class DogWrapper extends LitElement {

  createRenderRoot() {
    return this;
  }

  static properties = {}

  constructor() {
    super();
  }

  render() {
    return html`
      <p>Dog Wrapper</p>
    `;
  }
}

if (!customElements.get('dog-wrapper')) {
  customElements.define('dog-wrapper', DogWrapper);
}