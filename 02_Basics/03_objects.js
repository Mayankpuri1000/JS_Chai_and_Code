// Singleton - When formed from constructor, it is singleton, otherwise not.
// Object.create
// Object Literals

const mySym = Symbol("key1")


const jsUser = { 
    name: "Mayank", 
    "full name": "Mayank Puri", 
    [mySym]: "myKey1", 
    age: 18, 
    location: "Jalandhar", 
    email: "mayank@google.com", 
    isLogedIn: false, 
    lastLoginDays: ["Mondays", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]); // Also a way of accessing attributes of an object
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// How to freeze an object value

jsUser.email = "mayank@chatgpt.com"
// Object.freeze(jsUser)

jsUser.email = "mayank@microsoft.com"
// console.log(jsUser);


// How to add a function in an object

jsUser.greeting = function(){ 
    console.log("Hello Js User");
}

jsUser.greetingTwo = function(){ 
    console.log(`Hello Js User ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());









