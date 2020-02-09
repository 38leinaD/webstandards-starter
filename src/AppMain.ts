import { html, LitElement, customElement, property } from '/lib/lit-element.js';
import Navigo from '/lib/navigo.js';


import './ViewA.js'
import './ViewB.js'

@customElement('app-main')
export default class AppMain extends LitElement {

    @property()
    currentView: Object;

    router = null;

    constructor() {
        super();
    }

    async connectedCallback() {
        super.connectedCallback();
        //console.log(`Counter: ${await test.init()}`);
        this.initRouter();
    }

    firstUpdated(changedProperties) {
    }

    initRouter() {
        this.router = new Navigo(null, true, '#!');
        this.router
            .on({
                'viewa': () => this.currentView = html`<view-a></view-a>`,
                'viewb/:item': (params) => this.currentView = html`<view-b item="${params.item}"></view-b>`,
                '*': () => this.currentView = html`<span>No route</span>`
            })
            .resolve();

        this.requestUpdate();
    }

    _renderCurrentView() {
        return this.currentView;
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
        <main>
            <header>
                <h2>header</h2>
            </header>
            <nav>
    
                <ul>
                    <li>
                        <a href="#!viewa">View A</a>
                    </li>
                    <li>
                        <a href="#!viewb/4">View B</a>
                    </li>
                </ul>

            </nav>
            <article id="outlet">
                ${this._renderCurrentView()}
            </article>
            <footer>
                <small>&copy; 2020</small>
            </footer>
        </main>
        `;
    }
}