export default class Student {
  // instance attributes (default public)
  private name: string = 'NA';
  gender: string = 'm';
  roll: number = 0;

  // static attributes
  static count: number = 0;


  constructor(name?: string, gender?: string, roll?: number) {
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
  }

  // instance methods
  getDetails(): string {
    return `Name: ${this.name}\nGender: ${this.gender}\nRoll: ${this.roll}`;
  }
}