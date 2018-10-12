import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '@vaadin/vaadin-form-layout/theme/material/vaadin-form-item'
import '@vaadin/vaadin-form-layout/theme/material/vaadin-form-layout'
import '@vaadin/vaadin-text-field/theme/material/vaadin-text-field'
import '../shared-styles.js'
import '../components/ri-overviewCard'

class HomeView extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles">
                :host {
                    display: block;
                }
            </style>

            <main class="home">
                <ri-overview-card></ri-overview-card>

                <section class="card">
                    <vaadin-form-layout>
                        <vaadin-form-item>
                            <vaadin-text-field name="gender" label="Geslacht"></vaadin-text-field>
                        </vaadin-form-item>

                        <vaadin-form-item>
                            <label slot="label">
                                Last Name
                            </label>
                            <input class="full-width" value="Doe"/>
                        </vaadin-form-item>
                    </vaadin-form-layout>
                </section>
            </main>
        `
    }
}

window.customElements.define('ri-home', HomeView)
