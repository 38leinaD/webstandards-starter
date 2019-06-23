import { html, LitElement } from 'lit-element';

export default class AHello extends LitElement {

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
            <div>Type your name and press Enter.</div>
            <input type='text' class="input" placeholder="Your name" @keydown='${this.onKeyDown}'/>
            <div>${this.name
                ? html`Hello ${this.name}!`
                : html`---`
            }</div>
        `;
    }
}

customElements.define('a-hello', AHello);