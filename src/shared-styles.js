import '@polymer/polymer/polymer-element.js'

const $_documentContainer = document.createElement('template')
$_documentContainer.innerHTML = `
    <dom-module id="shared-styles">
        <template>
            <style>
                .section {
                    background-color: white;
                    padding: 0 24px;
                }

                .card {
                    margin: 24px;
                    padding: 12px;
                    color: var(--app-text-color);
                    border-radius: 4px;
                    background-color: #fff;
                    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
                }

                .circle {
                    display: inline-block;
                    width: 64px;
                    height: 64px;
                    text-align: center;
                    color: #555;
                    border-radius: 50%;
                    background: var(--app-tertiary-color);
                    font-size: 30px;
                    line-height: 64px;
                }

                h1 {
                    color: #212121;
                    font-size: 22px;
                    margin: 0;
                }

                .row {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }

                .row > * {
                    flex: 2;
                }

                .row > label {
                    flex: 1;
                }
            </style>
        </template>
    </dom-module>
`

document.head.appendChild($_documentContainer.content)
