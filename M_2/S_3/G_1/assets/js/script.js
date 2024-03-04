class User{
    constructor(_firstName, _lastName, _age, _location ){
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    confrontoEta(user){
        let etaDaConfrontare = user.age
        if (etaDaConfrontare >= this.age) {
            return `L'età di ${user.firstName} ${user.lastName} è uguale o maggiore di quella di ${this.firstName} ${this.lastName}, infatti ${etaDaConfrontare} >= ${this.age}`
        } else {
            return `L'età di ${this.firstName} ${this.lastName} è uguale o maggiore di quella di ${user.firstName} ${user.lastName}, infatti ${this.age} >= ${etaDaConfrontare}`
        }
    }
}


let user1 = new User("Danilo", "Nebulosi", "19", "Napoli")
let user2 = new User("Mario", "Rossi", "20", "Bologna")

console.log(user1.confrontoEta(user2));