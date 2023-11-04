const countCharacters = (value: string): number => {
  return value.length;
};

console.log(countCharacters('Johnny'));

const isEven = (value: number): boolean => {
  return value % 2 === 0;
};

console.log(isEven(2));

// funkcję getParityMessage która na podstawie boolean zwraca komunikat ta liczba jest parzysta/ta liczba nie jest parzysta

const getParityMessage = (value: boolean): string => {
  if (value) {
    return 'Liczba jest parzysta';
  } else {
    return 'Liczba jest nieparzysta';
  }
};

console.log(getParityMessage(true));

// funkcję processString która na podstawie stringa, wypisuje go, wypisuje liczbę jego znaków
// oraz informację czy liczba znaków jest/nie jest parzysta. Funkcja ta powinna wywoływać 3
// powyższe funkcje (zwraca string)

const processString = (value?: string): string => {
  if (!value) return 'Błąd';
  return `${value} ${countCharacters(value)} ${isEven(value.length)}`;
};

console.log(processString('Adam'));
