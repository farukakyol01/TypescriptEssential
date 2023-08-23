var Deparment = /** @class */ (function () {
    function Deparment(dId, dname) {
        this.dId = dId;
        this.dname = dname;
        //private dId:string;
        //private dname: string;
        this.employees = [];
        //this.dname = n;
    }
    Deparment.prototype.describe = function () {
        console.log("Department : " + this.dname + ' DeparmentId : ' + this.dId);
        console.log("Department (".concat(this.dId, "): ").concat(this.dname));
    };
    Deparment.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Deparment.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Deparment;
}());
var accounting = new Deparment("14", "Accounting");
accounting.describe();
//console.log(accounting.dname);
//accounting.dname='sssss';
accounting.addEmployee("faruk");
//console.log(accounting.dname);
accounting.printEmployeeInformation();
//accounting.employees[2] = "Ebru";
///const accountCopy = { dname: "Dummy", describe: accounting.describe };
//accountCopy.describe();
