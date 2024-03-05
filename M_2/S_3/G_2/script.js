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
        localStorage.setItem("nome", JSON.stringify(this.inputfield.value))
        let savedData = localStorage.getItem("nome")
        let savedDataString = JSON.parse(savedData)
        this.savedDataP.append(savedDataString)
    }

    deleteBtnCallback() {
        this.savedDataP.innerHTML = ""
        this.inputfield.value = ""
        localStorage.removeItem("nome")
    }

}

new SalvaDati();

// INIZIO ESERCIZIO SENZA LA CLASSE
//     let inputfield = document.querySelector("#inputName")
//     let savedDataP = document.querySelector("#savedData")
//     let saveBtn = document.querySelector("#saveBtn")
//     let deleteBtn = document.querySelector("#deleteBtn")

//     saveBtn.addEventListener("click", function () {
//         savedDataP.innerHTML = ""
//         localStorage.setItem("nome", JSON.stringify(inputfield.value))
//         let savedData = localStorage.getItem("nome")
//         let savedDataString = JSON.parse(savedData)
//         savedDataP.append(savedDataString)
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

let seconds = 0

function updateClock() {

    secondsP.innerText = seconds

    seconds++

    sessionStorage.setItem("clock", JSON.stringify(secondsP.innerText))
}


addEventListener("load", function () {
    let savedSeconds = sessionStorage.getItem("clock")
    let savedSecondsConverted = JSON.parse(savedSeconds)
    seconds = savedSecondsConverted


})
setInterval(updateClock, 1000)











class Clock {

    static orologio(intervallo) {


        intervallo()
    }
    static intervallo() {

        setInterval(orologio, intervallo)
    }
}