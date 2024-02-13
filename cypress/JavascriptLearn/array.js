var marks = [12, 45, 67, 87, 98];
console.log(marks);
marks[3] = 100;
console.log(marks);
console.log(marks.length); //size of array
//for adding new element in array -push
document.write(marks);
//for deleting elements used Pop
marks.pop();
//for adding element in zero index then used marks.unshift
marks.unshift(1);
console.log(marks);
//check index of any value then used indexOf method
console.log(marks.indexOf(45));
//check element present in array or not
console.log(marks.includes(98));
let total = marks.reduceRight((sum, mark) => sum + mark, 0);
console.log(total);
