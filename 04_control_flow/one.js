// if statement
/*
const temp = 78
if (temp === 41) {
    console.log("Temperature is less than 50");
    
} else {
    console.log("Temperature is greater than 50");
    
}
console.log("Executed");
*/



/*
const score = 200

if(score > 100){ 
    const power = "Fly"
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`);
*/


// const balance = 1000
// if(balance > 500) console.log("Test"); // Implicit scope


/* IF_ELSE
const balance = 1000
if(balance < 500){ 
    console.log("Less than 500");
    
}
else if(balance < 750){ 
    console.log("less than 750");
}

else if(balance < 900){ 
    console.log("less than 900");
}
else{ 
    console.log("less than 1200");
}
*/

const userLoggedIn = true
const userLoggedInFromEmail = true
const userLoggedInFromGoogle = false
const debitCard = true

if(userLoggedIn && debitCard){ 
    console.log("Allow him/her to buy the thing");
    
}

if(userLoggedInFromEmail || userLoggedInFromGoogle){ 
    console.log("Allow him/her to buy the thing");
    
}