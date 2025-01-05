class User{ 
    constructor(username){ 
        this.username = username;
    }
    logMe(){ 
        console.log(`USERNAME is: ${this.username}`);
        
    }

}

class Teacher extends User { 
    constructor(username, email, password){ 
        super(username)
        this.email = email 
        this.password = password 
    }

    addCourse(){ 
        console.log(`A courese was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", 'chai@example.com', '123')
chai.addCourse()

const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(masalaChai instanceof User);
