import
  printRect,
  { areaRectangle as area, perimeterRectangle, type Stats }
  from './lib/maths';

function areaRectangle(stats: Stats): number {
  return 100;
}

const length: number = 6;
const breadth: number = 3;

printRect({ length, breadth });
console.log(area({ length, breadth }));


/* const area = areaRectangle({ length, breadth });

const s: Stats = { length, breadth };
const peri = perimeterRectangle(s);

console.log(`Area of rectangle: ${area}`);
console.log(`Perimeter of rectangle: ${peri}`); */

