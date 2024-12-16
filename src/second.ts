export {};
// objects

type Gender = 'm' | 'f';

type Student = {
  name: string,
  gender: Gender,
  roll?: number;
}

const s1: Student = {
  name: 'mehul',
  gender: 'm',
  roll: 12,
};

let s2: Student = {
  name: 'jane',
  gender: 'f',
};

/* s1 = {

} */
s1.name = 'mehul chopra';

console.log(`Name: ${s1.name}\nGender: ${s1.gender}\nRoll: ${s1.roll}`)
console.log(`Name: ${s2.name}\nGender: ${s2.gender}\nRoll: ${s2.roll ?? 'NA'}`);

// arrays
let marks = [12, 34, 56, 78, 90];
let cars: string[] = ['maruti', 'honda', 'bmw', 'audi'];

// marks[0] = 'mehul';
// cars[1] = 10;
marks.push(4, 5, 100);
console.log(marks);

// tuple
let s3: [string, string, number] = ['mehul', 'm', 10];
console.log(s3[0]);
console.log(s3[1]);
// s3[0] = 10;

// destructuring
// let c1 = cars[0];
// let c2 = cars[1];
let [c1, c2, ...rest] = cars;
console.log(c1, c2);
console.log(rest);

let { name, gender: gen, roll }  = s1;
console.log(name, gen, roll);