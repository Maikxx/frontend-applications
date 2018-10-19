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
                    max-width: 720px;
                }

                select,
                input {
                    border: 1px solid #AAA;
                    border-radius: 4px;
                    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
                    color: #555;
                    font-size: inherit;
                    margin: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    max-width: 360px;
                }

                input {
                    box-sizing: border-box;
                    padding: 6px 10px;
                }

                select option[disabled] {
                    color: grey;
                }

                .row > * {
                    flex: 2;
                }

                .row > label {
                    flex: 1;
                }

                .button {
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
                    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
                    font-size: 0.9rem;
                    font-weight: 500;
                    line-height: 36px;
                    overflow: hidden;
                    outline: none;
                    cursor: pointer;
                    transition: box-shadow 0.2s;
                }

                .button--main {
                    background-color: var(--app-primary-color);
                }

                .button--tertiary {
                    background-color: var(--app-tertiary-color);
                }

                .button:hover,
                .button:focus {
                    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
                }

                .button:active {
                    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
                }
            </style>
        </template>
    </dom-module>
`

document.head.appendChild($_documentContainer.content)
