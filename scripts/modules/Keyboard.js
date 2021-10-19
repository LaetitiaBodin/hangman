import { word } from './Answer.js'
import { canvas } from './Canvas.js'
import { isGameOver } from './GameOver.js'

let errors = 0

export function keyboard () {    
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0; i < alpha.length; i++) { document.getElementById('keyboard').innerHTML += `<button disabled>${alpha[i]}</button>` }

    setTimeout(() => document.querySelectorAll('#keyboard button').forEach(item => item.removeAttribute('disabled')), 1000)

    document.querySelectorAll('#keyboard button')
        .forEach(item => item.addEventListener('click', () => {
            item.className = 'isPressed'

            if (word.includes(item.textContent)) {
                for (let i = 0; i < word.length; i++) {
                    if (word[i] === item.textContent) { document.getElementById(`char_${i}`).innerHTML = item.textContent }
                }
            } else {
                errors++
                canvas(errors)
            }

            document.querySelectorAll('#keyboard button').forEach(item => item.setAttribute('disabled', ''))

            isGameOver(word, errors) // imported from GameOver
        }))

}