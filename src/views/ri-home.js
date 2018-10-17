import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'

class HomeView extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles">
                section.section {
                    padding: 0 36px;
                }

                h1 {
                    margin-top: 24px;
                }

                h1 + span {
                    font-size: 14px;
                    display: inline-block;
                    font-style: italic;
                    max-width: 480px;
                }

                ol {
                    list-style: none;
                    padding: 0;
                }

                h2 {
                    margin-bottom: 12px;
                }

                p {
                    font-size: 14px;
                    max-width: 480px;
                }

                p span {
                    display: block;
                    margin-top: 12px;
                    font-weight: bold;
                }
            </style>

            <div class="home">
                <section class="section">
                    <header>
                        <h1>
                            Jeugdhulp Risico Indicatie Applicatie
                        </h1>
                        <span>
                            Dit is een applicatie gericht voor hulpverleners om een accurate risico indicatie te krijgen op een uithuisplaatsing.
                        </span>
                    </header>

                    <ol>
                        <li>
                            0 - 2%: Laag risico
                        </li>
                        <li>
                            2 - 5%: Gemiddeld risico
                        </li>
                        <li>
                            5% en hoger: Hoog risico
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
                </section>
            </div>
        `
    }
}

window.customElements.define('ri-home', HomeView)
