
let target = document.querySelector("#target")
fetch("https://striveschool-api.herokuapp.com/books")
    .then(response => response.json())
    .then(libri => {

        let cartContainer = document.querySelector("#targetCarrello")
        for (let libro of libri) {
            // CREO LA COL
            let col = document.createElement("div")
            // SETTO LE CLASSI
            col.classList.add("col-12", "col-md-6", "col-lg-4")

            // LA INSERISCO IN TARGET
            target.append(col)

            // CREO LA CARD
            let card = document.createElement("div")
            // SETTO LE CLASSI
            card.classList.add("card")

            // LA INSERISCO NELLA COL
            col.append(card)

            // CREO LA IMG
            let img = document.createElement("img")
            // SETTO GLI ATTRIBUTI
            img.setAttribute("src", libro.img)
            img.setAttribute('alt', 'Copertina_libro');
            // SETTO LE CLASSI
            img.classList.add("card-img-top", "cover")
            // LA INSERISCO NELLA COL 
            card.append(img)

            // CREO IL CARD BODY
            let cardBody = document.createElement("div")
            // SETTO EL CLASSI
            cardBody.classList.add("card-body")
            // LA INSERISCO NELLA CARD
            card.append(cardBody)

            // CREO L'H5 DEL CARD BODY
            let h5 = document.createElement("h5")
            // SETTO LE CLASSI
            h5.classList.add("card-title")
            // INSERISCO IL TITOLO DEL LIBRO
            let titoloDaVisualizzare;

            if (libro.title.length > 30) {
                titoloDaVisualizzare = libro.title.slice(0,31) + "..."
            }else{
                titoloDaVisualizzare = libro.title
            }
            h5.innerHTML = titoloDaVisualizzare
            // LO INSERISCO NEL CARD BODY
            cardBody.append(h5)

            // CREO IL P DEL CARD BODY
            let pCategory = document.createElement("p")
            // SETTO LE CLASSI
            pCategory.classList.add("card-text")
            // INSERISCO IL TITOLO DEL LIBRO
            pCategory.innerHTML = `Categoria: <b>${libro.category}</b>`
            // LO INSERISCO NEL CARD BODY
            cardBody.append(pCategory)

            // CREO IL P DEL CARD BODY E LA VALUTA
            valuta = "€"
            let pPrice = document.createElement("p")
            // SETTO LE CLASSI
            pPrice.classList.add("card-text")
            // INSERISCO IL TITOLO DEL LIBRO
            pPrice.innerHTML = `Prezzo: <b>${libro.price} ${valuta}</b>` 
            // LO INSERISCO NEL CARD BODY
            cardBody.append(pPrice)
            
            // CREO IL BTN DEL CARD BODY 
            let btn = document.createElement("a")
            // SETTO GLI ATTRIBUTI
            btn.setAttribute("href", "#")
            // SETTO LE CLASSI
            btn.classList.add("btn", "btn-primary", "me-2")
            // INSERISCO IL TESTO
            btn.innerHTML = "SCARTA"
            // GLI DO L'ADD EVENT LISTENER
            btn.addEventListener("click", () => {
                let cardParent = btn.closest(".col-12")
                cardParent.classList.add("d-none")
            })
            // LO INSERISCO NEL CARD BODY
            cardBody.append(btn)
            
            // CREO IL BTN PER IL CARRELLO E SELEZIONE IL TARGET DEI DIV
            let cartBtn = document.createElement("a")
            
            // SETTO GLI ATTRIBUTI
            cartBtn.setAttribute("data-bs-toggle", "offcanvas")
            cartBtn.setAttribute("href", "#offcanvasExample")
            cartBtn.setAttribute("aria-controls", "#offcanvasExample")
            // SETTO LE CLASSI
            cartBtn.classList.add("btn", "btn-primary")
            // INSERISCO IL TESTO
            cartBtn.innerHTML = "AGGIUNGI AL CARRELLO"
            

            // GLI DO L'ADD EVENT LISTENER
            cartBtn.addEventListener("click", () => {
                // CERCO IL LIBRO
                let cardContainer = cartBtn.closest(".col-12")
                // CLONO IL LIBRO
                let cardContainerCopia = cardContainer.cloneNode(true)
                // RIMUOVO LE CLASSI CHE DANNO FASTIDIO
                cardContainerCopia.classList.remove("col-lg-4")
                // RIMUOVO I LINK
                let cardContainerA = cardContainerCopia.querySelectorAll("a")
                cardContainerA.forEach(el => {
                    el.classList.add("d-none")
                });

                
                cartContainer.append(cardContainerCopia)
                localStorage.setItem("cart", JSON.stringify(cartContainer))
            })
            // LO INSERISCO NEL CARD BODY
            cardBody.append(cartBtn)

        }

       // PERSISTE
        

    })


