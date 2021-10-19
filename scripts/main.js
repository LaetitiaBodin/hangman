import { answer } from "./modules/Answer.js"

import { keyboard } from "./modules/Keyboard.js"

function setUp() {
    document.getElementById('root').innerHTML = `
        <h1>HANGMAN</h1>
        <canvas id="canvas" width="600px" height="600px"></canvas>
        <p id="answer"></p>
        <div id="keyboard"></div>
    `
    setTimeout(() => {
        answer()
        keyboard()
    }, 6000)
}

setUp()