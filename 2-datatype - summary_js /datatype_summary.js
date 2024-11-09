// primitive 

// 7 
// number : BigInt : String :Boolean: null : undefined : symbol 

const score = 200;
const score2 = 300;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const id2 = Symbol("123");

// console.log(id == id2);

const Big_No = 9037822791790107910n;
// console.log(Big_No);

// reference (Non primitive)

// Array , objects , function

const heroes = ["spiderman","flash","Ironman"];
console.log(heroes);

// object
 let obj ={
    name:"mohit",
    age:22,
    course:"MCA",
}
//function 
const myfun = function(){
    console.log("function store in var");
    
}

// NOTE : null - type : - object 


//+++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory is used in primitive data type

let mycharname = "Mannu";

let anothercharname = mycharname; //reference
anothercharname = "Ravan";

// console.log(mycharname);
// console.log(anothercharname);


// Heap memory is used in non-primitve

let user_Mannu = {
    name : "mohit",
    isLoggedIn : true,
}

let user_Ravan = user_Mannu;

user_Ravan.name = "Mannu";

console.log(user_Mannu.name);

