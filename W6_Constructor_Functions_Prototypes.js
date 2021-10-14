var employees = [];

function Employee(name, title, salary)
{
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = "Full Time";
}

Employee.prototype.printEmployeeForm = function()
{
    console.log("Name: " + this.name + ", Job Title: " + this.title + ", Salary: " + this.salary + ", Status: " + this.status);
}

var employee1 = new Employee("Mark", "Fireman", "$40,000");
var employee2 = new Employee("John", "Car Salesman", "$100,000");
var employee3 = new Employee("Tim", "Astronaut", "$250,000");
employee1.status = "Part Time"

employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee3.printEmployeeForm();