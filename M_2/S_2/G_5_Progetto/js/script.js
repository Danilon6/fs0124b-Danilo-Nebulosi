//SELEZIONE FAKE CHECKBOX
let fakeCheckbox = document.querySelectorAll(".agree_terms")

//SELEZIONE LABEL
let labelFakeCheckbox = document.querySelectorAll(".label_fake_checkbox")


labelFakeCheckbox.forEach(label => {
    label.addEventListener("click", addClass)
});

fakeCheckbox.forEach(checkbox => {
    checkbox.addEventListener("click", addClass)
});


function addClass() {
    if (this.classList.contains("click")) {
        this.classList.remove("click")
        this.innerText = ""
    }else{
    this.classList.add("click")
    this.innerText = "✔"
}
}