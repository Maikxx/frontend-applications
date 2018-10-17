import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'
import { setNewLocalstorage } from '../utils/setNewLocalstorage.js'
import { getLocalstorageValue } from '../utils/getLocalstorageValue.js'

class SocietyInputCollection extends PolymerElement {
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
                    Maatschappelijke participatie
                </legend>

                <div class="row">
                    <label for="participation-father">
                        Maatschappelijke participatie van vader
                    </label>
                    <select on-change="onChange" name="participation-father" id="participation-father">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="job">
                            Werken of overig actief
                        </option>
                        <option value="jobless">
                            Geen werk en niet actief
                        </option>
                        <option value="unknown">
                            Onbekend
                        </option>
                    </select>
                </div>

                <div class="row">
                    <label for="participation-mother">
                        Maatschappelijke participatie van moeder
                    </label>
                    <select on-change="onChange" name="participation-mother" id="participation-mother">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="job">
                            Werken of overig actief
                        </option>
                        <option value="jobless">
                            Geen werk en niet actief
                        </option>
                        <option value="unknown">
                            Onbekend
                        </option>
                    </select>
                </div>

                <div class="row">
                    <label for="socio-status-father">
                        Socio economische status van vader
                    </label>
                    <select on-change="onChange" name="socio-status-father" id="socio-status-father">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="welfare-recipient">
                            Bijstandsontvanger
                        </option>
                        <option value="incapacitated">
                            Arbeidsongeschikte
                        </option>
                        <option value="social-service">
                            Ontvanger overige sociale voorzieningen
                        </option>
                        <option value="unemployment-benefits">
                            Ontvanger werkloosheidsuitkering
                        </option>
                        <option value="official">
                            Ambtenaar
                        </option>
                        <option value="director">
                            Directeur groot aandeelhouder
                        </option>
                        <option value="active">
                            Overig actief
                        </option>
                        <option value="inactive">
                            Overig niet actief
                        </option>
                        <option value="retired">
                            Pensioen
                        </option>
                        <option value="father-unknown">
                            Vader onbekend
                        </option>
                        <option value="employee">
                            Werknemer particulier bedrijf
                        </option>
                        <option value="self-employed">
                            Zelfstandige
                        </option>
                        <option value="no-income">
                            Zonder inkomen
                        </option>
                        <option value="student">
                            Student
                        </option>
                    </select>
                </div>

                <div class="row">
                    <label for="socio-status-mother">
                        Socio economische status van moeder
                    </label>
                    <select on-change="onChange" name="socio-status-mother" id="socio-status-mother">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="welfare-recipient">
                            Bijstandsontvanger
                        </option>
                        <option value="incapacitated">
                            Arbeidsongeschikte
                        </option>
                        <option value="social-service">
                            Ontvanger overige sociale voorzieningen
                        </option>
                        <option value="unemployment-benefits">
                            Ontvanger werkloosheidsuitkering
                        </option>
                        <option value="official">
                            Ambtenaar
                        </option>
                        <option value="director">
                            Directeur groot aandeelhouder
                        </option>
                        <option value="active">
                            Overig actief
                        </option>
                        <option value="inactive">
                            Overig niet actief
                        </option>
                        <option value="retired">
                            Pensioen
                        </option>
                        <option value="father-unknown">
                            Vader onbekend
                        </option>
                        <option value="employee">
                            Werknemer particulier bedrijf
                        </option>
                        <option value="self-employed">
                            Zelfstandige
                        </option>
                        <option value="no-income">
                            Zonder inkomen
                        </option>
                        <option value="student">
                            Student
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

        setNewLocalstorage(inputName, selectedValue, 'society')
    }

    ready () {
        super.ready()

        const endPoints = [
            'participation-father',
            'participation-mother',
            'socio-status-mother',
            'socio-status-father',
        ]
        endPoints.map(endPoint => {
            const select = this.shadowRoot.getElementById(endPoint)
            const lsv = getLocalstorageValue('society', endPoint)

            if (lsv) {
                select.value = lsv
            }
        })
    }
}

window.customElements.define('ri-society-input-collection', SocietyInputCollection)