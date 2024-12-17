import Shape from '../abc/geometry/shape';

// Developer Y
export default class Square extends Shape {
  area(): number {
    return this.side * this.side;
  }
  perimeter(): number {
    return 4 * this.side;
  }
  constructor(private side: number) {
    super();
  }
}