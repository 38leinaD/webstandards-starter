import { html, LitElement } from 'lit-element';
import { until } from 'lit-html/directives/until'

export default class AppMain extends LitElement {

    static get properties() {
        return {
            name: { type: String }
        };
    }

    constructor() {
        super();
        this.name = undefined;
    }

    onKeyDown(event) {
        if (event.code === 'Enter') {
            this.name = event.target.value;
        }
    }

    render() {
        return html`
            <h1>${until(this.fetchFromServer(), html`Loading...`)}</h1>
            <div>Type your name and press Enter.</div>
            <input type='text' class="input" placeholder="Your name" @keydown='${this.onKeyDown}'/>
            <div>${this.name
                ? html`Hello ${this.name}!`
                : html`---`
            }</div>
        `;
    }

    async fetchFromServer() {
        const response = await fetch('./data.json');
        const json = await response.json();

        return html`Message from server: ${json.message}`
    }
}

customElements.define('app-main', AppMain);