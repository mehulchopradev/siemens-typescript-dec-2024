export default class MyArray<T> {
  constructor(private array: T[]) {}

  getElement(index: number): T {
    return this.array[index - 1];
  }

  setElement(index: number, value: T): void {
    this.array[index - 1] = value;
  }

  printAll(): void {
    console.log(this.array);
  }
}