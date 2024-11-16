// deeclaring singleton object
// const instaUser = new Object()

const instaUser = {};
instaUser.name = "Mohit";
instaUser.id = "mohit121";
instaUser.isLoggedIn = false

// console.log(instaUser.id);

const regularUser = {
    email : "mohit121rawat.com",
    fullName : {
        userFullName :{
            firstName : "Mohit",
            lastName :  "Rawat"
        }
    }
}
 console.log(regularUser.fullName.userFullName.lastName);
//  *********?**********
// console.log(regularUser.fullName?userFullName.lastName);

const obj1 = {1:"A",2:"B"}
const obj2 = {3:"A",4:"B"}

// with assingn we use empty curly braces to create object(empty) ,combine obj1 and obj2
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);

const obj4 = {...obj1, ...obj2}
console.log(obj4);


const user = [
    {
        id : 1,
    },
    {

    }
]

console.log(instaUser);
console.log(Object.keys(instaUser)); //important
console.log(Object.values(instaUser)); //important
console.log(Object.entries(instaUser)); //important

console.log(instaUser.hasOwnProperty('name'));
