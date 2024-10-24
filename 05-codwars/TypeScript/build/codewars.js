"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOdd = findOdd;
function findOdd(xs) {
    const counts = {};
    for (const num of xs) {
        if (counts[num]) {
            counts[num] += 1;
        }
        else {
            counts[num] = 1;
        }
    }
    for (const [key, value] of Object.entries(counts)) {
        if (!Number.isInteger(value / 2)) {
            return Number(key);
        }
    }
}
console.log(findOdd([6, 7, 6]));
