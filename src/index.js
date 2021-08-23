const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    {

        let messageArr = [];
        let letterArr = [];
        let morseArr = [];
        let newMessage = '';
    
        for (let i = 0; i < expr.length; i += 10) {
            messageArr.push(expr.slice(i, i + 10));
        }
    
        messageArr.forEach(letter => {
            if (letter.indexOf(1) != -1) {
                letterArr.push(letter.slice(letter.indexOf(1)));
            } else letterArr.push(' ');
        })
    
        letterArr.forEach(letter => {
            let singleLetter = '';
            if (letter.length == 1) return morseArr.push(' ');
            for (let i = 0; i < letter.length; i += 2) {
                if (letter[i + 1] == 0) {
                    singleLetter += '.'
                } else if (letter[i + 1] == 1) {
                    singleLetter += '-'
                }
    
            }
            morseArr.push(singleLetter);
        })
    
        morseArr.forEach(letter => {
            if (letter === " ") newMessage += ' ';
            for (const [key, value] of Object.entries(MORSE_TABLE)) {
                if (letter == key) { newMessage += value }
            }
        })
        return newMessage;
    }
}

module.exports = {
    decode
}