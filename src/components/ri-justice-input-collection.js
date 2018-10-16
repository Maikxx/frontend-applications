import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'
import { setNewLocalstorage } from '../utils/setNewLocalstorage.js'
import { getLocalstorageValue } from '../utils/getLocalstorageValue.js'

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
                    <select on-change="onChange" name="child-suspected-in-crime" id="child-suspected-in-crime">
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

                <div class="row">
                    <label for="child-in-halt">
                        Kind in aanraking geweest met bureau HALT voor een delict
                    </label>
                    <select on-change="onChange" name="child-in-halt" id="child-in-halt">
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

                <div class="row">
                    <label for="parents-suspected-in-crime">
                        Vader of moeder verdacht van delict in het verleden
                    </label>
                    <select on-change="onChange" name="parents-suspected-in-crime" id="parents-suspected-in-crime">
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

                <div class="row">
                    <label for="father-suspected-in-crime">
                        Vader verdacht van delict in het verleden
                    </label>
                    <select on-change="onChange" name="father-suspected-in-crime" id="father-suspected-in-crime">
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

                <div class="row">
                    <label for="mother-suspected-in-crime">
                        Moeder verdacht van delict in het verleden
                    </label>
                    <select on-change="onChange" name="mother-suspected-in-crime" id="mother-suspected-in-crime">
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

    onChange (event) {
        const { target } = event
        const { options } = target
        const { name: inputName } = target
        const selectedValue = options[target.selectedIndex].value

        setNewLocalstorage(inputName, selectedValue, 'justice')
    }

    ready () {
        super.ready()

        const endPoints = [
            'child-suspected-in-crime',
            'child-in-halt',
            'parents-suspected-in-crime',
            'father-suspected-in-crime',
            'mother-suspected-in-crime',
        ]

        endPoints.map(endPoint => {
            const select = this.shadowRoot.getElementById(endPoint)
            const lsv = getLocalstorageValue('justice', endPoint)

            if (lsv) {
                select.value = lsv
            }
        })
    }
}

window.customElements.define('ri-justice-input-collection', JusticeInputCollection)