const college = {
    clgname :  "Graphic",
    stud_name : "Mohit",
    fees : "50k",
    class_cordinator : "Sandeep sir"
}

// console.log(college.class_cordinator);
// console.log(college.stud_name);

// another to way to access 
const {class_cordinator : cc} = college;
console.log(cc); // setting classcrdinator with cc name we need just use cc word to access class_cordinator
const {stud_name,clgname,fees} = college;
console.log(stud_name,clgname,fees);


// **************JSON*************
// javascript  object Notation 

// {
//     "name" :"Mohit"
//     "id" : "mohit121"
// }