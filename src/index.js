import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js'
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/app-route/app-location.js'
import '@polymer/app-route/app-route.js'
import '@polymer/iron-pages/iron-pages.js'
import '@polymer/iron-selector/iron-selector.js'
import { startup } from './utils/startup.js'
import { generatePercentage } from './utils/generatePercentage.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true)

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath)

window.addEventListener('load', startup)

class MyApp extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    --app-primary-color: #407076;
                    --app-secondary-color: #97B1A6;
                    --app-tertiary-color: #698996;
                    --app-text-color: black;

                    display: block;
                }

                app-header {
                    color: #fff;
                    padding: 0 12px;
                    background-color: var(--app-primary-color);
                    overflow-x: scroll;
                }

                app-header span {
                    font-weight: 700;
                }

                .toolbar {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 24px;
                }

                .drawer-list {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    width: 100%;
                    padding-left: 24px;
                }

                .drawer-list a {
                    font-size: 14px;
                    padding-left: 12px;
                    color: white;
                    text-decoration: none;
                }

                .drawer-list a.iron-selected,
                .drawer-list a:hover {
                    text-decoration: underline;
                }
            </style>

            <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
            </app-location>

            <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
            </app-route>

            <app-header>
                <app-toolbar class="toolbar">
                    <span class="percentage">
                        [[calculateNewPercentage()]]%
                    </span>
                    <nav>
                        <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
                            <a name="home" href="[[rootPath]]home">
                                Uitleg
                            </a>
                            <a name="general" href="[[rootPath]]general">
                                Algemeen
                            </a>
                            <a name="education" href="[[rootPath]]education">
                                Werk & Opleiding
                            </a>
                            <a name="housing" href="[[rootPath]]housing">
                                Huisvesting
                            </a>
                            <a name="relational" href="[[rootPath]]relational">
                                Huiselijke relaties
                            </a>
                            <a name="mental" href="[[rootPath]]mental">
                                Geestelijke gezondheid
                            </a>
                            <a name="society" href="[[rootPath]]society">
                                Maatschappelijke participatie
                            </a>
                            <a name="justice" href="[[rootPath]]justice">
                                Justitie
                            </a>
                        </iron-selector>
                    </nav>
                </app-toolbar>
            </app-header>

            <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
                <ri-home name="home"></ri-home>
                <ri-general name="general"></ri-general>
                <ri-education name="education"></ri-education>
                <ri-housing name="housing"></ri-housing>
                <ri-relational name="relational"></ri-relational>
                <ri-mental name="mental"></ri-mental>
                <ri-society name="society"></ri-society>
                <ri-justice name="justice"></ri-justice>
                <ri-not-found name="not-found"></ri-not-found>
            </iron-pages>
        `
    }

    static get properties() {
        return {
            page: {
                type: String,
                reflectToAttribute: true,
                observer: '_pageChanged'
            },
            routeData: Object,
            subroute: Object
        }
    }

    static get observers() {
        return [
            '_routePageChanged(routeData.page)'
        ]
    }

    calculateNewPercentage () {
        try {
            return generatePercentage(JSON.parse(window.localStorage.getItem('factorData')))
        } catch (error) {
            throw new Error(error)
        }
    }

    ready() {
        super.ready()
        document.addEventListener('regenerateFactorData', () => {
            const element = this.shadowRoot.querySelector('.percentage')
            element.textContent = `${generatePercentage(JSON.parse(window.localStorage.getItem('factorData')))}%`
        })
    }

    _routePageChanged(page) {
        // Show the corresponding page according to the route.
        //
        // If no page was found in the route data, page will be an empty string.
        // Show 'home' in that case. And if the page doesn't exist, show 'not-found'.
        if (!page) {
            this.page = 'home'
        } else if (['home', 'general', 'education', 'housing', 'relational', 'mental', 'society', 'justice'].indexOf(page) !== -1) {
            this.page = page
        } else {
            this.page = 'not-found'
        }
    }

    _pageChanged(page) {
        // Import the page component on demand.
        //
        // Note: `polymer build` doesn't like string concatenation in the import
        // statement, so break it up.
        switch (page) {
            case 'home':
                import('./views/ri-home.js')
                break
            case 'general':
                import('./views/ri-general.js')
                break
            case 'education':
                import('./views/ri-education.js')
                break
            case 'housing':
                import('./views/ri-housing.js')
                break
            case 'relational':
                import('./views/ri-relational.js')
                break
            case 'mental':
                import('./views/ri-mental.js')
                break
            case 'society':
                import('./views/ri-society.js')
                break
            case 'justice':
                import('./views/ri-justice.js')
                break
            case 'not-found':
                import('./views/ri-notFound.js')
                break
        }
    }
}

window.customElements.define('my-app', MyApp)
