'use strict'
let salary;
let theNetSalary;

function randomSalary(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  function salaryLevel(){
    if(this.level=="Senior"){
      salary= randomSalary(1500, 2000)
    } else if (this.level=="Mid-Senior"){
      salary= randomSalary(1000, 1500)
    } else (this.level=="Mid-Senior")[
      salary= randomSalary(500, 1000)
    ]
    return salary;
  }

function Employee (employeeID, fullName, department, level, image) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department= department;
    this.level= level;
    this.image= image;
   
}

Employee.prototype.netSalary = function(){
  thenetSalary= salaryLevel()*(7.5/100)
  return theNetSalary;
  
}


const GhaziSamer = new Employee("10000", "Ghazi Samer", "Administration", "Senior");
const LanaAli = new Employee("10001", "Lana Ali", "Finance", "Senior");
const TamaraAyoub = new Employee("10002", "Tamara Ayoub", "Marketing", "Senior");
const SafiWalid = new Employee("10003", "Safi Walid", "Administration", "Mid-Senior");
const OmarZaid = new Employee("10004", "Omar Zaid", "Development", "Senior");
const RanaSaleh = new Employee("10005", "Rana Saleh", "Development", "Junior");
const HadiAhmad	= new Employee("10006", "Rana Saleh", "Finance", "Mid-Senior");


console.log(GhaziSamer.fullName);
console.log(GhaziSamer.theNetSalary);
