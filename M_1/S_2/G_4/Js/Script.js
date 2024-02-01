/* ESERCIZIO 1
Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(l1,l2) {
    return l1*l2;
}

console.log(area(3,4));

/* ESERCIZIO 2
Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
la loro somma moltiplicata per tre.
*/
function crazySum (a,b){
    
    if (a!=b) {
        return a+b
    } else {
        return (a+b)*3
    }
}
console.log(crazySum(5,5));
console.log(crazySum(5,4));

/* ESERCIZIO 3
Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff (a){
    if (a <= 19) {
        return Math.abs(a - 19)
    } else {
        
        return Math.abs(a - 19)*3
    }
}

console.log(crazyDiff(10));
console.log(crazyDiff(39));


/* ESERCIZIO 4
Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
se n è uguale a 400.
*/

function buondary (n) {
    if (n>20 && n<100 || n == 400) {
        return "true"
    }else {
        return "false"
    }
}

console.log(buondary(100));

/* ESERCIZIO 5
Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
ritornare la stringa originale senza alterarla.
*/
function epify (a) {
    if (a != "EPICODE") {
        return "EPICODE " + a
    } else {
        return a
    }
    
}

console.log(epify(" Bello"));
console.log(epify("EPICODE"));


/* ESERCIZIO 6
Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n) {
    if (n % 3 == 0 || n % 7 == 0) {
        return "Il numero fornito è un multiplo di 3 o 7"
    } else {
        return "Il numero fornito non è un multiplo di 3 o 7"
    }
}

console.log(check3and7("3"));
console.log(check3and7("7"));
console.log(check3and7("10"));

/* ESERCIZIO 7
Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(a) {
    return a.split("").reverse().join("")
}
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
 */

function upperFirst (a) {
    let stringa = a.split(" ")
    
    for (let i = 0; i < stringa.length; i++) {
        
        stringa[i]= stringa[i].charAt(0).toUpperCase() + stringa[i].slice(1)
        
    }

    let stringaunita = stringa.join(" ")
    return stringaunita
}

console.log(upperFirst("Questa stringa dovrebbe avere tutte le prime lettere in maiuscolo"));

/* ESERCIZIO 9
Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
della stringa originale.
*/

function cutString(a) {
    return a.slice(1, -1 )
}
console.log(cutString("Questa è una stringa senza il primo e l'ultimo carattere"));


/* ESERCIZIO 10
Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom (n) {
    
    let arrayDiNumeriCasuali = []
    
    for (let i = 0; i < n; i++) {
        let numeriCasuali = Math.floor(Math.random() * 11) 
        arrayDiNumeriCasuali.push(numeriCasuali);
    }
    return arrayDiNumeriCasuali
}

console.log(giveMeRandom(5));