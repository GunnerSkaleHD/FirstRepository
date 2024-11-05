export function beeramid(bonus, price) {
    let listOfSquares = [];
    let beercans = bonus / price;
    console.log(beercans);
    let i = 0;
    let amountOfLevels = 0;
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
