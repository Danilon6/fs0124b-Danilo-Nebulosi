loader = document.querySelector("#loader")

setInterval(() => {
    

fetch('https://striveschool-api.herokuapp.com/api/product/', {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTYwYTJkN2IxMTAwMTkwZTZlZWUiLCJpYXQiOjE3MDk4OTMxMzAsImV4cCI6MTcxMTEwMjczMH0.D90x1gKirs-QbiLsLO_IpURvYI5UqNpnH7Nu_OYNC-E"
    },
})
    .then(res => res.json())
    .then(telefoni => {
        telefoni.forEach(telefono => {
            // SELEZIONO I CONTENUTI DEL MODALE CHE GESTIRà L'ELIMINAZIONE
            let titolo = document.querySelector(".deleteModal-title")
            let contenuto = document.querySelector(".deleteModal-body")
            let stopBtn = document.querySelector("#stopRequest")
            let continueBtn = document.querySelector("#continueRequest")
            let closeBtn = document.querySelector("#closeBtn")

            let containerTelefono = generaClone()

            let modello = containerTelefono.querySelector(".card-title")
            let descrizione = containerTelefono.querySelector("#descrizione")
            let brand = containerTelefono.querySelector("#brand")
            let imageurl = containerTelefono.querySelector("#url-immagine")
            let prezzo = containerTelefono.querySelector("#prezzo")
            let editBtn = containerTelefono.querySelector("#editBtn")
            let deleteBtn = containerTelefono.querySelector("#deleteBtn")
            let infoBtn = containerTelefono.querySelector("#infoBtn")
            editBtn.href = `edit.html?id=${telefono._id}`
            infoBtn.href = `details.html?id=${telefono._id}`

            modello.innerHTML = telefono.name
            descrizione.innerHTML = telefono.description
            brand.innerHTML = telefono.brand
            imageurl.src = telefono.imageUrl
            prezzo.innerHTML = telefono.price

            deleteBtn.addEventListener('click', function () {
                titolo.innerHTML = `Stai per eliminare ${telefono.name}`
                contenuto.innerHTML = `Se sicuro di voler eliminare ${telefono.name} definitivamente?`

                continueBtn.addEventListener("click", function () {

                    fetch(`https://striveschool-api.herokuapp.com/api/product/${telefono._id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTYwYTJkN2IxMTAwMTkwZTZlZWUiLCJpYXQiOjE3MDk4OTMxMzAsImV4cCI6MTcxMTEwMjczMH0.D90x1gKirs-QbiLsLO_IpURvYI5UqNpnH7Nu_OYNC-E"
                        }
                    })
                        .then(res => res.json())
                        .then(telefonoEliminato => {
                            closeBtn.click()
                            deleteBtn.closest(".container_telefono").remove()

                        })
                })

                stopBtn.addEventListener("click", function () {
                    closeBtn.click()
                })

            })

            
            
            document.querySelector(".target").append(containerTelefono)
        });


    })
    .then(
        loader.classList.add("d-none")
    )
}, 20000);
function generaClone() {
    let template = document.querySelector('#template-telefono')
    let clone = template.content.cloneNode(true)
    return clone;
}



