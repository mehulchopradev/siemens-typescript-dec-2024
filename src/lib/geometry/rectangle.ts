import Shape from '../abc/geometry/shape';

// Developer X
export default class Rectangle extends Shape {
  constructor(private length: number, private breadth: number) {
    super();
  }

  area(): number {
    return this.length * this.breadth;
  }

  perimeter(): number {
    return 2 * (this.length + this.breadth);
  }
}