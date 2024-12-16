const marks: number[] = [5, 10, 6, 7, 10, 0, 1, 3, 4];

// create a new array consisting of marks more than 5 from the marks array
/* const l1: number[] = [];
for(let i = 0; i < marks.length; i++) {
  if (marks[i] > 5) {
    l1.push(marks[i]);
  }
} */
/* const l1 = marks.filter(function(mark: number) {
  return mark > 5;
}); */

// arrow functions
const l1 = marks.filter((mark: number) => mark > 5);
console.log(l1);

// create a new array consisting of marks which is 10 or 0
const l2 = marks.filter((mark: number) => mark === 10 || mark === 0);
console.log(l2);

// create a new array with marks deducted by 1 from the marks array
// mapping
const l3 = marks.map((mark: number) => mark - 1);
console.log(l3);

// create a new array with marks squared of only the odd marks from the marks array
const l4 = marks.filter((mark: number) => mark % 2 !== 0)
  .map((mark: number) => mark * mark);
console.log(l4);

const cmarks = [...marks];
// sort the marks array
cmarks.sort((a: number, b: number) => b - a);

console.log(cmarks);
console.log(marks);

const students = [
  { name: 'mehul', marks: 10, address: { city: 'mumbai' } },
  { name: 'jane', marks: 5, address: { city: 'mumbai' } },
  { name: 'jill', marks: 7, address: { city: 'pune' } },
  { name: 'jack', marks: 8, address: { city: 'bangalore' } },
  { name: 'john', marks: 3, address: { city: 'chennai' } },
];

const cstudents = [...students]

console.log(students[0].address.city); // mumbai
console.log(cstudents[0].address.city); // mumbai

students[0].address.city = 'las vegas';
console.log(cstudents[0].address.city);

students[0].name = 'musk';
console.log(cstudents[0].name);

// deep copy
const dstudents = JSON.parse(JSON.stringify(students));