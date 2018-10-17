import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'
import { setNewLocalstorage } from '../utils/setNewLocalstorage.js'
import { getLocalstorageValue } from '../utils/getLocalstorageValue.js'
import { setFactorValue } from '../utils/setFactorValue.js'
import { triggerRegenerateEvent } from '../utils/triggerRegenerateEvent.js'

class GeneralInputCollection extends PolymerElement {
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
                    Algemeen
                </legend>

                <div class="row">
                    <label for="first-name">
                        Voornaam kind
                    </label>
                    <input on-change="onChangeName" name="first-name" id="first-name"/>
                </div>

                <div class="row">
                    <label for="last-name">
                        Achternaam kind
                    </label>
                    <input on-change="onChangeName" name="last-name" id="last-name"/>
                </div>

                <div class="row">
                    <label for="gender">
                        Geslacht
                    </label>
                    <select on-change="onChange" name="gender" id="gender">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="male">
                            Man
                        </option>
                        <option value="female">
                            Vrouw
                        </option>
                    </select>
                </div>

                <div class="row">
                    <label for="age-child">
                        Leeftijd van het kind
                    </label>
                    <select on-change="onChange" name="age-child" id="age-child">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="0-4">
                            0-4 jaar
                        </option>
                        <option value="4-8">
                            4-8 jaar
                        </option>
                        <option value="8-12">
                            8-12 jaar
                        </option>
                        <option value="12-16">
                            12-16 jaar
                        </option>
                        <option value="16-18">
                            16-18 jaar
                        </option>
                    </select>
                </div>

                <div class="row">
                    <label for="age-mother">
                        Leeftijd moeder bij geboorte
                    </label>
                    <select on-change="onChange" name="age-mother" id="age-mother">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="lt20">
                            Jonger dan 20
                        </option>
                        <option value="20-25">
                            20 tot 25
                        </option>
                        <option value="25-30">
                            25 tot 30
                        </option>
                        <option value="30-35">
                            30 tot 35
                        </option>
                        <option value="35-40">
                            35 tot 40
                        </option>
                        <option value="gte40">
                            40 jaar en ouder
                        </option>
                    </select>
                </div>

                <div class="row">
                    <label for="age-father">
                        Leeftijd vader bij geboorte
                    </label>
                    <select on-change="onChange" name="age-father" id="age-father">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="lt20">
                            Jonger dan 20
                        </option>
                        <option value="20-25">
                            20 tot 25
                        </option>
                        <option value="25-30">
                            25 tot 30
                        </option>
                        <option value="30-35">
                            30 tot 35
                        </option>
                        <option value="35-40">
                            35 tot 40
                        </option>
                        <option value="gte40">
                            40 jaar en ouder
                        </option>
                    </select>
                </div>

                <div class="row">
                    <label for="age-difference-parents">
                        Leeftijdsverschil tussen ouders
                    </label>
                    <select on-change="onChange" name="age-difference-parents" id="age-difference-parents">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="lt5">
                            Minder dan 5 jaar
                        </option>
                        <option value="gt5">
                            Meer dan 5 jaar
                        </option>
                    </select>
                </div>

                <div class="row">
                    <label for="origin-parents">
                        Herkomst ouders
                    </label>
                    <select on-change="onChange" name="origin-parents" id="origin-parents">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="dutch">
                            Beide ouders Nederlands
                        </option>
                        <option value="foreign">
                            Beide ouders niet Nederlands
                        </option>
                        <option value="1to1">
                            Een van de ouders Nederlands en de andere niet Nederlands
                        </option>
                    </select>
                </div>

                <div class="row">
                    <label for="guidance">
                        Hulptraject
                    </label>
                    <select on-change="onChange" name="guidance" id="guidance">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="none">
                            Geen jeugdhulp zonder verblijf gehad
                        </option>
                        <option value="guidance">
                            Jeugdhulp zonder verblijf gehad
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

        setNewLocalstorage(inputName, selectedValue, 'general')

        if (inputName === 'gender') {
            if (selectedValue === 'male') {
                setFactorValue(inputName, -0.12610868)
            } else {
                setFactorValue(inputName, 0)
            }
        } else if (inputName === 'age-mother') {
            if (selectedValue === 'lt20') {
                setFactorValue(inputName, 0.45149781)
            } else if (selectedValue === '20-25') {
                setFactorValue(inputName, 0.10851786)
            } else if (selectedValue === '25-30') {
                setFactorValue(inputName, 0.08840876)
            } else if (selectedValue === '35-40') {
                setFactorValue(inputName, 0.23987545)
            } else if (selectedValue === 'gte40') {
                setFactorValue(inputName, -0.11153052)
            } else {
                setFactorValue(inputName, 0)
            }
        } else if (inputName === 'age-father') {
            if (selectedValue === 'lt20') {
                setFactorValue(inputName, -0.00587023)
            } else if (selectedValue === '25-30') {
                setFactorValue(inputName, 0.031069)
            } else if (selectedValue === '35-40') {
                setFactorValue(inputName, -0.2162358)
            } else if (selectedValue === 'gte40') {
                setFactorValue(inputName, -0.32645414)
            } else {
                setFactorValue(inputName, 0)
            }
        } else if (inputName === 'age-difference-parents') {
            if (selectedValue === 'gt5') {
                setFactorValue(inputName, 0.28580939)
            } else {
                setFactorValue(inputName, 0)
            }
        } else if (inputName === 'origin-parents') {
            if (selectedValue === 'foreign') {
                setFactorValue(inputName, 0.16972268)
            } else if (selectedValue === '1to1') {
                setFactorValue(inputName, -0.08942976)
            } else {
                setFactorValue(inputName, 0)
            }
        } else if (inputName === 'guidance') {
            if (selectedValue === 'guidance') {
                setFactorValue(inputName, 1.52773741)
            } else {
                setFactorValue(inputName, 0)
            }
        }

        triggerRegenerateEvent()
    }

    onChangeName (event) {
        const { target } = event
        const { value, name: inputName } = target

        setNewLocalstorage(inputName, value, 'general')
    }

    ready () {
        super.ready()

        const endPoints = [
            'first-name',
            'last-name',
            'gender',
            'age-child',
            'age-mother',
            'age-father',
            'age-difference-parents',
            'origin-parents',
            'guidance',
        ]

        endPoints.map(endPoint => {
            const input = this.shadowRoot.getElementById(endPoint)
            const lsv = getLocalstorageValue('general', endPoint)

            if (lsv) {
                input.value = lsv
            }
        })
    }
}

window.customElements.define('ri-general-input-collection', GeneralInputCollection)