//named function

function display() {
  console.log('welcome to testscript');
}
display();

//named function includes parameter types and return type

function Sum(x: number, y: number): number {
  return x + y;
}

console.log(Sum(100, 200));

//anonymas function without parameter

var greetings = function () {
  console.log('welcome');
};
greetings();

//anaonymus using parameters
var sum = function (x: number, y: number): number {
  return x + y;
};
console.log(sum(10, 20));

//function parameters:

function greet(greetings: string, name: string) {
  return greetings;
}
console.log(greet('welcome', 'john'));

//optional parametrs:

function option(greet: string, name?: string) {
  return option;
}
console.log(option('welcome', 'smith'));
console.log(option('welcome'));
console.log('welcome', 'smith', 'faster');

//default parameters:

function newopt(greet: string, name: string = 'hello'): string {
  return greet + ' ' + name;
}
console.log(newopt('welcome', 'smith'));
console.log(newopt('welcome'));
console.log(newopt('welcome', 'smith'));

//fat arrow function;

var sum = (x: number, y: number): number => {
  return x + y;
};

console.log(sum(20, 30));

//parameterless arrow function
// I approach
var Print = () => {
  console.log('welcome to typescript');
};
Print();

//II approach

var Print = () => console.log('welcome');
Print();

//function overloading

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}
console.log(add(100, 200));
console.log(add('welcome', 'john'));

//rest parameters

function greetee(greetingmsg: string, ...name: string[]) {
  return greetingmsg + ' ' + name;
}
console.log(greetee('hello', 'john'));
console.log(greetee('hello'));
console.log(greetee('hello', 'john', 'smith'));
