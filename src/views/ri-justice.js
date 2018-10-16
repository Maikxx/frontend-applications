import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'
import '../components/ri-justice-input-collection'

class JusticeView extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles"></style>

            <div class="justice">
                <section class="section">
                    <form action="#">
                        <ri-justice-input-collection></ri-justice-input-collection>
                    </form>
                </section>
            </div>
        `
    }
}

window.customElements.define('ri-justice', JusticeView)
