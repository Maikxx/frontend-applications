import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'

class HousingInputCollection extends PolymerElement {
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
                    Huisvesting
                </legend>
                <div class="row">
                    <label for="home-type">
                        Soort woning
                    </label>
                    <select name="home-type" id="home-type">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="own-property">
                            Eigen woning
                        </option>
                        <option value="property-with">
                            Huurwoning met huurtoeslag
                        </option>
                        <option value="property-without">
                            Huurwoning zonder huurtoeslag
                        </option>
                        <option value="unknown">
                            Onbekend
                        </option>
                    </select>
                </div>

                <div class="row">
                    <label for="situational-type">
                        Type huishouden
                    </label>
                    <select name="situational-type" id="situational-type">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="single-parent">
                            Eenouderhuishouden
                        </option>
                        <option value="married-with-children">
                            Gehuwd paar met kinderen
                        </option>
                        <option value="single-person">
                            Eenpersoonshuishouden
                        </option>
                        <option value="not-married-with-children">
                            Niet gehuwd paar met kinderen
                        </option>
                        <option value="married-without-children">
                            Gehuwd paar zonder kinderen
                        </option>
                        <option value="institutional">
                            Insitutioneel huishouden
                        </option>
                        <option value="not-married-without-children">
                            Niet gehuwd paar zonder kinderen
                        </option>
                        <option value="other">
                            Overig huishouden
                        </option>
                        <option value="unknown">
                            Onbekend
                        </option>
                    </select>
                </div>
            </fieldset>
        `
    }
}

window.customElements.define('ri-housing-input-collection', HousingInputCollection)