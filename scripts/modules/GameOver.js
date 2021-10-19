export function isGameOver (word, errors) {
    let victory = true
    if (errors === 8) {
        victory = false
        setTimeout(() => {
            for (let i = 0; i < word.length; i++) {
                if (document.getElementById(`char_${i}`).textContent !== word[i]) {
                    document.getElementById(`char_${i}`).textContent = word[i]
                    document.getElementById(`char_${i}`).className = 'notFound'
                }
            }
        }, 2000)
        setTimeout(() => gameOver(victory, word), 4000)
    } else {
        for (let i = 0; i < word.length; i++) {
            if (document.getElementById(`char_${i}`).textContent !== word[i]) { victory = false }
        }
        victory
        ? setTimeout(() => gameOver(victory, word), 2000)
        : setTimeout(() => document.querySelectorAll('#keyboard button:not(.isPressed)').forEach(item => item.removeAttribute('disabled')), 1000)
    }
}

function gameOver (victory, word) {

    document.getElementById('canvas').remove()
    document.getElementById('answer').remove()
    document.getElementById('keyboard').remove()

    let stats = JSON.parse(localStorage.getItem('stats'))

    if (!stats) {
        stats = {
            rounds_won : 0,
            rounds_lost : 0,
            rounds_total : 0
        }
    }

    victory ? stats.rounds_won++ : stats.rounds_lost++
    stats.rounds_total++
    localStorage.setItem('stats', JSON.stringify(stats))

    let message;
    victory ? message = 'You won!' : message = 'You lost...'

    document.getElementById('root').innerHTML += `
        <div id="game_over">
            <p>${message}</p>
            <p>The secret word was<br>${word}.</p>
            <a href="http://www.merriam-webster.com/dictionary/${word}" target="_blank">What does it mean?</a>
            <button id="play_again">Play again</button>
            <div id="stats">
                <p>Total victories</p>
                <p id="victories">${stats.rounds_won}</p>
                <p>Total losses</p>
                <p id="losses">${stats.rounds_lost}</p>
                <p>Total rounds</p>
                <p id="rounds">${stats.rounds_total}</p>
                <button id="stats_clear">Clear History</button>
            </div>
        </div>`

    document.getElementById('play_again').addEventListener('click', () => location.reload())
    document.getElementById('stats_clear').addEventListener('click', () => {
        stats = {
            rounds_won : 0,
            rounds_lost : 0,
            rounds_total : 0
        }

        localStorage.setItem('stats', JSON.stringify(stats))
        document.getElementById('victories').innerHTML = stats.rounds_won
        document.getElementById('losses').innerHTML = stats.rounds_lost
        document.getElementById('rounds').innerHTML = stats.rounds_total

        document.getElementById('stats_clear').setAttribute('disabled', '')
    })
}