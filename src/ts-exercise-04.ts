function x(value: number | undefined) {
  if (value) {
    console.log(value * 2);
  }
}

x(44);

// paramtery opcjonalne zawsze na końcu
function y(value?: number) {
  if (value) {
    // narrowing -> teraz value jest number, a nie jest undefined
    console.log(value * 2);
  }
}

y(11);

const z = (value: 'Adam' | 'Karol') => {
  console.log(value);
};

z('Adam');
