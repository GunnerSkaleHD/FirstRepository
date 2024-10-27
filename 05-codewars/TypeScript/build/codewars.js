"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productFib = void 0;
const productFib = (prod) => {
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
    let n = 0;
    while (true) {
        if (Fibo(n) * Fibo(n + 1) === prod) {
            return [Fibo(n), Fibo(n + 1), true];
        }
        else if (Fibo(n) * Fibo(n + 1) > prod) {
            return [Fibo(n), Fibo(n + 1), false];
        }
        else {
            n++;
            continue;
        }
    }
};
exports.productFib = productFib;
console.log((0, exports.productFib)(714));
