var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, customElement, property } from './lib/lit-element.js';
let ViewB = class ViewB extends LitElement {
    constructor() {
        super();
        this.item = '?';
    }
    connectedCallback() {
        super.connectedCallback();
    }
    render() {
        return html `
            <h1>View B</h1>
            <p>Not much to see here; just ${this.item}</p>
        `;
    }
};
__decorate([
    property({ type: String })
], ViewB.prototype, "item", void 0);
ViewB = __decorate([
    customElement('view-b')
], ViewB);
export default ViewB;
