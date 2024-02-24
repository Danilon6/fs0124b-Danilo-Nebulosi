// SELEZIONE HEADER
let header = document.querySelector("#header")

// ADD EVENT LISTENER SULLO SCROLL DELLA PAGINA
window.addEventListener("scroll", function () {
    let top = window.scrollY
    console.log(top);
    if (top>360) {
        header.style.backgroundColor = "white"
        
    }else{
        header.style.backgroundColor = "#FFC017"
    }
})


