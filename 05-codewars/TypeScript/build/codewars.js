"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = solution;
function solution(roman) {
  const romanList = roman.split("");
  let numList = [];
  let result = 0;
  for (let i of romanList) {
    if (i === "M") {
      numList.push(1000);
    }
    if (i === "D") {
      numList.push(500);
    }
    if (i === "C") {
      numList.push(100);
    }
    if (i === "L") {
      numList.push(50);
    }
    if (i === "X") {
      numList.push(10);
    }
    if (i === "V") {
      numList.push(5);
    }
    if (i === "I") {
      numList.push(1);
    } else {
      continue;
    }
  }
  let position = 0;
  for (let j of numList) {
    if (numList[position] < numList[position + 1]) {
      result = result - numList[position];
      position++;
    } else {
      result = result + numList[position];
      position++;
    }
  }
  return result;
}
console.log(solution("CMIX"));
