export function isInteresting(n: number, awesomePhrases: number[]) {
  let numStr: string = n.toString();
  let strList: string[] = numStr.split("");
  let numList: number[] = [];
  for (let i of strList) {
    numList.push(Number(i));
  }
  console.log(numList);

  function onlyZero(nList: number[]) {
    nList.splice(0, 1);
    for (let i of nList) {
      if (i != 0) {
        return false;
      } else {
        return true;
      }
    }
  }

  function allEqual(nList: number[]) {
    return new Set(nList).size == 1;
  }

  function goingUP(nList: number[]) {
    let counter: number = 0;
    for (let i = 0; i < nList.length; i++) {
      if (nList[i] + 1 === nList[i + 1]) {
        continue;
      } else {
        counter = counter + 1;
      }
    }
    if (counter != 0) {
      return true;
    } else {
      return false;
    }
  }
  if (onlyZero(numList)) {
    return 2;
  }
  if (allEqual(numList)) {
    return 2;
  }
  if (goingUP(numList)) {
    return 2;
  }
}

console.log(isInteresting(1235, []));
