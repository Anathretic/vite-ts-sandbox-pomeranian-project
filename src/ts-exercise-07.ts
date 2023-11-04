// Tablice

const arr = [1, 3, 4];
// let arr2: (number | string)[];
// arr2 = ['3'];

console.log(arr);

type Building = {
  floors: number;
  bedrooms: number;
  address: string;
};

const buildings: Building[] = [];
buildings.push({ address: 'Warsaw', floors: 4, bedrooms: 3 });
buildings.push({ address: 'Praga', floors: 2, bedrooms: 5 });

const bedrooms = buildings.map((value) => value.bedrooms);

console.log(`Bedrooms - ${bedrooms}`);

type Tuple = [number, string];

const tuple: Tuple = [3, 'Adam'];
console.log(`Tuple - ${tuple}`);
