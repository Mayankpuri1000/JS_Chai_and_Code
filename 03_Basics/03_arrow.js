const user = { 
    userName: "Mayank", 
    price: 999, 

    welcomeMessage: function(){ 
        console.log(`${this.userName}, Welcome to the website.`);
        // console.log(this);
        
    }
}

// user.welcomeMessage();
// user.userName = "Sam"
// user.welcomeMessage();
// console.log(this);

// function chai(){ 
//     console.log(this);
    
// }
// chai();

// const chai = () => {  // Syntax of Arrow functions
//     let username = "Mayank"
//     console.log(this.username);
    
// }

// chai()

// ************************************************************************************************************************
/* Explicit Return
const addTwo = (num1, num2) => { 
    return num1 + num2
}
console.log(addTwo(3,4));
*/

// Implicit Return
const addTwo = (num1, num2) =>  ( num1 + num2 ) // Used a lot in React.js.

console.log(addTwo(3,4));

