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
    let text = expr.split('**********');
    let result = '';
    for (let word of text) {
        let strMorse = '';
        while (word.length >= 10) {
            let letter = word.substring(0, 10);
            word = word.substring(10);
            let morseLet = '';
            let letLen = letter.length;
            while (letter.length >= 2) {
                let mLet = letter.substring(0, 2);
                letter = letter.substring(2);
                switch (mLet) {
                    case '10':
                        morseLet = morseLet + '.';
                        break;
                    case '11':
                        morseLet = morseLet + '-';
                        break;
                    default:
                        break;
                }
                
            }
            strMorse = strMorse + MORSE_TABLE[morseLet];
        }
        result = result + ' ' + strMorse;
    }
    return result.trim();
}

module.exports = {
    decode
}