"use strict";

// const reverseStr=str=>{

//     return str.split("").reverse().join("");
// }

// console.log(reverseStr("Result"));


// let stu={

//     name:"Anar",
//     surname:"Huseynov",
//     age:36
// }

    // let count=0;
// for (const key in stu) {
//     console.log(key +"/"+stu[key]);
    // count++;
// }
//  console.log(count);

// let address="Sumqayit"
// console.log(stu.address)

// let stu1={
//      id:1,
//     name:"Anar",
//     surname:"Huseynov",
//     age:36
// }
// let stu2={
//      id:2,
//     name:"Tunar",
//     surname:"Huseynli",
//     age:15
// }
// let stu3={
//      id:3,
//     name:"Elnar",
//     surname:"Huseynli",
//     age:16
// }
// let stu4={
//      id:4,
//     name:"Atilla",
//     surname:"Rehimov",
//     age:20
// }
// let stu5={
//      id:5,
//     name:"Tomris",
//     surname:"Rehimli",
//     age:18
// }


// let group={

//     name:"P414",
//     capacity:5,
//     students:[],
//     addStudent:function(student){

//         if(this.students.length==this.capacity){
//             console.log("Group already filled")
//             return;
//         }

//         let stu=this.students.find(s=>s.id==student.id)
//         if(stu!=undefined){
//             console.log("This student already exist")
//             return;
//         }

//        this.students.push(student);
//     },


//     updateStudent:function(student){

//         let existStudent=this.students.find(s=>s.id==student.id)

//         if(student.name!=undefined){
//             existStudent.name=student.name;
//         }
//         if(student.surname!=undefined){
//             existStudent.surname=student.surname;
//         }
//         if(student.age!=undefined){
//             existStudent.age=student.age;
//         }

//     },

//     getAllStudents:function(){
//         for (const item in this.students) {
//             console.log(`${item.name} ${item.surname} ${item.age}`)
//         }
//     },

//     deleteStudent:function(id){
//     //    this.students= this.students.filter(s=>s.id!=id)
//        let existStudent=this.students.findindex(s=>s.id==id)
//         this.students.splice(existStudent,1);
//     }

// }
// // group.addStudent(stu5);
// // group.addStudent(stu4);
// console.log(group.students);
// group.getAllStudents();

// let updateStu={
//     id:5,
//    name:"Tuncay",
//    surname:"Quliyev",
//    age:15
// }
// group.updateStudent(updateStu);
// console.log(group.getAllStudents());

// group.deleteStudent(5)
// group.getAllStudents();

// class Car{
//     constructor(name,color){
//         this.name=name;
//         this.color=color;
        
//     }
//     speedtest(data) {
//         console.log(200+data)
//     }
//  }
// let car1=new Car("BMW",200);
// console.log(car1.name+" "+ car1.color+" "+car1.speed)
// let car2=new Car("opel")
// car2.speed(200)

// class BMW extends Car{
//     constructor(marka,color){
//         super(name,color);
//         this.marka=marka;
//     }
// }
// let bmw=new BMW("X5","red");
// console.log(bmw.marka+ " "+ bmw.color)

// bmw.speedtest(200)

// class test{
//     static eating(){
//         console.log("eat")
//     }

// }
// test.eating()

// let numbers=[1,2,3,4,5];
// let names=["Tunar","Elnar"];



// Array.prototype.sumOfNumbers=function(){
//     let sum =0;
//     for (let i = 0; i < this.length; i++) {
//        sum+=this[i];
        
//     }
//     return sum;
// }
// console.log(numbers.sumOfNumbers());

Array.prototype.getBiggestNumber=function(){
    console.log(Math.max(...this));
}
let numbers=[12,3,3,4,5]
numbers.getBiggestNumber();

String.prototype.lengthOfString=function(){
    console.log(this.length);
}

let text="Salam";

text.lengthOfString()

Number.prototype.PowOfNumber=function(num){
    console.log(Math.pow(this,num));
}

let num=5;
num.PowOfNumber(2)