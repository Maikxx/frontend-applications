import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'
import { setNewLocalstorage } from '../utils/setNewLocalstorage.js'
import { getLocalstorageValue } from '../utils/getLocalstorageValue.js'

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
                        <option value="passed">
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
        const { options } = target
        const { name: inputName } = target
        const selectedValue = options[target.selectedIndex].value

        setNewLocalstorage(inputName, selectedValue, 'education')
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