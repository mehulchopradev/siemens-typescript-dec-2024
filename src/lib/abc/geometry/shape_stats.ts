import Shape from './shape';

export function printStats(shape: Shape) {
  console.log('**************************');

  console.log('Area:', shape.area());
  console.log('Perimeter:', shape.perimeter());

  console.log('**************************');
}