import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'
import '../components/ri-housing-input-collection'

class HousingView extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles"></style>

            <div class="housing">
                <section class="section">
                    <form action="#">
                        <ri-housing-input-collection></ri-housing-input-collection>
                    </form>
                </section>
            </div>
        `
    }
}

window.customElements.define('ri-housing', HousingView)
