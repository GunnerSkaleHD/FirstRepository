"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateEncode = duplicateEncode;
function duplicateEncode(word) {
    word = word.toLowerCase();
    const wordList = word.split("");
    let finalWord = [];
    for (let targetChar of wordList) {
        let count = 0;
        let i = 0;
        while (i < word.length) {
            if (word[i] === targetChar) {
                count++;
            }
            i++;
        }
        if (count > 1) {
            finalWord.push(")");
        }
        else if (count === 1) {
            finalWord.push("(");
            count = 0;
        }
    }
    return finalWord.join("");
}
console.log(duplicateEncode("RedBull"));
