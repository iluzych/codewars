/*
ą : a,
ć : c,
ę : e,
ł : l,
ń : n,
ó : o,
ś : s,
ź : z,
ż : z
*/

function correctPolishLetters(string) {
    const polish = 'ąćęłńóśźż';
    const latin = 'acelnoszz';
    let convertedString = '';

    for (let i = 0; i < string.length; i++) {
        const raide = string[i];
        let convertedLetter = raide;                // ł

        for (let p = 0; p < polish.length; p++) {
            const polishLetter = polish[p];

            if (polishLetter === convertedLetter) {
                convertedLetter = latin[p];         // l
            }
        }

        convertedString += convertedLetter;         // l
    }

    return convertedString;
}

console.log(correctPolishLetters("Jędrzej Błądziński"), '->', "Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"), '->', "Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"), '->', "Maria Sklodowska-Curie");