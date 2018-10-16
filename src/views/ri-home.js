import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'
import '../components/ri-general-input-collection.js'

class HomeView extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles">
                legend {
                    padding-top: 24px;
                    border-bottom: 2px solid black;
                }

                fieldset {
                    border: 0;
                    padding: 24px 0;
                }
            </style>

            <main class="home">
                <section class="section">
                    <form action="#">
                        <ri-general-input-collection></ri-general-input-collection>
                    </form>
                </section>
            </main>
        `
    }

    onClick (event) {
        console.log(event)
    }
}

window.customElements.define('ri-home', HomeView)
