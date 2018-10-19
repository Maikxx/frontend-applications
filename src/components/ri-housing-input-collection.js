import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'
import { setNewLocalstorage } from '../utils/setNewLocalstorage.js'
import { getLocalstorageValue } from '../utils/getLocalstorageValue.js'
import { setFactorValue } from '../utils/setFactorValue.js'
import { triggerRegenerateEvent } from '../utils/triggerRegenerateEvent.js'

class HousingInputCollection extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles"></style>

            <fieldset>
                <legend>
                    Huisvesting
                </legend>
                <div class="field">
                    <label for="home-type">
                        Soort woning
                    </label>
                    <select on-change="onChange" name="home-type" id="home-type">
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

                <div class="field">
                    <label for="situational-type">
                        Type huishouden
                    </label>
                    <select on-change="onChange" name="situational-type" id="situational-type">
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

    ready() {
        super.ready()

        const inputNames = [
            'home-type',
            'situational-type',
        ]

        inputNames.map(inputName => {
            const select = this.shadowRoot.getElementById(inputName)
            const localStorageValue = getLocalstorageValue('housing', inputName)

            if (localStorageValue) {
                select.value = localStorageValue
            }
        })
    }

    onChange(event) {
        const { target } = event
        const { options, name: inputName } = target
        const selectedValue = options[target.selectedIndex].value

        setNewLocalstorage(inputName, selectedValue, 'housing')

        if (inputName === 'home-type') {
            if (selectedValue === 'property-with') {
                setFactorValue(inputName, 0.3840103)
            }  else if (selectedValue === 'property-without') {
                setFactorValue(inputName, 0.40420458)
            } else if (selectedValue === 'unknown') {
                setFactorValue(inputName, 2.40126358)
            } else {
                setFactorValue(inputName, 0)
            }
        } else if (inputName === 'situational-type') {
            if (selectedValue === 'single-parent') {
                setFactorValue(inputName, 0.49608469)
            } else if (selectedValue === 'single-person') {
                setFactorValue(inputName, 1.7185851)
            } else if (selectedValue === 'married-without-children') {
                setFactorValue(inputName, 1.06108193)
            } else if (selectedValue === 'institutional') {
                setFactorValue(inputName, 1.92321053)
            } else if (selectedValue === 'not-married-without-children') {
                setFactorValue(inputName, -14.15530169)
            } else if (selectedValue === 'other') {
                setFactorValue(inputName, 0.91364613)
            } else if (selectedValue === 'unknown') {
                setFactorValue(inputName, -13.81002181)
            } else if (selectedValue === 'not-married-with-children') {
                setFactorValue(inputName, 0.32693636)
            } else {
                setFactorValue(inputName, 0)
            }
        }

        triggerRegenerateEvent()
    }
}

window.customElements.define('ri-housing-input-collection', HousingInputCollection)