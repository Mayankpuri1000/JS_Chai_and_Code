// for loop
/*
for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element); 
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop value: ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner value ${j} and it's outer loop value is ${i}`);
        console.log(i + ' * ' + j + ' = ' + (i*j));
        
        
    }
    
}
*/

/*
let myArray = ["Flash", "Superman", "Batman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}
*/

// Break and Continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//          console.log("Detected...");
//          break;
         
//     }
//    console.log(`Value of i is ${index}`);
// }


for (let index = 1; index <= 20; index++) {
    if(index == 5){
         console.log("Detected...");
         continue;   
    }
   console.log(`Value of i is ${index}`);
}