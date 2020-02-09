import { html, LitElement, customElement, property } from './lib/lit-element.js';
import { until } from './lib/lit-html/directives/until.js';

@customElement('view-b')
export default class ViewB extends LitElement {


    @property({ type: String })
    item = '?';

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
    }

    render() {

        return html`
            <h1>View B</h1>
            <p>Not much to see here; just ${this.item}</p>
        `;
    }

}