let header = document.querySelector("#header")
let stickySection = document.querySelector("#sticky_section")

let titoloArticle = document.querySelector("h3") 
let testoTitolo = titoloArticle.textContent;
if (testoTitolo.length > 20) {
    let testoTagliato = testoTitolo.slice(0, 20) + "...";
    testoTitolo.textContent = testoTagliato;
}
window.addEventListener("scroll", function () {
    let top = window.scrollY
    // let headerBottom = header.getBoundingClientRect().bottom;
    // let stickySectionTop = stickySection.getBoundingClientRect().top;
    console.log(top);
    // console.log(headerBottom);
    // console.log(stickySectionTop);
    // console.log(stickySection);

    if (top>360) {
        header.style.backgroundColor = "white"
        
    }else{
        header.style.backgroundColor = "#FFC017"
    }

    // if (top > 960) {
    //     stickySection.style.position = "sticky";
    //     stickySection.style.top = headerBottom + "px";
    // } else {
    //     stickySection.style.position = "";
    //     stickySection.style.top = "";
    // }
})


