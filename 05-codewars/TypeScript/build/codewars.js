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
    function onlyZero(nList) {
        nList.splice(0, 1);
        for (let i of nList) {
            if (i !== 0) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    function allEqual(nList) {
        return new Set(nList).size == 1;
    }
    function goingUP(nList) {
        let counter = 0;
        let j = 0;
        while (j < nList.length - 1) {
            if (nList[j] + 1 == nList[j + 1]) {
                j++;
                continue;
            }
            else {
                counter = counter + 1;
            }
            j++;
        }
        if (counter !== 0) {
            return false;
        }
        else {
            return true;
        }
    }
    if (goingUP(numList)) {
        return 2;
    }
    else if (allEqual(numList)) {
        return 2;
    }
    else if (onlyZero(numList)) {
        return 2;
    }
    else {
        return 0;
    }
}
console.log(isInteresting(1235, []));
