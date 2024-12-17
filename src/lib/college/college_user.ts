export default class CollegeUser {
  constructor(
    protected name: string,
    protected gender: string
  ) {}

  getDetails(): string {
    return `Name: ${this.name}\nGender: ${this.gender}`;
  }
}