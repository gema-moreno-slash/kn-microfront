import { LitElement, html, css, unsafeCSS } from 'lit';
import './cat-wrapper.js';
import './dog-wrapper.js';

export class CatWrapper extends LitElement {
  static properties = {};

  constructor() {
    super();
    this.test();
    this._mounted = false;
  }

  async test() {
    const { default: CatShow } = await import("microCat");
  }
/*
  async firstUpdated() {
    const mountPoint = this.renderRoot.querySelector("#mount");

    const [{ default: CatShow }, React, ReactDOM] = await Promise.all([
      import("microCat/cat-show"),
      import("react"),
      import("react-dom"),
    ]);

    this._root = mountPoint;
    this._react = { React, ReactDOM };

    ReactDOM.render(
      React.createElement(CatShow),
      mountPoint
    );

    this._mounted = true;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._react && this._root) {
      this._react.ReactDOM.unmountComponentAtNode(this._root);
    }
  }
*/
  render() {
    return html`<div id="mount"></div>`;
  }
}

if (!customElements.get('cat-wrapper')) {
  customElements.define('cat-wrapper', CatWrapper);
}