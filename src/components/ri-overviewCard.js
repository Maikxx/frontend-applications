import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'

class OverviewCard extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles">
                :host {
                    display: block;
                    padding: 12px;
                }
            </style>

            <section class="card">
                <h1>
                    Berekend risico op een zware maatregel
                </h1>
                <h2>
                    0.16%
                </h2>
            </section>
        `
    }
}

window.customElements.define('ri-overview-card', OverviewCard)
