// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);


const chai = { 
    name: "Ginger tea", 
    price: 250, 
    isAvailable: true,

    orderChai: function(){ 
        console.log('chai nhi bani');
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// Object.defineProperty(chai, 'name', { 
//         writable: false,
//         enumerable: false,
//         configurable: false 
// })

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){ 
        console.log(`${key} : ${value}`);
    }
}