// Types

// boolean
let isCool: boolean;
isCool = false;
isCool = true;
console.log(isCool);

// number
let age: number;
age = 26.5;
age = 26;
console.log(age);

// string
let eyeColor: string;
eyeColor = "brown";
eyeColor = "green";
console.log(eyeColor);

const favoriteQuote = `I'm not old, I'm only ${age}`;
console.log(favoriteQuote);

// Array
let pets: string[];
pets = ["cat", "mouse", "dragon"];
pets = ["cat", "mouse"];
console.log(pets);

let pets2: Array<string>;
pets2 = ["pig", "lion", "dragon"];
pets2 = ["pig", "lion"];
console.log(pets2);

// Tuple
let basket: [string, number];
basket = ["football", 10];
basket = ["basketball", 10];
console.log(basket);

// enum
// Up is initialized with 1. All of the following members are auto-incremented from that point on.
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// Up would have the value 0, Down would have 1, etc.
enum Direction2 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction3 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

enum UserResponse {
  No = 0,
  Yes = 1,
}

console.log(Direction.Up);
console.log(Direction2.Up);
console.log(Direction3.Up);
console.log(UserResponse.Yes);

let directionName: string;
directionName = Direction[1];
directionName = Direction[2];
console.log(directionName); // Displays 'Down' as its value is 2 above

// any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let whatever: any;
whatever = 26;
whatever = "aaaaghhhhhh noooooo!";
console.log(whatever);

// void
const sing = (): void => console.log("Lalalala");
sing();

// null and undefined
let meh: undefined;
meh = undefined;
meh = undefined;
console.log(meh);

let noo: null;
noo = null;
noo = null;
console.log(noo);

// never
const error = (): never => {
  throw Error("blah!");
};
error();

// Object
// object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.

// In TypeScript, there are several places where type inference
// is used to provide type information when there is no explicit
// type annotation. For example, in this code
// automatimally detexts x is a number.
// const x = 3;

// Union Type
let confused: string | number = "hello";
confused = 55;
console.log(confused);

// Type alias
type Uid = number | string;
let logId: Uid;
logId = "54423542";
logId = 573455645;
console.log(logId);

type Platform = "Windows" | "MacOS" | "IOS" | "Android";
let platform: Platform;
platform = "IOS";
platform = "MacOS";
console.log(platform);

// Intersections
type AcountInfo = {
  id: number;
  name: string;
  email?: string; // optional
};

type CharInfo = {
  nickname: string;
  level: number;
};

// intersection
type PlayerInfo = AcountInfo & CharInfo;

const account: AcountInfo = {
  id: 123,
  name: "John Doe",
};

const char: CharInfo = {
  nickname: "jd",
  level: 100,
};

const playerInfo: PlayerInfo = {
  ...account,
  ...char,
};

console.log(account);
console.log(char);
console.log(playerInfo);

// Type Assertions
// It has no runtime impact and is used purely by the compiler.

// as-syntax
let strLength: number;
strLength = 0;
strLength = (whatever as string).length;
console.log(strLength);

// angle-bracket syntax
const someValue = "this is a string";
const someValueLength = (<string>someValue).length;
console.log(someValueLength);

// Interface
interface RobotArmy {
  count: number;
  readonly type: string;
  magic?: string; // optional
  getId?: () => string;
}

interface RobotNavy extends RobotArmy {
  owner: string;
}

// : void is redundant in this case
const fightRobotArmy = (robot: RobotArmy): void => {
  console.log("FIGHT!", robot);
};

const fightRobotArmy2 = (robot: {
  count: number;
  type: string;
  magic?: string;
}) => {
  console.log("FIGHT!", robot);
};

const fightRobotNavy = (robot: RobotNavy) => {
  console.log("FIGHT!", robot);
};

const myFightRobotArmy: RobotArmy = { count: 1, type: "A" };
const myFightRobotNavy: RobotNavy = { count: 2, type: "B", owner: "John Doe" };
class myFightRobot implements RobotArmy {
  private id: string;
  public count: number;
  readonly type: string;

  constructor(id: string, count: number, type: string) {
    this.id = id;
    this.count = count;
    this.type = type;
  }
}
const customFightRobot = new myFightRobot("456436", 0, "C");
fightRobotArmy(myFightRobotArmy);
fightRobotArmy2(myFightRobotArmy);
fightRobotArmy(myFightRobotNavy);
fightRobotArmy2(myFightRobotNavy);
fightRobotNavy(myFightRobotNavy);
fightRobotArmy(customFightRobot);
fightRobotArmy2({ count: 3, type: "B" });

// Merging interfaces

interface Box {
  height: number;
  width: number;
}
interface Box {
  scale: number;
}

const box: Box = { height: 5, width: 6, scale: 10 };
console.log(box);

// Classes
class Animal {
  private id: string | number;
  public name: string;
  readonly type: string;
  protected sing: string;

  constructor(id: string | number, name: string, type: string, sound: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.sing = sound;
  }

  public greet(): string {
    return "Hello, " + this.sing;
  }

  public get getId() {
    return this.id;
  }

  public get getSing() {
    return this.sing;
  }

  public set setSing(sound: string) {
    this.sing = sound;
  }
}

const dog = new Animal(999, "Toby", "A", "Au");
console.log(dog.getId);
console.log(dog.getSing);
console.log(dog.greet());
dog.setSing = "Auuuuuu";
console.log(dog.greet());

// You can also extend a class or define a class as an abstract class
// class myclass extends anotherclass
// abstract class myclass

class UserAccount {
  public name: string; // public is default
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

const john = new UserAccount("John", 30);
// john.age = 33; // Property 'age' is protected and only accessible within class 'UserAccount' and its subclasses.
john.logDetails();

class CharAccount extends UserAccount {
  private nickname: string;
  readonly level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    console.log("get level");
    return this.level;
  }

  set setNickname(nickname: string) {
    console.log("set nickname");
    this.nickname = nickname;
  }
}

const johnDoe = new CharAccount("John Doe", 30, "j2021", 80);
// johnDoe.nickname = "new2021"; // Property 'nickname' is private and only accessible within class 'charAccount'.
// console.log(johnDoe.nickname); // Property 'nickname' is private and only accessible within class 'charAccount'.
// johnDoe.level = 100; // Cannot assign to 'level' because it is a read-only property.
console.log(johnDoe.level);
console.log(johnDoe.getLevel);
johnDoe.setNickname = "john2021";
johnDoe.logDetails();

// interfaces

interface Game {
  title: string;
  description?: string;
  readonly genre: string;
  platform?: string[];
  getSimilars?: (title: string) => void;
}

const tlou: Game = {
  title: "The Last of Us",
  genre: "Action",
  platform: ["PS3", "PS4"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro.`);
  },
};

// tlou.genre = "FPS"; // Cannot assign to 'genre' because it is a read-only property.
// tlou.getSimilars(tlou.title); // Cannot invoke an object which is possibly 'undefined'.
if (tlou.getSimilars) {
  tlou.getSimilars(tlou.title);
}

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftBehind: DLC = {
  title: "The Last of Us - Left Behind",
  genre: "Action",
  platform: ["PS4"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro.`);
  },
  originalGame: tlou,
  newContent: ["new characters"],
};

console.log(leftBehind);

class CreateGame implements Game {
  title: string;
  description?: string;
  readonly genre: string;
  getSimilars?: (title: string) => void;

  constructor(title: string, genre: string) {
    this.title = title;
    this.genre = genre;
  }
}

const tlou2 = new CreateGame("The Last of Us 2", "action");
console.log(tlou2);

// Difference between interfaces and type alias

// Type Alias has intersection (X & Y)
// Interface has extends (interface X extends Y, X {})

// Both have implements
// class X implements typeY {}
// class X implements interfaceY {}

// Only with type alias is possible to declare primitive types
// type IDT = string | number;
// interface ID extends number {} -> Error

// Only type alias can use Tuples
// type TupleT = [number, number];
// [1, 2, 3] as TupleT;

// Type Alias allows only 1 declaration per scope
// type JQueryT = { a: string };
// type JQueryT = { b: string }; // Duplicate identifier 'JQueryT'.
// Interface allows more than 1 declaration (and merge all declarations) - monkey patch
// interface JQuery {
//   a: string;
// }
// interface JQuery {
//   b: string;
// }
// const $: JQuery = {
//   a: "Foo",
//   b: "Bar",
// };
// Using Interface is very useful for creating extensible packages for example

// Interfaces -> Objects/Classes (OOP)
// Type Alias -> All other scenarios, Props in React for example

// Generics

function useState() {
  let state: number;
  function getState() {
    return state;
  }
  function setState(newState: number) {
    state = newState;
  }
  return { getState, setState };
}
const newState = useState();
newState.setState(123);
console.log(newState.getState());
// const newState2 = useState();
// newState2.setState('Foo'); // Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(newState2.getState());

// In order to make possible use a diffent type for each useState creation we should use Generics

// Using union (like let state: number | string) would allow assign a different type after the first assignment
// for example:
// newState.setState(123);
// newState.setState("Foo");

// Using Generics we can ensure that the value of the property state will have only one type,
// but it is still flexible to define what the type would be

// S can is a "unknown" type by default
// With "unknown" anything is assignable,
// but unknown isn't assignable to anything but itself and any without a type assertion or a control flow based narrowing.
// Likewise, no operations are permitted on an unknown without first asserting or narrowing to a more specific type.

// some common names for this type
// S => for State type
// T => for just type
// K => for Key type
// V => for Value type
// E => for Element type
function useStateWithGenerics<S>() {
  let state: S;
  function getState() {
    return state;
  }
  function setState(newState: S) {
    state = newState;
  }
  return { getState, setState };
}
const newStateWithGenerics = useStateWithGenerics<string>();
newStateWithGenerics.setState("Foo");
console.log(newStateWithGenerics.getState());
const newStateWithGenerics2 = useStateWithGenerics<number>();
newStateWithGenerics2.setState(123);
console.log(newStateWithGenerics2.getState());

// We can also restrict the possible types using Generics
// Using = string we defined that the string type is the default
function useStateWithGenerics3<S extends number | string = string>() {
  let state: S;
  function getState() {
    return state;
  }
  function setState(newState: S) {
    state = newState;
  }
  return { getState, setState };
}
const newStateWithGenerics3 = useStateWithGenerics3();
newStateWithGenerics3.setState("Foo");
console.log(newStateWithGenerics3.getState());
// const newStateWithGenerics4 = useStateWithGenerics3<boolean>(); // Type 'boolean' does not satisfy the constraint 'string | number'.
// newStateWithGenerics4.setState(true);
// console.log(newStateWithGenerics4.getState());
const newStateWithGenerics5 = useStateWithGenerics3<number>();
newStateWithGenerics5.setState(123);
console.log(newStateWithGenerics5.getState());
// const newStateWithGenerics6 = useStateWithGenerics3();
// newStateWithGenerics6.setState(true); // Argument of type 'boolean' is not assignable to parameter of type 'string'.
// console.log(newStateWithGenerics6.getState());

// Utility Types

// TypeScript provides several utility types to facilitate common type transformations. These utilities are available globally.
// Ex: Partial<Type>, Readonly<Type>, Pick<Type, Keys>, Omit<Type, Keys>, etc

// Ex: Partial<Type> = Constructs a type with all properties of Type set to optional.
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

console.log(todo1);
console.log(todo2);

// Decorators
// Decorators are an experimental feature

// A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter.
// Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime
// with information about the decorated declaration.
// Multiple decorators can be applied to a declaration.

// Decorators provide a way to add annotations and a meta-programming syntax for class declarations and members.

// Class Decorator example

function setAPIVersion(apiVersion: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion;
    };
  };
}

@setAPIVersion("1.0.0")
class API {}

console.log(API);
