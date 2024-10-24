export function xo(str: string): boolean {
  str = str.toLowerCase();
  const xoList: string[] = str.split("");
  let xCount: number = 0;
  let oCount: number = 0;
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
  } else {
    return false;
  }
}

console.log(xo("xxOo"));
