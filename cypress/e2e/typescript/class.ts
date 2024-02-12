class demo {
  eid: number;
  ename: string;
  deptno: number;
  display(): void {
    console.log(this.eid);
    console.log(this.ename);
    console.log(this.deptno);
  }
}
var obj = new demo(); //objcreation
obj.eid = 101;
obj.ename = 'ram';
obj.deptno = 4827;
obj.display();
