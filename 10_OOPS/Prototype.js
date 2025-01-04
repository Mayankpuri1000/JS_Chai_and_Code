// let myName = "Mayank"
// let myChannel = "THE_MAYANK_PURI"

// console.log(myName.truelength());

let myHeroes = ["thor", "spiderman"]

let heroPower = { 
    thor: "Hammer", 
    spiderman: "sling", 

    getSpiderPower: function(){ 
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.mayank = function(){ 
    console.log(`Mayank is present in all objects.`);
}

Array.prototype.heyMayank = function(){ 
    console.log("Mayank says hello");
    
}

// heroPower.mayank()
// myHeroes.mayank()

// myHeroes.heyMayank();
// heroPower.heyMayank();

// Inheritance

const User = { 
    name: 'Mayank', 
    email: 'mayank@example.com'
}

const Teacher = { 
    makeVideo: true
}

const teachingAssistant = { 
    isAvailable: false
}

const TAsupport = { 
    makeAssignment: 'JS Assignment', 
    fullTime: true, 
    __proto__: teachingAssistant
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TAsupport, teachingAssistant)

let anotherUserName = "ChaiAurCode   "
String.prototype.trueLength = function(){ 
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.trueLength();
"mayank. ".trueLength();

