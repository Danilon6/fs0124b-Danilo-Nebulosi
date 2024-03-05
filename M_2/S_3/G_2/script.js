// ESERCIZIO 1

{
    let inputfield = document.querySelector("#inputName")
    let savedDataP = document.querySelector("#savedData")
    let saveBtn = document.querySelector("#saveBtn")
    let deleteBtn = document.querySelector("#deleteBtn")

    saveBtn.addEventListener("click", function () {
        savedDataP.innerHTML = ""
        localStorage.setItem("nome", JSON.stringify(inputfield.value))
        let savedData = localStorage.getItem("nome")
        let savedDataString = localStorage = JSON.parse(savedData)
        savedDataP.append(savedDataString)
    })

    deleteBtn.addEventListener("click", function () {
        savedDataP.innerHTML = ""
        inputfield.value = ""
        localStorage.removeItem("nome")
    })
}



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