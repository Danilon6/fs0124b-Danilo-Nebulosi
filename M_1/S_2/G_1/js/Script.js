/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
    Esistono 5 datatypes in javascript.
    QUALI SONO?
    -STRINGA: indica una sequenza di caratteri testuali, può contenere anche dei numeri;
    -NUMERI: indica dei numeri;
    -BOOLEANO: sono valori prestabiliti, true e false;
    -ARRAY: indica una lista di elementi tra parentesi quadre;
    -OGGETTI: indica una coppia di chiave valore.

    N.B sia negli array che negli oggetti possono essere salvati più dati, ma nel secondo caso sono necessarie delle coppie di chiave valore.

    COME SI RICONOSCONO?
    -STRINGA: i caratteri sono scritti tra gli apici, doppi ( " " ) o singoli ( ' ' );
    -NUMERI: sono numeri scritti così come sono senza apici, doppi o singoli, perchè altrimenti diventerbbero una stringa;
    -BOOLEANO: come i numeri anche true e false sono scritti così come sono senza apici, doppi o singoli, perchè altrimenti diventerbbero una stringa;
    -ARRAY: i dati sono racchiusi tra parentesi quadre ( [ ] );
    -OGGETTI: le coppie chiave valore sono racchiuse tra parentesi graffe ( { } ).
    
    */

/* ESERCIZIO 2
Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Danilo";
console.log(myName)

/* ESERCIZIO 3
Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let dato1 = 12;
let dato2 = 20;
let risultato = dato1 + dato2;
console.log(risultato)


/* ESERCIZIO 4
Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Nebulosi";

/* 

const NOME = "Danilo";
NOME = "Nebulosi";

*/

/* ESERCIZIO 6
Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let dato3 = 4;
let risultato2 = dato3 - x
console.log(risultato2)

/* ESERCIZIO 7
Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

console.log(name1==name2)



if (name1.toLowerCase() && name2.toLowerCase()) { console.log(true)
    
} 

