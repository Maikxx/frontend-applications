import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'

class NotFoundView extends PolymerElement {
	static get template() {
		return html`
			<style>
				:host {
					display: block;
					padding: 12px 24px;
				}
			</style>

			Oops you hit a 404.
			<a href="[[rootPath]]">
				Head back to home.
			</a>
		`
	}
}

window.customElements.define('ri-not-found', NotFoundView)
