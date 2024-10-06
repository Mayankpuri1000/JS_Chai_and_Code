// Syntax of Function
function sayMyName() { 
    console.log('M');
    console.log('A');
    console.log('Y');
    console.log('A');
    console.log('N');
    console.log('K'); 
}
// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2
}
const result = addTwoNumbers(3,5);
// console.log("Result:", result);

function loginUserMessage(userName){ 
    if(!userName){ 
        console.log("Please enter a valid username");
        return
    }
    return `${userName} just logged in`
}
// console.log(loginUserMessage());

function calculateCartPrice(...num1){  // Rest Operator
    return num1
}
console.log(calculateCartPrice(200, 400, 500));

const user = { 
    name: "Mayank",
    price: 1000
}

function handleObject(anyObject){ 
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({ 
    name: "Sam", 
    price: 400
})

const myNewArray = [2,4,1,6]

function getSecondValue(getArray){ 
    return getArray[1]
}
console.log(getSecondValue(myNewArray));



