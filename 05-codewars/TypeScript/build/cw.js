"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.josephus = void 0;
const josephus = (items, k) => {
    let resultList = [];
    let removeLocation = 0;
    let targetLength = items.length;
    while (targetLength !== resultList.length) {
        removeLocation = removeLocation + k;
        // console.log(removeLocation);
        // console.log(items.length);
        while (removeLocation > items.length) {
            removeLocation = removeLocation - items.length;
            // console.log(removeLocation);
            // console.log("verkleinert");
        }
        resultList.push(items[removeLocation - 1]);
        items.splice(removeLocation - 1, 1);
        // console.log(items);
        removeLocation = removeLocation - 1;
    }
    console.log(resultList);
    // for (let i = 0; i < items.length; i++) {
    // }
    return [];
};
exports.josephus = josephus;
(0, exports.josephus)([1, 2, 3, 4, 5, 6, 7], 3);
