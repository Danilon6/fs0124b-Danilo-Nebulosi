const buttonAggiungiCartella = document.querySelector("#add_cartella")

buttonAggiungiCartella.addEventListener("click", aggiungiCartella )

const container_esterno_cartelle = document.querySelector("#container_esterno_cartelle")
function aggiungiCartella () {
    const divInterno = document.createElement("div")
    divInterno.setAttribute("id", "container_interno_cartelle")
    for (let i = 1; i < 25; i++) {
        const cartella = document.createElement("div")
        cartella.classList.add("cartella")
        cartella.innerText = i
        divInterno.append(cartella)
    }
    container_esterno_cartelle.append(divInterno)
}