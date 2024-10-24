"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOdd = findOdd;
function findOdd(xs) {
    const counts = {};
    for (const num of xs) {
        // Umformung der ternären Bedingung in eine if-Anweisung
        if (counts[num]) {
            counts[num] += 1;
        }
        else {
            counts[num] = 1;
        }
    }
    console.log(counts);
}
findOdd([2, 3, 3, 2, 4, 4, 5, 5, 5, 6, 6, 1, 1]);
