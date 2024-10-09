// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     // console.log(num);
// }

// const greetings = "Namaste"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }


const map = new Map();
map.set("IN", "India")
map.set("US", "United States of America")
map.set("UK", "United Kingdom")
map.set("FR", "France")
map.set("RUS", "Russia")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key + ":-" + value);
    
// }

const myGames = { 
    "game1": "Need For Speed", 
    "game2": "GTA V", 
    "game3": "Call of Duty"
}

for(const [key,value] of myGames){ 
    console.log(key + ":-" + value);
} // Object is not iterable.
