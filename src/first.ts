export {};

let fullName = 'mehul chopra'; // implict data typing
// fullName = 10;

let gender: string = 'm'; // explicit data typing
const age: number = 38;
let isLightsOn: boolean | number = true;
isLightsOn = false;
isLightsOn = 0;
isLightsOn = 1;
isLightsOn = true;

// age = 56;

// custom type
type AccountType = 'savings' | 'current' | 0;

let accountType: AccountType = 'savings';
let accountType2: AccountType = 0;
const a = accountType + accountType2
console.log(a);

// Logical operators
// gender == 'm' && console.log('Hello sir');
// gender == 'f' && console.log('Hello mam');
gender == 'm' || console.log('Hello mam');
gender == 'f' || console.log('Hello sir');

let username: string | null | undefined = 'mehul25';
// let greeting = 'Welcome ' + (username ? username.toUpperCase() : "GUEST");
// console.log(greeting);
// let actor = username ? username : 'Guest';
let actor = username ?? 'Guest'; // null coalescing operator (null or undefined values only)
// console.log('Welcome ' + actor.toUpperCase());
console.log(`Welcome ${actor.toUpperCase()}`);

const n = 10;
const m = '10';
// console.log(n == m); // javascript true
// console.log(n === m); // javascript false