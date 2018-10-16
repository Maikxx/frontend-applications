import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'
import '../components/ri-general-input-collection.js'

class GeneralView extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles"></style>

            <div class="general">
                <section class="section">
                    <form action="#">
                        <ri-general-input-collection></ri-general-input-collection>
                    </form>
                </section>
            </div>
        `
    }
}

window.customElements.define('ri-general', GeneralView)
