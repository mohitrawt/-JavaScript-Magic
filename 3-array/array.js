//++++++++++++++++++++++ array 

const arr = ["html","css","js"];
// console.log(arr[2]);

const arr1 = new Array(9,0,4,5,3,2); // initialization
// console.log(arr1);
 arr1.push(2); //push method
 arr1.push(6);
 arr1.push(2);
 arr1.push(3);
 arr1.pop();   // pop method
//  console.log(arr1);
 
 arr1.unshift(0); // push value at start by shifting worst complexity
//  console.log(arr1);// pop value from start in array 

// +++++ arr.includes()++++++++++

let retrn = arr1.includes(1); // search 5 ,return true or false

// console.log(retrn);

// console.log(arr1.indexOf(3)); // find index ?

const newArr = arr1.join();
//++++++join bind the data and convert it to string ++++

// console.log(arr1);
// console.log(newArr);


// ********slice and splice ********

const anotherArr = arr1.slice(1,3);
console.log(anotherArr);

console.log(arr1);

const anotherArr2 = arr1.splice(1,3);
console.log(anotherArr2);

console.log(arr1);


