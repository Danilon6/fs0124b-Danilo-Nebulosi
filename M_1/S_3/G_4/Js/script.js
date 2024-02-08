const buttonAggiungiCartella = document.querySelector("#add_cartella")

buttonAggiungiCartella.addEventListener("click", aggiungiCartella )

const container_esterno_cartelle = document.querySelector("#container_esterno_cartelle")
function aggiungiCartella () {
    const divInterno = document.createElement("div")
    let numeriUsati = []
        let numero;
    divInterno.setAttribute("id", "container_interno_cartelle")
    for (let i = 1; i < 25; i++) {
        const cartella = document.createElement("div")
        cartella.classList.add("cartella")
        do{
           numero = Math.round(Math.random()*89)+1
        }while(numeriUsati.includes(numero))

        numeriUsati.push(numero)

        cartella.innerText = numero
        cartella.setAttribute("data-numero", numero)
        divInterno.append(cartella)
        
    }
    
    container_esterno_cartelle.append(divInterno)
    
}


const tabellone = document.querySelector("#Tabellone")
const iniziaPartita = document.querySelector("#inizia_partita")
const button_estrai_numero = document.querySelector("#estrai_numero")
iniziaPartita.addEventListener("click", creaTabellone)
let numero_tabellone;
let iniziaPartitaCliccato = false;

function creaTabellone() {

    for (let i = 1; i < 91; i++) {
        const numero = document.createElement("div")
        numero.classList.add("numero_tabellone")
        numero.innerText = i
        tabellone.append(numero)
    }

    if (!iniziaPartitaCliccato) {
        iniziaPartita.disabled = true
        iniziaPartitaCliccato = true
        button_estrai_numero.style.opacity = 1
        buttonAggiungiCartella.disabled = true
    }

    numero_tabellone = document.querySelectorAll(".numero_tabellone")
    button_estrai_numero.addEventListener("click", estraiNumero)
    }
    let numeriGiaEstratti = []
    let numeroEstratto;

    function estraiNumero () {

        do{
           numeroEstratto = Math.round(Math.random()*89)+1
        }while(numeriGiaEstratti.includes(numeroEstratto))

        numeriGiaEstratti.push(numeroEstratto)
        
        numero_tabellone.forEach(function (numero){
            let numeroTabellone = parseInt(numero.innerText)
            if ( numeroTabellone == numeroEstratto) {
                numero.style.backgroundColor = "green"
            }
        })
        
        const cartella = document.querySelectorAll(".cartella")
        cartella.forEach(function (cartella) {
            let numeroCartella = parseInt(cartella.getAttribute("data-numero"))
            if (numeroCartella == numeroEstratto) {
                cartella.style.backgroundColor= "green"
                
            }
        })
    }

    const reset = document.querySelector("#reset")

    reset.addEventListener("click", resetPagina)

    function resetPagina () {
        tabellone.innerHTML = ""
        container_esterno_cartelle.innerHTML = ""
        iniziaPartita.disabled = false
        iniziaPartitaCliccato = false
        buttonAggiungiCartella.disabled = false
        button_estrai_numero.style.opacity = 0
    }

