import { LitElement, html, css, unsafeCSS } from 'lit';
import './cat-wrapper.js';
import './dog-wrapper.js';

export class AppComponent extends LitElement {

  static properties = {}

  static styles = [
    css`
      @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');

      .mainCont {
        display: flex;
        flex-direction: column;
      }

      .title {
        font-family: Monoton, sans-serif;
        text-align: center;
      }

      .cont {
        display: flex;
      }

      .left, .right {
        flex-grow: 1;
        display: flex;
        justify-content: center;
      }
    `
  ]

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="mainCont">
        <h1 class="title">Pet Show</h1>
        <div class="cont">
          <div class="left">
            <cat-wrapper></cat-wrapper>
          </div>
          <div class="right">
            <dog-wrapper></dog-wrapper>
          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('app-component')) {
  customElements.define('app-component', AppComponent);
}