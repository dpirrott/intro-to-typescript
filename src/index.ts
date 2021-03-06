let id: number = 5;
let company: string = "Walmart";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "hello"];

// Tuple
let person: [number, string, boolean] = [1, "Dylan", true];
// Tuple array
let employee: [number, string][];

employee = [
  [1, "Dylan"],
  [3, "dfish"],
  [14, "duncan"],
];

// Union

let pid: string | number;

pid = "22";

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "john",
};

// Type Assertion
let cid: any = 1;

let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "john",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const dylan = new Person(1, "Dylan Pirrotta");
console.log(dylan);

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(2, "Dfish", "clerk");

console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);

let strArray = getArray<string>(["brad", "Reese", "Dylan"]);

strArray.push("yooo");
