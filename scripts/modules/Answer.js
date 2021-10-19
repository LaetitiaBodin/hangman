let words;

try {
    words = await(await(fetch('./data/words.json'))).json()
} catch  {
    // If the json data is unavailable, a fallback list is provided
    words = ['BOSS', 'ANGEL', 'POCKET', 'EQUINOX', 'HENCHMAN']
}

export const word = words[Math.floor(Math.random() * words.length)]

export function answer () {
    for (let i = 0; i < word.length; i++) {
        document.getElementById('answer').innerHTML += `<span id="char_${i}">&nbsp;</span>`
    }
}