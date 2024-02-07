const tasks = document.querySelector("#Tasks");
const button = document.querySelector("#To_Do");
const target = document.querySelector("#Tasks_List");
const tasks_removed = document.querySelector("#tasks_removed")

button.addEventListener("click", function () {
    const li = document.createElement("li")
    const btn = document.createElement("button")
    btn.innerText = "Remove From List"
    btn.classList.add("remove")
    btn.addEventListener("click", function() {
        tasks_removed.append(li)
        btn.remove();
    })
    li.innerText = tasks.value
    target.append(li)
    li.insertAdjacentElement("Afterend", btn)
})





