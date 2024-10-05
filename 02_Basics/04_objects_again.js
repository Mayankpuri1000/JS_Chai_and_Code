const tinderUser = new Object();
// console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Mayank";
tinderUser.isLoggedIn = false;

const regularUser = { 
    email: "some@gmail.com", 
    userFullName: { 
        fullName: { 
            firstName: "Mayank",
            lastName: "Puri"
        }
    }
}

// console.log(regularUser.userFullName.fullName.firstName); // Accessing nested objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2) // ----> This is the way to concatenate or merge two objects 😄

const obj3 = {...obj1, ...obj2}; // Using spread Operator to merge two objects
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // Returns an array
// console.log(Object.values(tinderUser)); // Returns an array

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLogged"));




