"use strict";
class User {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    set ricarica(ricarica) {
        this.credito += ricarica;
    }
    set chiamata(minuti) {
        let costoChiamata = minuti * 0.20;
        if (this.credito < costoChiamata)
            throw new Error("Non hai abbastanza credito residuo");
        try {
            this.credito -= costoChiamata;
        }
        catch (error) {
            console.error(error);
        }
        this.numeroChiamate += minuti;
    }
    get chiama404() {
        return this.credito;
    }
    get getNumeroChiamata() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        return true;
    }
}
const persona1 = new User("Danilo", "Nebulosi");
persona1.ricarica = 10;
console.log(persona1.chiama404);
persona1.chiamata = 5;
console.log(persona1.chiama404);
console.log(persona1.getNumeroChiamata);
console.log(persona1.azzeraChiamate());
console.log(persona1.getNumeroChiamata);
//# sourceMappingURL=script.js.map