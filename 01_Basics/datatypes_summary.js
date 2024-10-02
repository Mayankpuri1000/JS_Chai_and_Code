/*
Primitive datatypes: 
There are 7 of them - String, Number, Boolean, Null, Undefined, Symbol, BigInt
*/ 

/* Reference type or non primitive type
Arrays, Objects, Functions
*/

// Javascript is a dynamically typed language.

const heroes = ["Shaktimaan", "Naagraj", "HeroKiShakti"];
let myObj = { 
    name: "Mayank", 
    age: 22
}
// console.log(typeof myObj);

const myFunction = function(){ 
    // console.log("Hello World");
    
}

// Further to be read on ECMA Script Docs

// Memory types - Stack Memory and Heap Memory

// Stack(primitive), Heap(Non-primitive)

let myName = "Mayank"
let anotherName = myName
anotherName = "Mayank Puri"

console.log(myName);
console.log(anotherName);
