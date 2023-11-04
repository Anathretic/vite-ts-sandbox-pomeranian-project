console.log('Hello!');

// implicite typing
const number = 65;
// explicite typing
// const text: string = 'abc';

const trueValue = true;
const nullValue = undefined;
const empty = null;

const add = (a: number, b: number) => a + b;
add(4, 5);

const sum = (a: number, b: number | null): number => {
  //   if (a > 10) return 'Too large!';
  if (b === null) return a * a;
  return a + b;
};

sum(3, 6);
sum(5, null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const greet = (name: any): string => {
  return `Hello ${name}`;
};

const sumOrGreet = (value: unknown): string => {
  if (typeof value === 'number') {
    return `Suma: ${value + value}`;
  } else {
    return `Greetings: ${value}`;
  }
};

console.log(
  number,
  trueValue,
  empty,
  nullValue,
  greet('John'),
  sumOrGreet(45),
  sumOrGreet('John')
);
