import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'

class HomeView extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles"></style>

            <div class="home">
                <section class="section">
                    Uitleg
                </section>
            </div>
        `
    }
}

window.customElements.define('ri-home', HomeView)
