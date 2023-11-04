type SomeType = {
  prop1: number;
};

let someTypeObject: SomeType = {
  prop1: 1234,
};

const objectOfIncorrectType: unknown = {
  prop4: 'Tadeusz',
};

someTypeObject = objectOfIncorrectType as SomeType;
console.log('someTypeObject', someTypeObject);

// Type guards
function isSomeType(input: unknown): input is SomeType {
  return (
    !!input &&
    typeof input === 'object' &&
    'prop1' in input &&
    typeof input.prop1 === 'number'
  );
}
console.log(
  'Use of type guards in TS; is someTypeObject type of someType?',
  isSomeType(someTypeObject)
);
