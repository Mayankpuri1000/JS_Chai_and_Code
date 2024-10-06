const user = { 
    userName: "Mayank", 
    price: 999, 

    welcomeMessage: function(){ 
        console.log(`${this.userName}, Welcome to the website.`);
    }
}

user.welcomeMessage();
user.userName = "Sam"
user.welcomeMessage();
