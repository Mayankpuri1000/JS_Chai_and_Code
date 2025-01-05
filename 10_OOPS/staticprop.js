class User{ 
    constructor(username){ 
        this.username = username;
    }
    logMe(){ 
        console.log(`USERNAME is: ${this.username}`);
        
    }
    static createId(){ 
        return `123`
    }

}

const mayank = new User('mayank')
console.log(mayank.createId());

class Teacher extends User{ 
    constructor(username, email){ 
        super(username)
        this.email = email
    }
}

const mac = new Teacher('mac', 'mac@iphone.com')
