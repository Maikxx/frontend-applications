import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'
import { setNewLocalstorage } from '../utils/setNewLocalstorage.js'
import { getLocalstorageValue } from '../utils/getLocalstorageValue.js'
import { setFactorValue } from '../utils/setFactorValue.js'
import { triggerRegenerateEvent } from '../utils/triggerRegenerateEvent.js'

class RelationalInputCollection extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles">
                legend {
                    padding-top: 24px;
                    border-bottom: 2px solid black;
                }

                fieldset {
                    border: 0;
                    padding: 24px 12px;
                }
            </style>

            <fieldset>
                <legend>
                    Huiselijke relaties
                </legend>

                <div class="row">
                    <label for="parents-divorced">
                        Ouders gescheiden
                    </label>
                    <select on-change="onChange" name="parents-divorced" id="parents-divorced">
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

    ready() {
        super.ready()

        const inputNames = [
            'parents-divorced',
        ]

        inputNames.map(inputName => {
            const select = this.shadowRoot.getElementById(inputName)
            const localStorageValue = getLocalstorageValue('relational', inputName)

            if (localStorageValue) {
                select.value = localStorageValue
            }
        })
    }

    onChange(event) {
        const { target } = event
        const { options, name: inputName } = target
        const selectedValue = options[target.selectedIndex].value

        setNewLocalstorage(inputName, selectedValue, 'relational')

        if (selectedValue === 'yes') {
            setFactorValue(inputName, 0.27683414)
        } else {
            setFactorValue(inputName, 0)
        }

        triggerRegenerateEvent()
    }
}

window.customElements.define('ri-relational-input-collection', RelationalInputCollection)