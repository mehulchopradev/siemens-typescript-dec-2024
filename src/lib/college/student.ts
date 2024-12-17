import CollegeUser from './college_user';

export default class Student 
  extends CollegeUser {
  // static attributes
  static count: number = 0;

  constructor(
    name: string,
    gender: string,
    public roll: number
  ) {
    super(name, gender);
  }


  /* constructor(name?: string, gender?: string, roll?: number) {
    Student.count++;
    if (name) {
      this.name = name;
    }

    if (gender) {
      this.gender = gender;
    }

    if (roll) {
      this.roll = roll;
    }
  } */

    // method overriding
    getDetails(): string {
      return `${super.getDetails()}\nRoll: ${this.roll}`;
    }
}