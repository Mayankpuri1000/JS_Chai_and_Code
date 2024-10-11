const myNums = [1,2,3]

// const myTotal = myNums.reduce( function(accumulator, curVal) { 
//     console.log(`Value of accumulator: ${accumulator} and Value of CurVal is ${curVal}`);
//     return accumulator + curVal
// }, 0)

const myTotal = myNums.reduce( (accumulator, curVal) => { 
    return accumulator + curVal
}, 0)

// console.log(myTotal);


const shoppingCart = [
    { 
        itemName: "js course", 
        itemPrice: 100
    },
    { 
        itemName: "java course", 
        itemPrice: 500
    },
    { 
        itemName: "python course", 
        itemPrice: 1000
    },
    { 
        itemName: "ruby course", 
        itemPrice: 10000
    },
]


const bill = shoppingCart.reduce( (accumulator, item) => accumulator + item.itemPrice, 0)
console.log(bill);
