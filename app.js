'use strict'
const allEmployees=[];
let salary;

function randomSalary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function Employee (employeeID, fullName, department, level, image) {
  this.employeeID = employeeID;
  this.fullName = fullName;
  this.department= department;
  this.level= level;
  this.image= image;
  allEmployees.push(this)

}
Employee.prototype.salaryLevel = function(){
  if (this.level === "Senior"){
      salary= randomSalary(1500, 2000) - randomSalary(1500, 2000) * (7.5/100);
  } else  if (this.level=== "Mid-Senior"){
      salary= randomSalary(1000, 1500) - randomSalary(1500, 2000) * (7.5/100);
  } else{
      salary= randomSalary(500, 1000) - randomSalary(1500, 2000) * (7.5/100);
  }
  return salary;}



const GhaziSamer = new Employee("10000", "Ghazi Samer", "Administration", "Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Ghazi.jpg?raw=true");
const LanaAli = new Employee("10001", "Lana Ali", "Finance", "Senior", "https://i.postimg.cc/G2Zv7hgP/Lana.jpg");
const TamaraAyoub = new Employee("10002", "Tamara Ayoub", "Marketing", "Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Tamara.jpg?raw=true");
const SafiWalid = new Employee("10003", "Safi Walid", "Administration", "Mid-Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Safi.jpg?raw=true");
const OmarZaid = new Employee("10004", "Omar Zaid", "Development", "Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Omar.jpg?raw=true");
const RanaSaleh = new Employee("10005", "Rana Saleh", "Development", "Junior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Rana.jpg?raw=true");
const HadiAhmad	= new Employee("10006", "Hadi Ahmad", "Finance", "Mid-Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Hadi.jpg?raw=true");

let adminCards = document.getElementById("administration");
let financeCards= document.getElementById("finance");
let devCards= document.getElementById("development");
let marketCards= document.getElementById("marketing");

  Employee.prototype.cardMaker = function(){
    
    let card = document.createElement("div");
    card.innerHTML= `
    <div>
    <img src="${this.image}" alt="Profile Picture" id="main-image">
    <p>Name: ${this.fullName}- ID: ${this.employeeID} </p>
    <p>Department: ${this.department}- ID: ${this.level} </p>
    <p style="text-align: center;"> ${this.salaryLevel()} </p>
    </div>
    <hr>
    `

    if(this.department==="Administration"){
      adminCards.appendChild(card)
    } else if(this.department=="Finance"){
      financeCards.appendChild(card);
    } else if (this.department=="Development"){
      devCards.appendChild(card);
    } else{
      marketCards.appendChild(card);
    }
  }





  for (let i= 0; i < allEmployees.length; i++){
    allEmployees[i].cardMaker();

}

