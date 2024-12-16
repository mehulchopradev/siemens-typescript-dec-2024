export type Stats = {
  length: number;
  breadth?: number;
}

export function areaRectangle(stats: Stats): number {
  return stats.length * (stats.breadth ?? 2);
}

export function perimeterRectangle(stats: Stats): number {
  return 2 * (stats.length + (stats.breadth ?? 2));
}

// there can be only one default export
export default function print(stats: Stats): void {
  console.log(`Area is ${areaRectangle(stats)}\nPerimeter is ${perimeterRectangle(stats)}`);
}