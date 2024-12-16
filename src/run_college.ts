import Student from './lib/college/student';

// 0
console.log(Student.count);

const s1 = new Student('mehul', 'm', 10);
/* s1.name = 'mehul';
s1.gender = 'm';
s1.roll = 10; */

// console.log(s1);

// 1
console.log(Student.count);

const s2 = new Student();
// s2.name = 'jane'; // its private
s2.gender = 'f';
s2.roll = 12;

console.log(s1.getDetails());
console.log(s2.getDetails());
// console.log(s1.name); // its private

// console.log(s2);

// 2
console.log(Student.count);