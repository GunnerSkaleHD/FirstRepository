"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xo = xo;
function xo(str) {
    const xoList = str.split("");
    console.log(xoList);
    let xCount = 0;
    let oCount = 0;
    for (let i of xoList) {
        if (i === "x") {
            xCount++;
        }
        if (i === "o") {
            oCount++;
        }
    }
    if (xCount === oCount) {
        return true;
    }
    else {
        return false;
    }
}
console.log(xo("xxOo"));
