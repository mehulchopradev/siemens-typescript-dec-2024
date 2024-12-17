// Manager

import { printStats } from './lib/abc/geometry/shape_stats';
import Rectangle from './lib/geometry/rectangle';
import Square from './lib/geometry/square';

const r1 = new Rectangle(5, 2);
printStats(r1);

const s1 = new Square(5);
printStats(s1);