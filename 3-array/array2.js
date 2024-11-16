// push and concat working to bind the array but concat use different array to copy elements

let arr = ["ironman","batman"];
let arr1 = ["spiderman","hulkman"];

// console.log(arr.push(arr1)); // using push ()
// console.log(arr);

// console.log(arr.concat(arr1)); // using pop ()

// $$$$$$$$$$ glass spread technique $$$$$$$$$$
// below process are the spread technoque three_dot(...)
const all_new_hero = [...arr , ...arr1]; 
console.log(all_new_hero);

// amoung The push , concat , spread 
// spread is mostly used today world

const arr_ = [1,2,4,[4,5],[6,7,8]];
const arr__ = arr_.flat(Infinity);
console.log(arr__);


console.log(Array.isArray("Mohit"));
console.log(Array.from("Mohit"));
// console.log(Array.from({name:"Mohit"}));

