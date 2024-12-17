import MyArray from './my_array';

export {};

const marks: number[] = [1, 2, 3, 4, 5];
const m1 = new MyArray<number>(marks);

const n: number = m1.getElement(1);
console.log(n);
m1.setElement(3, 5);
m1.printAll();

const cars: string[] = ['Toyota', 'BMW', 'Honda'];
const m2 = new MyArray<string>(cars);
const m: string = m2.getElement(2);
m2.setElement(1, 'Ford');
m2.printAll();
