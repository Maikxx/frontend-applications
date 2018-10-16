import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js'
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/app-route/app-location.js'
import '@polymer/app-route/app-route.js'
import '@polymer/iron-pages/iron-pages.js'
import './components/ri-icons.js'

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true)

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath)

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
                    padding-left: 12px;
                    background-color: var(--app-primary-color);
                }

                h1 {
                    font-size: 1.4rem;
                }

                h2 {
                    font-size: 1.2rem;
                }
            </style>

            <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
            </app-location>

            <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
            </app-route>


            <app-header>
                <app-toolbar>
                    <h1 main-title="Jeugdzorg Risico Indicatie Applicatie">
                        Jeugdzorg Risico Indicatie Applicatie
                    </h1>
                    <h2>%</h2>
                </app-toolbar>
            </app-header>

            <iron-pages selected="[[page]]" attr-for-selected="name" role="div">
                <ri-home name="home"></ri-home>
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

    _routePageChanged(page) {
        // Show the corresponding page according to the route.
        //
        // If no page was found in the route data, page will be an empty string.
        // Show 'home' in that case. And if the page doesn't exist, show 'not-found'.
        if (!page) {
            this.page = 'home'
        } else if (['home'].indexOf(page) !== -1) {
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
            case 'not-found':
                import('./views/ri-notFound.js')
                break
        }
    }
}

window.customElements.define('my-app', MyApp)
