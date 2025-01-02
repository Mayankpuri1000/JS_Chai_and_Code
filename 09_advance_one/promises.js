const promiseOne = new Promise(function(resolve, reject){ 
    // Do an async task - DB Calls, Cryptography, Network Calls
    setTimeout(function(){ 
        console.log("Async task completed");
        resolve();
    }, 1000)
})

promiseOne.then(() => { 
    console.log("Promise Consumed");
}) // .then() has a direct connection with resolve.



new Promise((resolve, reject) => { 
    setTimeout(() => { 
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(() => { 
    console.log("Async task 2 resolved.");
    })


const promiseThree = new Promise(function(resolve, reject){ 
    setTimeout(function(){ 
        resolve({username: "Mayank",
                 email: "abc@example.com"
        })
    },1000)
})

promiseThree.then(function(user){ 
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){ 
    setTimeout(function(){
        let error = false;
        if(!error){ 
            resolve({username: 'Mayank', password: '123'});
        }
        else{ 
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => { 
    console.log(username);
})
.catch((error) => { 
    console.log(error);
})
.finally(() => { 
    console.log("Your promise is either resolved or rejected.");
    
}) // this is called callback function chaining.


const promiseFive = new Promise(function(resolve,reject){ 
    setTimeout(function(){
        let error = true;
        if(!error){ 
            resolve({username: 'Javascript', password: '123'});
        }
        else{ 
            reject("ERROR: JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log('E: ', error);
        
//     }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => { 
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log("E: ", error))