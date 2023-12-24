import {
	LitElement,
	html,
	css,
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

class PaddingCard extends LitElement {
	static get properties() {
		return {
			hass: {},
			config: {},
		};
	}

	static getStubConfig() {
		return {
			type: 'custom:padding-card',
			height: 6,
		}
	}

		
	constructor() {
		super();

		const stub = PaddingCard.getStubConfig();
		this.height = stub.height;
	}	

	setConfig(config) {
		if (config.height) {
			this.height = config.height;
		}

		this.config = config;
	}

	render() {
		return html`
			<div class="padding-card" style="height: ${this.height}px">
			</div>
		`;
	}
}

customElements.define("padding-card", PaddingCard);