export {};

function perimeterRectangle(length: number = 5, breadth: number = 2): number {
    return 2 * (length + breadth);
}

console.log(perimeterRectangle(6, 3));
// console.log(perimeterRectangle("5", "4"));

console.log(perimeterRectangle(7)); // breadth default value of 2


type Stats = {
    length: number;
    breadth?: number;
}
/* function areaRectangle({ length, breadth = 2 }: Stats): number {
    return length * breadth;
} */

function areaRectangle(stats: Stats): number {
  /* if (!stats.breadth) {
    stats.breadth = 2;
  } */

  return stats.length * (stats.breadth ?? 2);
}

console.log(areaRectangle({ length: 5, breadth: 4 }));
console.log(areaRectangle({ breadth: 3, length: 4 }));
console.log(areaRectangle({ length: 5 }));