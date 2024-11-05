export function beeramid(bonus: number, price: number): number {
  let listOfSquares: number[] = [];

  let beercans: number = bonus / price;
  console.log(beercans);

  let i: number = 0;
  let amountOfLevels: number = 0;

  while (beercans >= 0) {
    listOfSquares.push((i + 1) * (i + 1));
    console.log(listOfSquares);
    beercans = beercans - listOfSquares[i];
    i++;
    if (beercans < 0) {
      continue;
    }
    amountOfLevels++;
  }

  return amountOfLevels;
}

console.log(beeramid(10, 2));
