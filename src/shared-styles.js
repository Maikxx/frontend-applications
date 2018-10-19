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

                .field {
                    display: flex;
                    flex-direction: column;
                }

                select,
                input {
                    border: 1px solid #AAA;
                    border-radius: 4px;
                    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
                    color: #555;
                    font-size: inherit;
                    margin: 6px 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    padding: 6px 10px;
                    max-width: 300px;
                }

                input {
                    box-sizing: border-box;
                }

                select option[disabled] {
                    color: grey;
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

                legend {
                    padding-top: 24px;
                    font-size: 16px;
                    font-weight: bold;
                }

                label {
                    font-weight: bold;
                    font-size: 14px;
                }

                fieldset {
                    border: 0;
                    padding: 24px 12px;
                }

                .field + .field {
                    margin-top: 24px;
                }

                @media screen and (min-width: 720px) {
                    .field {
                        flex-direction: row;
                        align-items: center;
                        max-width: 720px;
                    }

                    select,
                    input {
                        margin: 12px;
                        max-width: 360px;
                    }

                    .field > * {
                        flex: 2;
                    }

                    .field > label {
                        flex: 1;
                    }

                    .field + .field {
                        margin-top: 12px;
                    }
                }
            </style>
        </template>
    </dom-module>
`

document.head.appendChild($_documentContainer.content)
