// ESERCIZIO 1


class SalvaDati {

    constructor() {
        this.target = document.querySelector("#target")
        this.inputfield = null
        this.savedDataP = null
        this.saveBtn = null
        this.deleteBtn = null

        this.initHTML()

        this.target.append(this.savedDataP, this.inputfield, this.saveBtn, this.deleteBtn)
    }

    initHTML() {
        this.inputfield = this.creaElementoConId("input", "inputName")
        this.inputfield.placeholder = "Inserisci il tuo nome";
        this.savedDataP = this.creaElementoConId("p", "savedData")
        this.saveBtn = this.creaElementoConId("button", "saveBtn")
        this.saveBtn.innerText = "Salva il dato"
        this.deleteBtn = this.creaElementoConId("button", "deleteBtn")
        this.deleteBtn.innerText = "Elimina il dato"

        this.eventListener(this.saveBtn, this.saveBtnCallback.bind(this))
        this.eventListener(this.deleteBtn, this.deleteBtnCallback.bind(this))
    }

    creaElementoConId(tagName, id) {
        let elemento = document.createElement(tagName)
        elemento.setAttribute("id", id)
        return elemento
    }

    eventListener(button, callback) {
        button.addEventListener("click", callback)
    }

    saveBtnCallback() {
        this.savedDataP.innerHTML = ""
        localStorage.setItem("nome", this.inputfield.value)
        let savedData = localStorage.getItem("nome")
        this.savedDataP.innerHTML = savedData
    }

    deleteBtnCallback() {
        this.savedDataP.innerHTML = ""
        this.inputfield.value = ""
        localStorage.removeItem("nome")
    }

}

new SalvaDati();


// INIZIO ESERCIZIO SENZA LA CLASSE
//     let inputfield = document.querySelector("#inputName").value
//     let savedDataP = document.querySelector("#savedData")
//     let saveBtn = document.querySelector("#saveBtn")
//     let deleteBtn = document.querySelector("#deleteBtn")

//     saveBtn.addEventListener("click", function () {
//         savedDataP.innerHTML = ""
//         localStorage.setItem("nome", inputfield)
//         let savedData = localStorage.getItem("nome")
//         savedDataP.innerHTML = savedData
//     })

//     deleteBtn.addEventListener("click", function () {
//         savedDataP.innerHTML = ""
//         inputfield.value = ""
//         localStorage.removeItem("nome")
//     })
// }
// FINE ESERCIZIO SENZA LA CLASSE



// ESERCIZIO 2
let secondsP = document.querySelector("#seconds")

let seconds = sessionStorage.getItem("clock") || 0

setInterval(function() {
    
    seconds++
    
    sessionStorage.setItem("clock", JSON.stringify(secondsP.innerText))
    
    secondsP.innerText = seconds
}, 1000)











class Clock {

    static orologio(intervallo) {


        intervallo()
    }
    static intervallo() {

        setInterval(orologio, intervallo)
    }
}