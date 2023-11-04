// obiekt
type Animal = {
  name: string;
  age?: number;
};

// typ funkcji
type PrintAnimal = (animal: Animal) => void;

const printAnimal: PrintAnimal = (animal) => {
  console.log(animal.name, animal.age);
  //   return 3
};

printAnimal({ name: 'Bear' });
printAnimal({ name: 'Dog', age: 3 });

type Car = {
  name: string;
  printName: () => void;
};

// const car: Car = {
//   name: 'Mini',
//   printName: () => {
//     console.log(car.name);
//   },
// };

// car.printName()

class CarClass implements Car {
  public name = 'BMW';
  public printName = () => console.log(this.name);
}

const carInstance = new CarClass();
carInstance.printName();
