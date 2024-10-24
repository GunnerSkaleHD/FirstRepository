export function parse(data: string): number[] {
  const input: string[] = data.split("");
  let result: number[] = [];
  let num: number = 0;
  for (let i of input) {
    if (i === "i") {
      num++;
    } else if (i === "d") {
      num = num - 1;
    } else if (i === "s") {
      num = num * num;
    } else if (i === "o") {
      result.push(num);
    } else {
      continue;
    }
  }
  return result;
}
