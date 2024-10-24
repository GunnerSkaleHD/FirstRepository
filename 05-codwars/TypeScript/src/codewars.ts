export function findOdd(xs: number[]): void {
  const counts: { [key: number]: number } = {};

  for (const num of xs) {
    if (counts[num]) {
      counts[num] += 1;
    } else {
      counts[num] = 1;
    }
  }

  console.log(counts);
}

findOdd([2, 3, 3, 2, 4, 4, 5, 5, 5, 6, 6, 1, 1]);
