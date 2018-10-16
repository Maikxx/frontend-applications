import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'
import '../components/ri-relational-input-collection'

class RelationalView extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles"></style>

            <div class="relational">
                <section class="section">
                    <form action="#">
                        <ri-relational-input-collection></ri-relational-input-collection>
                    </form>
                </section>
            </div>
        `
    }
}

window.customElements.define('ri-relational', RelationalView)
