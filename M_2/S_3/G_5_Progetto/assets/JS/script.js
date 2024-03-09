
loader = document.querySelector("#loader")

call()

async function call() {
    const response = await fetch('https://striveschool-api.herokuapp.com/api/product/', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTYwYTJkN2IxMTAwMTkwZTZlZWUiLCJpYXQiOjE3MDk4OTMxMzAsImV4cCI6MTcxMTEwMjczMH0.D90x1gKirs-QbiLsLO_IpURvYI5UqNpnH7Nu_OYNC-E"
        },
    })
    const telefoni = await response.json()
    if (telefoni.length == 0) {
        Swal.fire({
            icon: "error",
            title: "Non è stato trovato nessun prodotto! ",
            text: "Crea un nuovo telefono nella sezione Back office per visualizzarlo nella home",
            footer: '<a href="./back-office.html">Vai al back Office</a>'
        });
        loader.classList.add("d-none")
    } else {
        telefoni.forEach(telefono => {

            let containerTelefono = generaClone()

            let { modello, descrizione, brand, imageurl, prezzo, editBtn, deleteBtn, infoBtn } = selezioneElementiClone(containerTelefono)

            modificaElementiClone(editBtn, infoBtn, modello, descrizione, brand, imageurl, prezzo, telefono)

            deleteBtn.addEventListener('click', function () {

                Swal.fire({
                    title: `Stai per eliminare ${telefono.name}, se sicuro ?`,
                    showDenyButton: true,
                    confirmButtonText: "Si, voglio eliminarlo",
                    denyButtonText: `No, ho sbagliato`
                }).then((result) => {
                    if (result.isConfirmed) {
                        fetch(`https://striveschool-api.herokuapp.com/api/product/${telefono._id}`, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTYwYTJkN2IxMTAwMTkwZTZlZWUiLCJpYXQiOjE3MDk4OTMxMzAsImV4cCI6MTcxMTEwMjczMH0.D90x1gKirs-QbiLsLO_IpURvYI5UqNpnH7Nu_OYNC-E"
                            }
                        })
                            .then(res => res.json())
                            .then(telefonoEliminato => {
                                Swal.fire(`Hai cancellato ${telefono.name}`, "", "success");
                                deleteBtn.closest(".container_telefono").remove()
                            })
                    } else if (result.isDenied) {
                        Swal.fire(`${telefono.name} non è stato eliminato!`, "", "error");
                    }
                });
            })
            
            document.querySelector(".target").append(containerTelefono)
        });
        loader.classList.add("d-none")
    }
}

function generaClone() {
    let template = document.querySelector('#template-telefono')
    let clone = template.content.cloneNode(true)
    return clone;
}

function selezioneElementiClone(elemento) {
    let modello = elemento.querySelector(".card-title")
    let descrizione = elemento.querySelector("#descrizione")
    let brand = elemento.querySelector("#brand")
    let imageurl = elemento.querySelector("#url-immagine")
    let prezzo = elemento.querySelector("#prezzo")
    let editBtn = elemento.querySelector("#editBtn")
    let deleteBtn = elemento.querySelector("#deleteBtn")
    let infoBtn = elemento.querySelector("#infoBtn")

    return {
        modello: modello,
        descrizione: descrizione,
        brand: brand,
        imageurl: imageurl,
        prezzo: prezzo,
        editBtn: editBtn,
        deleteBtn: deleteBtn,
        infoBtn: infoBtn,
    }
}

function modificaElementiClone(editBtn, infoBtn, modello, descrizione, brand, imageurl, prezzo, telefono) {
    editBtn.href = `edit.html?id=${telefono._id}`
    infoBtn.href = `details.html?id=${telefono._id}`

    modello.innerHTML = telefono.name
    descrizione.innerHTML = telefono.description
    brand.innerHTML = telefono.brand
    imageurl.src = telefono.imageUrl
    prezzo.innerHTML = telefono.price
}