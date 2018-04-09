export class Hero {
  constructor(id: number, name: string) {}
}

// Using the pattern from https://www.stevefenton.co.uk/2013/04/stop-manually-assigning-typescript-constructor-parameters/
// Didn't use 'private' for the variables since I'm assigning the const HEROES to be of type Hero
// which means being able to know that id and name are public properties

// For simple models I prefer doing the following (i.e. models which don't require a constructor)
// but used the above just to show a different example.

// export class Hero {
//   id: number;
//   name: string;
// }
