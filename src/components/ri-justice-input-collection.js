import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'

class JusticeInputCollection extends PolymerElement {
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
                    Justitie
                </legend>

                <div class="row">
                    <label for="child-suspected-in-crime">
                        Kind in het verleden verdacht geweest van een delict
                    </label>
                    <select name="child-suspected-in-crime" id="child-suspected-in-crime">
                        <option disabled="disabled" selected="selected" value="empty">
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

                <div class="row">
                    <label for="child-in-halt">
                        Kind in aanraking geweest met bureau HALT voor een delict
                    </label>
                    <select name="child-in-halt" id="child-in-halt">
                        <option disabled="disabled" selected="selected" value="empty">
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

                <div class="row">
                    <label for="parents-suspected-in-crime">
                        Vader of moeder verdacht van delict in het verleden
                    </label>
                    <select name="parents-suspected-in-crime" id="parents-suspected-in-crime">
                        <option disabled="disabled" selected="selected" value="empty">
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

                <div class="row">
                    <label for="father-suspected-in-crime">
                        Vader verdacht van delict in het verleden
                    </label>
                    <select name="father-suspected-in-crime" id="father-suspected-in-crime">
                        <option disabled="disabled" selected="selected" value="empty">
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

                <div class="row">
                    <label for="mother-suspected-in-crime">
                        Moeder verdacht van delict in het verleden
                    </label>
                    <select name="mother-suspected-in-crime" id="mother-suspected-in-crime">
                        <option disabled="disabled" selected="selected" value="empty">
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

window.customElements.define('ri-justice-input-collection', JusticeInputCollection)