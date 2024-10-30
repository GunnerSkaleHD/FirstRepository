"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Fibo(num) {
    let a = 1;
    let b = 0;
    let c = 0;
    for (let i = 0; i < num; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}
