import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'

class HomeView extends PolymerElement {
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

            <main class="home">
                <section class="section">
                    <form action="#">
                        <fieldset>
                            <legend>
                                Algemeen
                            </legend>
                            <div class="row">
                                <label>
                                    Geslacht
                                </label>
                                <select>
                                    <option>
                                        Man
                                    </option>
                                    <option>
                                        Vrouw
                                    </option>
                                </select>
                            </div>

                            <div class="row">
                                <label>
                                    Leeftijd van het kind
                                </label>
                                <select>
                                    <option>
                                        0-4 jaar
                                    </option>
                                    <option>
                                        4-8 jaar
                                    </option>
                                    <option>
                                        8-12 jaar
                                    </option>
                                    <option>
                                        12-16 jaar
                                    </option>
                                    <option>
                                        16-18 jaar
                                    </option>
                                </select>
                            </div>

                            <div class="row">
                                <label>
                                    Leeftijd moeder bij geboorte
                                </label>
                                <select>
                                    <option>
                                        Jonger dan 20
                                    </option>
                                    <option>
                                        20 tot 25
                                    </option>
                                    <option>
                                        25 tot 30
                                    </option>
                                    <option>
                                        30 tot 35
                                    </option>
                                    <option>
                                        35 tot 40
                                    </option>
                                    <option>
                                        40 jaar en ouder
                                    </option>
                                </select>
                            </div>

                            <div class="row">
                                <label>
                                    Leeftijd moeder bij geboorte
                                </label>
                                <select>
                                    <option>
                                        Jonger dan 20
                                    </option>
                                    <option>
                                        20 tot 25
                                    </option>
                                    <option>
                                        25 tot 30
                                    </option>
                                    <option>
                                        30 tot 35
                                    </option>
                                    <option>
                                        35 tot 40
                                    </option>
                                    <option>
                                        40 jaar en ouder
                                    </option>
                                </select>
                            </div>

                            <div class="row">
                                <label>
                                    Leeftijdsverschil tussen ouders
                                </label>
                                <select>
                                    <option>
                                        Minder dan 5 jaar
                                    </option>
                                    <option>
                                        Meer dan 5 jaar
                                    </option>
                                </select>
                            </div>

                            <div class="row">
                                <label>
                                    Herkomst ouders
                                </label>
                                <select>
                                    <option>
                                        Beide ouders Nederlands
                                    </option>
                                    <option>
                                        Beide ouders niet Nederlands
                                    </option>
                                    <option>
                                        Een van de ouders Nederlands en de andere niet Nederlands
                                    </option>
                                </select>
                            </div>

                            <div class="row">
                                <label>
                                    Hulptraject
                                </label>
                                <select>
                                    <option>
                                        Geen jeugdhulp zonder verblijf gehad
                                    </option>
                                    <option>
                                        Jeugdhulp zonder verblijf gehad
                                    </option>
                                </select>
                            </div>
                        </fieldset>
                    </form>
                </section>
            </main>
        `
    }

    onClick (event) {
        console.log(event)
    }
}

window.customElements.define('ri-home', HomeView)
