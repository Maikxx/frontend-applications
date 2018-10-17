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

                button {
                    display: inline-block;
                    box-sizing: border-box;
                    border: none;
                    border-radius: 4px;
                    padding: 0 12px;
                    min-width: 64px;
                    height: 36px;
                    vertical-align: middle;
                    text-align: center;
                    text-overflow: ellipsis;
                    color: #fff;
                    background-color: var(--app-tertiary-color);
                    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 36px;
                    overflow: hidden;
                    outline: none;
                    cursor: pointer;
                    transition: box-shadow 0.2s;
                }

                button:hover,
                button:focus {
                    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
                }

                button:active {
                    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
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

                    <footer>
                        <button type="button" on-click="onReset">
                            Reset alle velden
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
