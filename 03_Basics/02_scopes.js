// This is called global scope
let a = 300;

if (true) { // This is called block scope
  let a = 10;
  const b = 20;
  var c = 30; // var should not be used 👎👎👎👎 because it violates the scope rules.
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){ 
    const username = "Mayank"
    // console.log(username);
    
    function two(){ 
        const website = "youtube chai aur code"
        // console.log(username);
    }
    // console.log(website); // This throws an error
    // two();
}
// one();

if(true){ 
    const username = "Mayank"
    if(username === "Mayank"){ 
        const website = " Youtube chai aur code"
        // console.log(username + website);
    }
    // console.log(website); // This throws an error
}
// console.log(username); // This throws an error


// ************************************************* interesting *************************************************
// This is called Hoisting in Javascript -- How we create functions and how we return values.
console.log(addOne(3));
function addOne(num){
    return num + 1
}


const addTwo = function(num){ 
    return num + 2
}
console.log(addTwo(3));