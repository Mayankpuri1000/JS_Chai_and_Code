function User(username, email){ 
    this._username = username
    this._email = email

    Object.defineProperty(this, 'username', { 
        get: function(){ 
            return (this._username.toUpperCase())
        }, 
        set: function(value){ 
            this._username = value
        }
    })

    Object.defineProperty(this, 'email', { 
        get: function(){ 
            return (this._email.toUpperCase())
        }, 
        set: function(value){ 
            this._email = value
        }
    })
}

const chai = new User('chai', 'chai@chai.com')
console.log(chai.username);
console.log(chai.email);

