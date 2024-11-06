"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dirReduc = dirReduc;
function dirReduc(arr) {
    const northSouth = ["NORTH", "SOUTH"];
    const eastWest = ["EAST", "WEST"];
    let passedThroughArray = arr;
    let i = 0;
    for (let i of passedThroughArray) {
        if (i === "SOUTH") {
        }
    }
    // while (
    //   (northSouth.includes(arr[i]) && northSouth.includes(arr[i + 1])) ||
    //   (eastWest.includes(arr[i]) && eastWest.includes(arr[i + 1]))
    // ) {
    //   if (
    //     (northSouth.includes(arr[i]) && northSouth.includes(arr[i + 1])) ||
    //     (eastWest.includes(arr[i]) && eastWest.includes(arr[i + 1]))
    //   ) {
    //     passedThroughArray.splice(i + 1, 1);
    //     passedThroughArray.splice(i, 1);
    //     i = 0;
    //     continue;
    //   }
    //   i++;
    //   if (i >= arr.length) {
    //     i = 0;
    //   }
    // }
    // console.log(arr);
    return passedThroughArray;
}
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
