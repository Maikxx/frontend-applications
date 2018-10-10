import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'

class DetailView extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles">
                :host {
                    display: block;

                    padding: 10px;
                }
            </style>

            <div class="card">
                <div class="circle">
                    2
                </div>
                <h1>
                    View Two
                </h1>
            </div>
        `
    }
}

window.customElements.define('ri-detail', DetailView)
