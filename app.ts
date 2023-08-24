// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add4: AddFn;

add4 = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Parent {
  readonly name: string;
  outputName?:string;
}

interface Greetable extends Parent {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}
let user1: Greetable;
user1 = new Person("Faruk");
user1.greet("Hi There - I am ");
//user1.name=3;
console.log(user1);
