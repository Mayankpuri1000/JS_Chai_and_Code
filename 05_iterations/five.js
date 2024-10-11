const coding = ["JS", "Ruby", "Pyhton", "Java", "CPP"]

// coding.forEach(function (item){ 
//     console.log(item);
// }) // -----------------------------------> Using simple function

// coding.forEach((item) => { 
//     console.log(item);
// }) // -----------------------------------> Using arrow function


// function printMe(item){ 
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item, index, arr) => { 
//     console.log(item, index, arr);
// })

const myCoding = [
    { 
        languageName: "Javascript", 
        languageFileName: "js"
    }, 

    { 
        languageName: "Java", 
        languageFileName: "java"
    },

    { 
        languageName: "Python", 
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )