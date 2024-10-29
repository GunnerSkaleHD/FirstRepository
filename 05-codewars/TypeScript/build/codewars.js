"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistence = persistence;
function persistence(num) {
    let strnum = num.toString();
    let array = Array.from(num.toString()).map(Number);
    function step(list) {
        let result = 0;
        for (let i = 1; i < array.length; i++) {
            let numberr = array[i - 1] * array[i];
            result = result + numberr;
            array = Array.from(result.toString()).map(Number);
        }
    }
    let counter = 0;
    while (array.length > 1) {
        step(array);
        counter++;
    }
    return counter;
}
console.log(persistence(123345));
