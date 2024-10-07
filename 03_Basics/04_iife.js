// Immediately Invoked Function Expressions (IIFE)

(function chai() { 
    // Named IIFE
    console.log(`DB CONNECTED`);
    
})(); // --> This is how we write IIFE, We write iife to avoid pollution in global scope enviornment

( (name) => { 
    // Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`)
} )("MAYANK");
