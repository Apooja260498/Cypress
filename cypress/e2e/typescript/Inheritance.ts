class person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
class employee extends person {
  empno: number;

  constructor(empno: number, name: string) {
    super(name);
    this.empno = empno;
  }
  display(): void {
    console.log(this.empno);
    console.log(this.name);
  }
}
var obj1 = new employee(101, 'john');
obj1.display();
