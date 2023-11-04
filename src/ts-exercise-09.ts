// Typy generyczne

// Tworzenie tablicy

const array: number[] = [];

const array2 = Array<number>();
const printArray = (inputArr: Array<number>) => {
  console.log('Print arr using generic types: ', inputArr);
};

printArray([1, 2, 3, 4]);

console.log('Arrays: ', array, array2);
