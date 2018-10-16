import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'

class MentalInputCollection extends PolymerElement {
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

            <fieldset>
                <legend>
                    Geestelijke gezondheid
                </legend>

                <div class="row">
                    <label for="known-at-guidance-help">
                        Als slachtoffer bekend bij slachtofferhulp
                    </label>
                    <select name="known-at-guidance-help" id="known-at-guidance-help">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="yes">
                            Ja
                        </option>
                        <option value="no">
                            Nee
                        </option>
                    </select>
                </div>
            </fieldset>
        `
    }
}

window.customElements.define('ri-mental-input-collection', MentalInputCollection)