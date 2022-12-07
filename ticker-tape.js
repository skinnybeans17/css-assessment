const template = document.createElement('template');
template.innerHTML = `
    <style>
    @keyframes move {
            0% { transform: translateX(-500px); }
            100% { transform: translateX(500px); }
        }
    </style>
`

class TickerTape extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

        this._text = document.createElement('a');
        this._text.innerHTML = this.innerHTML;
        this._shadowRoot.appendChild(this._text);
        this._text.style.animation = 'move 4s infinite linear';
    }
}

customElements.define('ticker-tape', TickerTape);