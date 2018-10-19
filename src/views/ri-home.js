import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'

class HomeView extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles">
                :host {
                    --app-tertiary-color: #698996;
                }

                section.section {
                    padding: 0 36px;
                }

                h1 {
                    margin-top: 24px;
                }

                h1 + span {
                    font-size: 0.9rem;
                    display: inline-block;
                    font-style: italic;
                    max-width: 480px;
                }

                ol {
                    list-style: none;
                    padding: 0;
                    font-size: 0.9rem;
                }

                li > span {
                    font-weight: bold;
                }

                h2 {
                    margin-bottom: 12px;
                    font-size: 1.3rem;
                }

                p {
                    font-size: 0.9rem;
                    max-width: 480px;
                }

                p span {
                    display: block;
                    margin-top: 12px;
                    font-weight: bold;
                }

                .button + .button {
                    margin-left: 24px;
                }
            </style>

            <div class="home">
                <section class="section">
                    <header>
                        <h1>
                            Garage2020 Jeugdhulp Risico Indicatie Applicatie
                        </h1>
                        <span>
                            Dit is een applicatie gericht voor hulpverleners om een accurate risico indicatie te krijgen op een uithuisplaatsing.
                        </span>
                    </header>

                    <ol>
                        <li>
                            0 - 2%: <span>Laag risico</span>
                        </li>
                        <li>
                            2 - 5%: <span>Gemiddeld risico</span>
                        </li>
                        <li>
                            5% en hoger: <span>Hoog risico</span>
                        </li>
                    </ol>

                    <h2>
                        Uitleg van de werking
                    </h2>
                    <p>
                        Vul vragen in die u weet van de client.
                        Des te meer vragen u invult, hoe accurater het resultaat boven aan de pagina zal zijn.
                        Bovenaan de pagina vind u de navigatie, om tussen de verschillende type formulieren te rouleren.
                        <span>
                            N.b. ga altijd uit van uw eigen verstand en gebruik deze tool enkel als hulpmiddel.
                        </span>
                    </p>

                    <footer>
                        <button type="button" on-click="onReset" class="button button--tertiary">
                            Reset alle velden
                        </button>
                        <button type="button" class="button button--main">
                            Gegevens opslaan
                        </button>
                    </footer>
                </section>
            </div>
        `
    }

    onReset() {
        window.localStorage.clear()
        location.reload()
    }
}

window.customElements.define('ri-home', HomeView)
