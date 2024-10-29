export function isInteresting(n: number, awesomePhrases: number[]): number {
  let numStr: string = n.toString();
  let strList: string[] = numStr.split("");
  let numList: number[] = [];
  for (let i of strList) {
    numList.push(Number(i));
  }
  console.log(numList);
  return 0;
}

isInteresting(1234, []);
