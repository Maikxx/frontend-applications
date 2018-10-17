import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'
import { setNewLocalstorage } from '../utils/setNewLocalstorage.js'
import { getLocalstorageValue } from '../utils/getLocalstorageValue.js'
import { setFactorValue } from '../utils/setFactorValue.js'
import { triggerRegenerateEvent } from '../utils/triggerRegenerateEvent.js'

class EducationInputCollection extends PolymerElement {
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
                    Werk & opleiding
                </legend>
                <div class="row">
                    <label for="education-type">
                        Soort onderwijs van kind
                    </label>
                    <select on-change="onChange" name="education-type" id="education-type">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="regular">
                            Regulier
                        </option>
                        <option value="irregular">
                            Niet-regulier
                        </option>
                        <option value="unknown">
                            Onbekend
                        </option>
                    </select>
                </div>

                <div class="row">
                    <label for="education-level">
                        Huidig onderwijsniveau van kind
                    </label>
                    <select on-change="onChange" name="education-level" id="education-level">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="basic">
                            Basisonderwijs
                        </option>
                        <option value="vmbo-b">
                            VMBO-b/k, MBO 1, MBO 2
                        </option>
                        <option value="vmbo-g">
                            VMBO-g/t, MBO 3, MBO 4
                        </option>
                        <option value="havo">
                            HAVO onderbouw, HAVO bovenbouw of HBO bachelor
                        </option>
                        <option value="vwo">
                            VWO of WO bachelor
                        </option>
                        <option value="unknown">
                            Onbekend
                        </option>
                    </select>
                </div>

                <div class="row">
                    <label for="education-change">
                        Verandering in het voortgezet onderwijsniveau
                    </label>
                    <select on-change="onChange" name="education-change" id="education-change">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="ascent">
                            Opschalen of gelijk blijven
                        </option>
                        <option value="descent">
                            Afschalen
                        </option>
                        <option value="unknown">
                            Onbekend
                        </option>
                    </select>
                </div>

                <div class="row">
                    <label for="education-quiter">
                        Voortijdig schoolverlater
                    </label>
                    <select on-change="onChange" name="education-quiter" id="education-quiter">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="ascent">
                            Door in onderwijs
                        </option>
                        <option value="quit">
                            Voortijdig schoolverlaten
                        </option>
                        <option value="graduated">
                            Uit onderwijs met startkwalificatie
                        </option>
                        <option value="irrelevant">
                            Niet van toepassing
                        </option>
                        <option value="unknown">
                            Onbekend
                        </option>
                    </select>
                </div>

                <div class="row">
                    <label for="education-level-father">
                        Hoogst behaalde onderwijsniveau vader
                    </label>
                    <select on-change="onChange" name="education-level-father" id="education-level-father">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="vmbo-b">
                            VMBO-b/k, MBO 1, MBO 2
                        </option>
                        <option value="vmbo-g">
                            VMBO-g/t, MBO 3, MBO 4
                        </option>
                        <option value="havo">
                            HAVO onderbouw, HAVO bovenbouw, HBO bachelor of HBO master
                        </option>
                        <option value="vwo">
                            VWO, WO bachelor of WO master
                        </option>
                        <option value="unknown">
                            Onbekend
                        </option>
                    </select>
                </div>

                <div class="row">
                    <label for="education-level-mother">
                        Hoogst behaalde onderwijsniveau moeder
                    </label>
                    <select on-change="onChange" name="education-level-mother" id="education-level-mother">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="vmbo-b">
                            VMBO-b/k, MBO 1, MBO 2
                        </option>
                        <option value="vmbo-g">
                            VMBO-g/t, MBO 3, MBO 4
                        </option>
                        <option value="havo">
                            HAVO onderbouw, HAVO bovenbouw, HBO bachelor of HBO master
                        </option>
                        <option value="vwo">
                            VWO, WO bachelor of WO master
                        </option>
                        <option value="unknown">
                            Onbekend
                        </option>
                    </select>
                </div>
            </fieldset>
        `
    }

    onChange (event) {
        const { target } = event
        const { options, name: inputName } = target
        const selectedValue = options[target.selectedIndex].value

        setNewLocalstorage(inputName, selectedValue, 'education')

        if (inputName === 'education-type') {
            if (selectedValue === 'irregular') {
                setFactorValue(inputName, -0.33030829)
            } else if (selectedValue === 'unknown') {
                setFactorValue(inputName, -0.76956641)
            } else {
                setFactorValue(inputName, 0)
            }
        } else if (inputName === 'education-level') {
            if (selectedValue === 'basic') {
                setFactorValue(inputName, 0.25231544)
            } else if (selectedValue === 'vmbo-b') {
                setFactorValue(inputName, 0.87841913)
            } else if (selectedValue === 'vmbo-g') {
                setFactorValue(inputName, 0.56881862)
            } else if (selectedValue === 'vwo') {
                setFactorValue(inputName, -0.8356626)
            } else {
                setFactorValue(inputName, 0)
            }
        } else if (inputName === 'education-level-father') {
            if (selectedValue === 'unknown') {
                setFactorValue(inputName, 0.88463779)
            } else if (selectedValue === 'vmbo-b') {
                setFactorValue(inputName, -0.21629522)
            } else if (selectedValue === 'vmbo-g') {
                setFactorValue(inputName, 0.67119088)
            } else if (selectedValue === 'vwo') {
                setFactorValue(inputName, -12.08994875)
            } else {
                setFactorValue(inputName, 0)
            }
        } else if (inputName === 'education-level-father') {
            if (selectedValue === 'unknown') {
                setFactorValue(inputName, 0.03655114)
            } else if (selectedValue === 'vmbo-b') {
                setFactorValue(inputName, 0.15935901)
            } else if (selectedValue === 'vmbo-g') {
                setFactorValue(inputName, 0.03334141)
            } else if (selectedValue === 'vwo') {
                setFactorValue(inputName, -13.03161926)
            } else {
                setFactorValue(inputName, 0)
            }
        } else if (inputName === 'education-change') {
            if (selectedValue === 'descent') {
                setFactorValue(inputName, 0.58732282)
            } else if (selectedValue === 'unknown') {
                setFactorValue(inputName, -1.11681655)
            } else {
                setFactorValue(inputName, 0)
            }
        } else if (inputName === 'education-quiter') {
            if (selectedValue === 'irrelevant') {
                setFactorValue(inputName, 0.38735846)
            } else if (selectedValue === 'unknown') {
                setFactorValue(inputName, 0.80563824)
            } else if (selectedValue === 'graduated') {
                setFactorValue(inputName, -13.64192657)
            } else if (selectedValue === 'quit') {
                setFactorValue(inputName, 0.34683899)
            } else {
                setFactorValue(inputName, 0)
            }
        }

        triggerRegenerateEvent()
    }

    ready () {
        super.ready()

        const endPoints = [
            'education-type',
            'education-level',
            'education-change',
            'education-quiter',
            'education-level-father',
            'education-level-mother',
        ]

        endPoints.map(endPoint => {
            const select = this.shadowRoot.getElementById(endPoint)
            const lsv = getLocalstorageValue('education', endPoint)

            if (lsv) {
                select.value = lsv
            }
        })
    }
}

window.customElements.define('ri-education-input-collection', EducationInputCollection)