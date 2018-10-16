import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'

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
                    padding: 24px 0;
                }
            </style>

            <fieldset>
                <legend>
                    Algemeen
                </legend>
                <div class="row">
                    <label for="gender">
                        Geslacht
                    </label>
                    <select name="gender" id="gender">
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
                    <select name="age-child" id="age-child">
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
                    <select name="age-mother" id="age-mother">
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
                    <select name="age-father" id="age-father">
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
                    <select name="age-difference-parents" id="age-difference-parents">
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
                    <select name="origin-parents" id="origin-parents">
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
                    <select name="guidance" id="guidance">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="none">
                            Geen jeugdhulp zonder verblijf gehad
                        </option>
                        <option >
                            Jeugdhulp zonder verblijf gehad
                        </option>
                    </select>
                </div>
            </fieldset>
        `
    }
}

window.customElements.define('ri-general-input-collection', GeneralInputCollection)