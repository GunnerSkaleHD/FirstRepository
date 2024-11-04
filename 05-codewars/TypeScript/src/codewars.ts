export function isInteresting(n: number, awesomePhrases: number[]) {
  if (awesomePhrases.includes(n)) {
    return 2;
  }
  if (awesomePhrases.includes(n + 1)) {
    return 1;
  }
  if (awesomePhrases.includes(n + 2)) {
    return 1;
  }
  // if (n === 1221) {
  //   return 0;
  // }
  // if (n === 1235) {
  //   return 1;
  // }
  function listMaker(n: number) {
    let numStr: string = n.toString();
    let strList: string[] = numStr.split("");
    let numList: number[] = [];
    for (let i of strList) {
      numList.push(Number(i));
    }
    return numList;
  }

  function onlyZero(nList: number[]) {
    if (nList.length < 2) {
      return false;
    }
    nList.splice(0, 1);
    for (let i of nList) {
      if (i !== 0) {
        return false;
      } else {
        return true;
      }
    }
  }

  function allEqual(nList: number[]): boolean {
    if (nList.length < 2) {
      return false;
    }
    return new Set(nList).size == 1;
  }

  function goingUp(nList: number[]): boolean {
    if (nList.length < 2) {
      return false;
    }
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

  function goingDown(nList: number[]): boolean {
    if (nList.length < 2) {
      return false;
    }
    let counter: number = 0;
    let j: number = 0;
    while (j < nList.length - 1) {
      if (nList[j] == nList[j + 1] + 1) {
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

  function isPalindrome(nList: number[]): boolean {
    const len = nList.length;
    if (len < 2) {
      return false;
    }
    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (nList[i] !== nList[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  if (goingUp(listMaker(n))) {
    return 2;
  } else if (onlyZero(listMaker(n))) {
    return 2;
  } else if (isPalindrome(listMaker(n))) {
    return 2;
  } else if (goingDown(listMaker(n))) {
    return 2;
  } else if (allEqual(listMaker(n))) {
    return 2;
  } else if (goingUp(listMaker(n + 1))) {
    return 1;
  } else if (onlyZero(listMaker(n + 1))) {
    return 1;
  } else if (isPalindrome(listMaker(n + 1))) {
    return 1;
  } else if (goingDown(listMaker(n + 1))) {
    return 1;
  } else if (allEqual(listMaker(n + 1))) {
    return 1;
  } else if (goingUp(listMaker(n + 2))) {
    return 1;
  } else if (onlyZero(listMaker(n + 2))) {
    return 1;
  } else if (isPalindrome(listMaker(n + 2))) {
    return 1;
  } else if (goingDown(listMaker(n + 2))) {
    return 1;
  } else if (allEqual(listMaker(n + 2))) {
    return 1;
  } else {
    return 0;
  }
}

//console.log(isInteresting(54344, [5434]));
