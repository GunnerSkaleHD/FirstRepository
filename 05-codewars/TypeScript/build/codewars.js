"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInteresting = isInteresting;
function isInteresting(n, awesomePhrases) {
    let numStr = n.toString();
    let strList = numStr.split("");
    let numList = [];
    for (let i of strList) {
        numList.push(Number(i));
    }
    console.log(numList);
    return 0;
}
isInteresting(1234, []);
