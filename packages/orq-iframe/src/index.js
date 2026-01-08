import { LitElement, html, css, unsafeCSS } from 'lit';

export class AppComponent extends LitElement {

  static properties = {}

  static styles = [
    css`
      @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');

      .mainCont {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .title {
        font-family: Monoton, sans-serif;
        text-align: center;
        font-weight: normal;
        font-size: 4rem;
        margin: 1rem 0;
      }

      iframe {
        border: none;
        width: 100%;
        height: 100%;
      }

      .cont {
        flex-grow: 1;
        margin: 1rem;
        display: flex;
        gap: 1rem;
      }

      .cont .examples {
        flex: 1;
        flex-direction: column;
        display: flex;
        gap: 1rem;
      }

      .cont .poke {
        flex: 2;
        display: flex;
      }

      .frame {
        border-radius: 1rem;
        padding: 0.5rem;
        border: 0.2rem dashed darkgray;
        box-sizing: border-box;
      }

      footer {
        margin: 2rem;
        text-align: center;
        font-weight: bold;
      }
    `
  ]

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="mainCont">
        <h1 class="title">Microfronts</h1>
        <div class="cont">
          <div class="examples">
            <iframe class="frame" src="http://localhost:3011"></iframe>
            <iframe class="frame" src="http://localhost:3012"></iframe>
          </div>
          <div class="poke">
            <iframe class="frame" src="http://localhost:5173"></iframe>
          </div>
        </div>
        <footer>Kodeneko@2026</footer>
      </div>
    `;
  }
}

if (!customElements.get('app-component')) {
  customElements.define('app-component', AppComponent);
}