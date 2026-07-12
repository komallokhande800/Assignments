class Employee
{
empId:number;
constructor(Id:number)
{
    this.empId=Id;
}
firstMethod(empName:string)
{
    console.log("employee name is "+empName);
    console.log("employee id is "+this.empId);

}
seconsMethod(empProject:string)
{
    console.log("employee id is" +this.empId);
    console.log("employee project is "+empProject);
}
}
let emp=new Employee(101);
emp.firstMethod("John");
emp.seconsMethod("TypeScript");
