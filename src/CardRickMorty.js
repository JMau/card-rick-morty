import { html, css, LitElement } from 'lit-element';

export class CardRickMorty extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        text-align: center;
        font-size: 1.2rem;
      }
    `;
  }

  static get properties() {
    return {
      image: { type: String },
      index: { type: Number },
      name: { type: String },
    };
  }

  constructor() {
    super();
    this.image = '';
    this.name = '';
    this.index = 0;
  }


  render() {
    return html`
      <div class="card">
        <div class="imagen">
          <img src="${this.image}" alt="${this.name}"/>
        </div>
        <div class="contenido">
          <p><span># ${this.index}</span></p>
          <p><strong>${this.name}</strong></p>
        </div>
      </div>
    `;
  }
}
