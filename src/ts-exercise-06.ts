// typ/interfejs AnalyzeResult, który będzie zawierał:
// wartość wejściową jako string
// informację o ilości znaków w stringu jako number
// informację czy ilość znaków jest liczbą parzystą czy nie jako boolean

interface AnalyzeResult {
  value: string;
  valueLength: number;
  isValueOfLengthEven: boolean;
}

const analyzeString = (value?: string): AnalyzeResult | string => {
  if (!value) return 'Błąd';
  return {
    value: value,
    valueLength: value.length,
    isValueOfLengthEven: value.length % 2 === 0,
  };
};

console.log(analyzeString('Ada'));

const printAnalyzeResult = (input: AnalyzeResult | string): void => {
  if (typeof input === 'string') {
    console.log(input);
  } else {
    const { value, valueLength, isValueOfLengthEven } = input;
    console.log(
      `Wynik funkcji printAnalyzeResult: ${value} ${valueLength} ${isValueOfLengthEven}`
    );
  }
};

printAnalyzeResult(analyzeString('Adam'));
