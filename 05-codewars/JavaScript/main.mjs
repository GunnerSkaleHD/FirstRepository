function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function getPrimes(numstart, numend) {
  let start = 0;
  let end = 0;

  if (numstart > numend) {
    start = numend;
    end = numstart;
  } else {
    start = numstart;
    end = numend;
  }

  let testList = [];
  let result = [];
  while (start <= end) {
    testList.push(start);
    start++;
  }
  for (let i of testList) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result;
}

console.log(getPrimes(10, 0));
