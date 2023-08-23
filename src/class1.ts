class Deparment {
    //private dId:string;
    //private dname: string;
    private employees: string[] = [];
    constructor(private readonly dId: string, private dname: string) {
      //this.dname = n;
    }
  
    describe(this: Deparment) {
      console.log("Department : " + this.dname + ' DeparmentId : ' + this.dId);
      console.log(`Department (${this.dId}): ${this.dname}`);
    }
  
    addEmployee(employee: string) {
      this.employees.push(employee);
    }
  
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  const accounting = new Deparment("14", "Accounting");
  accounting.describe();
  //console.log(accounting.dname);
  //accounting.dname='sssss';
  accounting.addEmployee("faruk");
  //console.log(accounting.dname);
  
  accounting.printEmployeeInformation();
  //accounting.employees[2] = "Ebru";
  ///const accountCopy = { dname: "Dummy", describe: accounting.describe };
  //accountCopy.describe();
  