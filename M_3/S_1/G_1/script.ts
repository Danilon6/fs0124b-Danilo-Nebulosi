
interface iSmartphone {
    credito:number
    numeroChiamate:number
}

class User implements iSmartphone {
    credito: number
    numeroChiamate: number

    constructor(protected nome:string, protected cognome:string){
        this.credito = 0
        this.numeroChiamate = 0
    }

    ricarica(ricarica:number):void{
        this.credito += ricarica
    }

    chiamata(minuti:number):void{
        let costoChiamata = minuti * 0.20
        if(this.credito < costoChiamata) throw new Error("Non hai abbastanza credito residuo");
        
        try {
            this.credito -= costoChiamata
        } catch (error) {
            console.error(error);
        }       

        this.numeroChiamate += minuti
    }
    chiama404():number{
        return this.credito
    }

    getNumeroChiamata():number{
        return this.numeroChiamate
    }

    azzeraChiamate():boolean{
        this.numeroChiamate = 0
        return true
    }
}

const persona1:User = new User("Danilo", "Nebulosi")

persona1.ricarica(10)
console.log(persona1.chiama404());
persona1.chiamata(5)
console.log(persona1.chiama404());
console.log(persona1.getNumeroChiamata());
console.log(persona1.azzeraChiamate());
console.log(persona1.getNumeroChiamata());