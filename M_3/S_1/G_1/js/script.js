"use strict";
class User {
    constructor(nome, cognome, credito, numeroChiamate) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(ricarica) {
        this.credito += ricarica;
    }
    chiamata(minuti) {
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
    chiama404() {
        return this.credito;
    }
    getNumeroChiamata() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
const persona1 = new User("Danilo", "Nebulosi", 0, 0);
console.log(persona1.ricarica(10));
console.log(persona1.chiama404());
console.log(persona1.chiamata(5));
console.log(persona1.chiama404());
console.log(persona1.getNumeroChiamata());
console.log(persona1.azzeraChiamate());
console.log(persona1.getNumeroChiamata());
//# sourceMappingURL=script.js.map