let contenitore = document.querySelector("#contenitore")
let tagImg = contenitore.querySelectorAll("img")

document.querySelector("#trovaImmagini").addEventListener("submit", function (event) {
    event.preventDefault();

    let ricerca = document.querySelector("#valoreImmagine").value

    call(ricerca)

});


async function call(query) {

    const apiKey = 'ta2q3rMBu2F8zw9Py9mc2cK8cofJfCNnyhu2MSTlVN0ruiYN5h1R4bNm';

    return await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        method: 'GET',
        headers: {
            Authorization: apiKey
        }
    }).then(dati => dati.json())
    .then(ricerca => {
        ricerca.photos.forEach((el, index) => {
            tagImg[index].src = el.src.original;
        });
    })
}