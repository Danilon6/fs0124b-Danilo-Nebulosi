/* ESERCIZIO 1
  Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

{
let numero1 = 3
let numero2 = 5

if (numero1>numero2) {
  console.log("Il numero 1 è maggiore del numero 2");
} else if (numero1==numero2) {
  console.log("Il numero 2 e il numero 1 sono uguali");
}else{
  console.log("Il numero 2 è maggiore del numero 1");
}
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

{
  let numero1 = 2
  if (numero1 == 5) {
    console.log("Il numero fornito è 5");
  } else {
    console.log("not equal");
  }
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

{
  let numero = 5
  if (numero % 5==0) {
    console.log("divisibile per 5");
  } else {
    console.log("Il numero non è divisibile per 5");
  }

}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*
{
  let numero1 = 5
  let numero2 = 3
  let sottrazione = (numero1 - numero2)
  let addizione = (numero1 + numero2)

  if (numero1 || numero2 === 8) {
    console.log("Almeno uno dei due numeri è pari a 8");
  } else if (sottrazione || addizione == 8) {
    console.log("l'addizione o la sottrazione dei due numeri è pari a 8");
  } else {
    console.log("Nessun numero è pari a 8 nè tantomeno la loro addizione o sottrazione da come risultato 8");
  }
}
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

{
let totalShoppingCart = 50
const SPESE_DI_SPEDIZIONE = 10
let speseTotali =totalShoppingCart+SPESE_DI_SPEDIZIONE
if (totalShoppingCart>=50) {
  console.log("Hai diritto alla spedizione gratuita " + "Il saldo totale da pagare è: " + totalShoppingCart);
} else { 
  console.log("Il saldo totale da pagare è: " + speseTotali);
}
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

{
  let totalShoppingCart = 50
  const SPESE_DI_SPEDIZIONE = 10
  let speseTotali = (totalShoppingCart+SPESE_DI_SPEDIZIONE)*0.8
  let totaleDaPagareScontato = totalShoppingCart*0.8
  if (totalShoppingCart>=50) {
    console.log("Hai diritto alla spedizione gratuita e ad uno sconto del 20% in occasione del Black Friday " + "Il saldo totale da pagare è: " + totaleDaPagareScontato);
  } else { 
    console.log("Il saldo totale da pagare è: " + speseTotali);
  }
  }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*
{
  let numero1 = 10
  let numero2 = 20
  let numero3 = 30
  if (numero1>numero2 && numero1>numero3 && numero2>numero3) {
      console.log(numero1, numero2, numero3);     
  } else {
    console.log(numero1, numero3, numero2);
  }
*/


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

{
  let valoreFornito= 1
  if (typeof valoreFornito === "number") {
    console.log("Il valore fornito è un numero");
  } else {
    console.log("Il valore fornito non è un numero");
  }
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

{
  let numeroFornito = 10

  if (numeroFornito % 2 == 0) {
    console.log("Questo numero è pari");
  } else {
    console.log("Questo numero è dispari");
  }


}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10 || val > 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

{
  let val = 7
  if (val < 10 && val >= 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
{
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me["city"] = "Toronto"

console.log(me);
}

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
{
  const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  
  me["city"] = "Toronto"
  
  delete me.lastName

  console.log(me);
  }



/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
{
  const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  
  me["city"] = "Toronto"
  
  delete me.lastName

  delete me.skills[2]
  console.log(me);
  }


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let array = [ ]

array.push(1,2,3,4,5,6,7,8,9,10)

console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
array.splice (9, 1, 100);
console.log(array);
