export {};

// generic method
function chooseRandom<T>(elements: T[]): T {
  return elements[Math.floor(Math.random() * elements.length)];
}

const movies: string[] = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "The Lord of the Rings: The Return of the King",
  "Pulp Fiction",
  "Forrest Gump",
  "The Matrix",
  "The Silence of the Lambs",
  "The Lion King",
  "The Incredibles",
  "The Avengers",
  "The Social Network",
  "The Grand Budapest Hotel",
  "The Shape of Water",
  "The Irishman",
  "The Trial of the Chicago 7",
  "The Queen's Gambit",
  "The Crown",
  "The Mandalorian",
  "The Witcher",
  "The Falcon and the Winter Soldier",
];

console.log('***** Hey netflix, surpise me with a movie! *****');
const movie: string = chooseRandom(movies);
console.log(movie);

const students: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('***** Hey teacher, surpise me with a student! *****');
const roll: number = chooseRandom(students);
console.log(roll);