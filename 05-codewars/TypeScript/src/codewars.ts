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
      if (i !== 0) {
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
    let j: number = 0;
    while (j < nList.length - 1) {
      if (nList[j] + 1 == nList[j + 1]) {
        j++;
        continue;
      } else {
        counter = counter + 1;
      }
      j++;
    }

    if (counter !== 0) {
      return false;
    } else {
      return true;
    }
  }

  if (goingUP(numList)) {
    return 2;
  } else if (allEqual(numList)) {
    return 2;
  } else if (onlyZero(numList)) {
    return 2;
  } else {
    return 0;
  }
}

console.log(isInteresting(1235, []));
