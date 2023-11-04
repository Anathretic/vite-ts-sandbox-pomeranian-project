const sumAll = (inputArray: number[]): number => {
  return inputArray.reduce((a, b) => a + b, 0);
};

console.log('Wynik funkcji sumAll:', sumAll([1, 2, 3, 4, 5]));
