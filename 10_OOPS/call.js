function setUsername(username){ 
    // compelex DB Calls
    this.username = username;
}

function createUser(username, email, password){ 
    setUsername.call(this, username);

    this.email = email
    this.password = password

    
}
