import { answer } from "./modules/Answer.js"

import { canvas } from "./modules/Canvas.js"

import { keyboard } from "./modules/Keyboard.js"

function setUp() {
    document.getElementById('root').innerHTML = `
        <h1>HANGMAN</h1>
        <canvas id="canvas" width="600px" height="600px"></canvas>
        <p id="answer"></p>
        <div id="keyboard"></div>
    `
    canvas(0)
    setTimeout(() => {
        answer()
        keyboard()
    }, 6000)
}

setUp()