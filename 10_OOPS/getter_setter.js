class user{ 
    constructor(email, password){ 
        this.email = email
        this.password = password
    }

    get email(){ 
        return `${this._email.toUpperCase()}`
    }
    set email(value){ 
        this._email = value
    }


    get password(){
        return (`ABCDEFGHIJKLM${this._password.toUpperCase()}NOPQRSTUVWXYZ`)
    }
    set password(value){ 
        this._password = value
    }
    
}

const mayank = new user('m@mayank.ai', '123')
console.log(mayank.password);
console.log(mayank.email);

