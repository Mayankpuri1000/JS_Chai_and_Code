const user = { 
    username: 'Mayank', 
    loginCount: 8, 
    signedIn: true, 

    getUserDetails: function(){ 
        // console.log("Got all the details from the user.");
        // console.log(`Username: ${this.username}`); // this is used to specify the current context.
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // Here, it will show an empty object but in browser, it will show a Window object.

// const promise = new Promise();
// const date = new Date(); // 'new' keyword is one of the constructor function

function User(username, loginCount, isLoggedIn){ 
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){ 
        console.log(`Welcome ${this.username}`);
        
    }
    return this;
}

const userOne = new User('Mayank', 12, 10)
const userTwo = new User('ChaiAurCode', 10, 10)
console.log(userOne.constructor);
// console.log(userTwo);

