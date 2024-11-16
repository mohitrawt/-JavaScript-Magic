// singleton object 
// Object.create

//objects literals

const sym = Symbol("mykey1"); 

const obj = {
    name : "Mohit Rawat",
    isloggedin : "true",
    lastlogin : ["Monday , Tuesday"],
    purchase : "No",
    [sym] :"mykey1",
};

// console.log(obj["name"]);
// console.log(obj["name","purchase"]);

obj.name = "Rohit ";
// console.log(obj["name"]);

// freezing is the way to freeze the object components (after freeze operatuion it  can not change 
    // Object.freeze(obj);
//    obj.name = "Mohit "; // name s not change due to freezee
// console.log(obj["name"]);

// ********function********
obj.greeting = function(){
    console.log(`Hello js user, ${obj.name}`);
}

console.log(obj.greeting());