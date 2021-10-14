// function constructor 

function Person(a, b, c)
{ 
    this.name = a; 
    this.job = b; 
    this.yearOfBirth = c; 
} 

Person.prototype.calculateAge = function()
     {
        return 2021 - this.yearOfBirth;
     }

 function displayPerson(person)
 {
     return person.name + " works as a " + person.job + " and is " + person.calculateAge() + " years old.";
 }

 var person1 = new Person('Jenni', 'clerk', 1986); 
 var person2 = new Person('Madhu', 'Developer', 1997); 

 
 console.log(displayPerson(person1)); 
 console.log(displayPerson(person2));
 
 