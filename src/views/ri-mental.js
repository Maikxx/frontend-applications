import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'
import '../components/ri-mental-input-collection'

class MentallView extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles"></style>

            <div class="mental">
                <section class="section">
                    <form action="#">
                        <ri-mental-input-collection></ri-mental-input-collection>
                    </form>
                </section>
            </div>
        `
    }
}

window.customElements.define('ri-mental', MentallView)
