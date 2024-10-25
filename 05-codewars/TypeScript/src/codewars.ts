export function solution(roman: string): number {
  const romanList: string[] = roman.split("");
  let numList: number[] = [];
  let result: number = 0;
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
  let position: number = 0;
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

console.log(solution("DCCCCXI"));
