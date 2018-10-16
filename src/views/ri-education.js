import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'
import '../components/ri-education-input-collection'

class EducationView extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles"></style>

            <div class="education">
                <section class="section">
                    <form action="#">
                        <ri-education-input-collection></ri-education-input-collection>
                    </form>
                </section>
            </div>
        `
    }
}

window.customElements.define('ri-education', EducationView)
