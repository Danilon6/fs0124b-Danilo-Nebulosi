// ESERCIZIO 1 CLASSE USER
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

// ESERCIZIO 2 CLASSE PET
let count = 1

let target = document.querySelector("#target")

let petName;
let ownerName;
let species;
let breed;

class Pet{
    constructor(_petName, _ownerName, _species, _breed){
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }

    confrontoPadrone(pet){
        let padroneDaConfrontare = pet.ownerName

        if (padroneDaConfrontare.toLowerCase() == this.ownerName.toLowerCase()) {
            return "true"// return `${this.petName} e ${pet.petName} hanno lo stesso padrone`
        } else {
            return "false"// return `${this.petName} e ${pet.petName} non hanno lo stesso padrone`
        }
    }
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let datiForm = []
    petName = document.querySelector("#petName").value
    ownerName = document.querySelector("#ownerName").value
    species = document.querySelector("#species").value
    breed = document.querySelector("#breed").value
    datiForm.push(petName, ownerName, species, breed)
    console.log(datiForm);

    eval`(let pet${count} = new Pet(petName, ownerName, species, breed))`
    console.log(eval(`pet${count}`));

    let ul = document.createElement("ul")
    target.append(ul)

    datiForm.forEach(dato => {
        let li = document.createElement("li")
        li.innerHTML = dato
        ul.append(li)
    });
    count ++
});

let animale1 = new Pet("nome", "padrone", "cane", "labrador")
let animale2 = new Pet("nome1", "PADRONE", "cane", "labrador")

console.log(animale1.confrontoPadrone(animale2));