export const productFib = (prod: number): [number, number, boolean] => {
  function Fibo(num: number) {
    let a: number = 1;
    let b: number = 0;
    let c: number = 0;
    for (let i = 0; i < num; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return c;
  }
  let n: number = 0;
  while (true) {
    if (Fibo(n) * Fibo(n + 1) === prod) {
      return [Fibo(n), Fibo(n + 1), true];
    } else if (Fibo(n) * Fibo(n + 1) > prod) {
      return [Fibo(n), Fibo(n + 1), false];
    } else {
      n++;
      continue;
    }
  }
};
