var i: number = 1;

while (i <= 10) {
  console.log(i);
  i++;
}
//tuple

var emp: [number, string, number] = [102, 'julie', 43];
console.log(emp);
emp.push(103, 'ram', 45);
console.log(emp);
console.log('after remove element ' + emp.pop());

var std: [number, string, number] = [1, 'ram', 21];
console.log(std);
std.push(2, 'rashi', 22);
console.log('after adding element   ' + std);
std.pop();
console.log(std);
