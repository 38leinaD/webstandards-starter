var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, customElement } from '/lib/lit-element.js';
import { Router } from '/lib/@vaadin/router.js';
import './ViewA.js';
import './ViewB.js';
let AppMain = class AppMain extends LitElement {
    constructor() {
        super();
        this.router = null;
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
        return html `
        <main>
            <header>
                <h2>header</h2>
            </header>
            <nav>
                ${this.router != null ?
            html `
                <ul>
                    <li>
                    <a href="${this.router.urlForName("viewa")}">View A</a>
                    </li>
                    <li>
                        <a href="${this.router.urlForName("viewb")}">View B</a>
                    </li>
                </ul>
                ` : html ``}
            </nav>
            <article id="outlet">
            </article>
            <footer>
                <small>&copy; 2019</small>
            </footer>
        </main>
        `;
    }
};
AppMain = __decorate([
    customElement('app-main')
], AppMain);
export default AppMain;
