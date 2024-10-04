//array

const myArr = [0,1,2,3,4]
const myHeroes = ["Shaktimaan", "Naagraj", "MaaDurgaHero"]
// console.log(myHeroes[0]);

const newArray = new Array(1,2,3,4)

// Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop(); // No argument given just removes the last element

// myArr.unshift(9); // Adds an element to the start
// myArr.shift(); // Removes the first element

// console.log(myArr.includes(9));

// console.log(myArr);

// Slice and splice
console.log("A", myArr);

const myNewArray1 = myArr.slice(1,3);
console.log(myNewArray1);

console.log("B", myArr);

const myNewArray2 = myArr.splice(1,3);
console.log(myNewArray2);

console.log("C", myArr);







