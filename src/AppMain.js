var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, property, customElement } from '/lib/lit-element.js';
import Navigo from '/lib/navigo.js';
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
        this.initRouter();
    }
    firstUpdated(changedProperties) {
    }
    initRouter() {
        this.router = new Navigo(null, true, '#!');
        this.router
            .on({
            'viewa': () => this.currentView = html `<view-a></view-a>`,
            'viewb/:item': (params) => this.currentView = html `<view-b item="${params.item}"></view-b>`,
            '*': () => this.currentView = html `<span>No route</span>`
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
        return html `
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
};
__decorate([
    property()
], AppMain.prototype, "currentView", void 0);
AppMain = __decorate([
    customElement('app-main')
], AppMain);
export default AppMain;
//# sourceMappingURL=AppMain.js.map