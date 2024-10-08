// const userEmail = "m@mayank.ai"

// if (userEmail) { // userEmail is already defined which is a truthy value. Machine assumes it to be true.....
//     console.log("Got user email.");
    
// } else {
//     console.log("Don't have user email.");
    
// }

// Falsy values - false, 0, -0, BigInt 0n, "", null, undefined, NaN.
// Rest all are thruthy values - "0", 'false' (is a truthy value.)

// to check empty array
const emptyArray = []
if (emptyArray.length === 0) {
    console.log("Empty array");
    
}


// to check empty object.
const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("Empty Object");
    
}


// Nullish Coalescing Operator(??):     null      undefined
let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 10

// console.log(val1);


// Ternary Operator --->  Syntax - condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Price greater than 80") : console.log("less than 80");
;
