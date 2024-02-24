// SELEZIONE HEADER
let header = document.querySelector("#header")

// SELEZIONE BUTTON GET STARTED
let getStartedBtn = document.querySelector("#Get_started")

// ADD EVENT LISTENER SULLO SCROLL DELLA PAGINA
window.addEventListener("scroll", function () {
    let top = window.scrollY
    console.log(top);
    // CAMBIO COLORE ALL'HEADER E AL BTN
    if (top > 360) {
        header.style.backgroundColor = "white"
        getStartedBtn.style.backgroundColor = "#1a8917"
    } else {
        header.style.backgroundColor = "#FFC017"
        getStartedBtn.style.backgroundColor = "#000"
    }
})


