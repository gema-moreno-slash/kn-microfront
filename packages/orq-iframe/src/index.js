import { LitElement, html, css, unsafeCSS } from 'lit';
import { styles } from './css.js';

const catUrl = 'http://localhost:3011';
const dogUrl = 'http://localhost:3012';

export class AppComponent extends LitElement {

  static properties = {}

  static styles = styles;

  constructor() {
    super();
  }

  firstUpdated() {
    super.connectedCallback();

    const iframeCat = this.renderRoot.querySelector('#catFrame');
    const iframeDog = this.renderRoot.querySelector('#dogFrame');

    window.addEventListener('message', (event) => {
      console.log('Message recieved:', event.data);
      if(event.origin === catUrl)
        iframeDog.contentWindow.postMessage(event.data, dogUrl);
      else if(event.origin === dogUrl)
        iframeCat.contentWindow.postMessage(event.data, catUrl);
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('message');
  }

  render() {
    return html`
      <div class="mainCont">
        <h1 class="title">Microfronts</h1>
        <div class="cont">
          <div class="examples">
            <iframe id="catFrame" class="frame" src=${catUrl}></iframe>
            <iframe id="dogFrame" class="frame" src=${dogUrl}></iframe>
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