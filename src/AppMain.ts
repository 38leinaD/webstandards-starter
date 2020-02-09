import { html, LitElement, customElement } from '/lib/lit-element.js';
import { Router } from '/lib/@vaadin/router.js';


import './ViewA.js'
import './ViewB.js'

@customElement('app-main')
export default class AppMain extends LitElement {

    router = null;

    constructor() {
        super();
    }

    async connectedCallback() {
        super.connectedCallback();
        //console.log(`Counter: ${await test.init()}`);

    }

    firstUpdated(changedProperties) {
        this.initRouter();
    }

    initRouter() {
        const outlet = document.querySelector('#outlet');
        this.router = new Router(outlet);

        window.addEventListener('vaadin-router-location-changed', (event) => {
            //this.requestUpdate();
        });

        this.router.setRoutes([
            {
                name: 'viewa', path: '/', component: 'view-a'
            },
            {
                name: 'viewb', path: '/b', component: 'view-b'
            },
            {
                path: '(.*)', component: 'view-a'
            },
        ]);

        window.addEventListener('vaadin-router-location-changed', (event) => {

        });

        this.requestUpdate();
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
                ${this.router != null ?
                html`
                <ul>
                    <li>
                    <a href="${this.router.urlForName("viewa")}">View A</a>
                    </li>
                    <li>
                        <a href="${this.router.urlForName("viewb")}">View B</a>
                    </li>
                </ul>
                ` : html``}
            </nav>
            <article id="outlet">
            </article>
            <footer>
                <small>&copy; 2019</small>
            </footer>
        </main>
        `;
    }
}