import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'
import '../components/ri-society-input-collection'

class SocietyView extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles"></style>

            <div class="society">
                <section class="section">
                    <form action="#">
                        <ri-society-input-collection></ri-society-input-collection>
                    </form>
                </section>
            </div>
        `
    }
}

window.customElements.define('ri-society', SocietyView)
