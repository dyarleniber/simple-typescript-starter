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
