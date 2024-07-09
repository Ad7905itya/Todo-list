const btnGroup = document.getElementById("btn-group");
const btn = btnGroup.getElementsByClassName("box");
const boxDetailGroup = document.getElementById("box-detail-group");
const boxDetail = boxDetailGroup.getElementsByClassName("box-detail");
let x = 0;


let input = document.querySelector("input");
let addBtn = document.getElementById("addBtn");


addBtn.addEventListener("click", function(){
    switch(x){
        case(x = 0):
        study();
        break
        case(x = 1):
        sports();
        break
        case(x = 2):
        work();
        break
        case(x = 3):
        other();
    }
})

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");

        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

        let boxCurrent = document.getElementsByClassName("box-detail-1");
        boxCurrent[0].className = boxCurrent[0].className.replace(" box-detail-1", "");
        this.className += " box-detail-1";


        switch (i) {
            case (i = 0):
                boxDetail[0].style.display = "flex";
                boxDetail[1].style.display = "none";
                boxDetail[2].style.display = "none";
                boxDetail[3].style.display = "none";
                x = 0;
                break
            case (i = 1):
                boxDetail[0].style.display = "none";
                boxDetail[1].style.display = "flex";
                boxDetail[2].style.display = "none";
                boxDetail[3].style.display = "none";
                x = 1;
                break
            case (i = 2):
                boxDetail[0].style.display = "none";
                boxDetail[1].style.display = "none";
                boxDetail[2].style.display = "flex";
                boxDetail[3].style.display = "none";
                x = 2;
                break
            case (i = 3):
                boxDetail[0].style.display = "none";
                boxDetail[1].style.display = "none";
                boxDetail[2].style.display = "none";
                boxDetail[3].style.display = "flex";
                x = 3;
                break
        }
    })
}

function study() {
    if (input.value === "") {
        alert("Please write your task...");
    } else {
        const list = document.createElement("div");
        list.setAttribute("class", "list");
        document.getElementById("nul-1").append(list);
        const boxListItems = document.createElement("div");
        boxListItems.setAttribute("class", "list-items");
        list.append(boxListItems);


        const checkbox = document.createElement("span");
        checkbox.setAttribute("class", "checkbox");
        boxListItems.append(checkbox);
        const icon0 = document.createElement("i");
        icon0.setAttribute("class", "fa-solid");
        checkbox.append(icon0);

        let turn0 = false;
        list.addEventListener("click", () => {
            if (turn0 === true) {
                turn0 = false;
                icon0.setAttribute("class", "fa-solid");
                checkbox.style.borderColor = "blue";
            } else {
                turn0 = true;
                icon0.setAttribute("class", "fa-solid fa-check");
                checkbox.style.borderColor = "#10BD36";
                checkbox.style.color = "#10BD36";
            }
        })

        const li1 = document.createElement("li");
        li1.setAttribute("class", "listId");
        li1.setAttribute("id", "listId-1");
        boxListItems.append(li1);
        li1.innerHTML = input.value;
        input.value = "";

        const deleteTask = document.createElement("span");
        deleteTask.setAttribute("class", "deleteTask");
        boxListItems.append(deleteTask);
        const icon = document.createElement("i");
        icon.setAttribute("class", "fa-solid fa-rectangle-xmark");
        deleteTask.append(icon);

        deleteTask.addEventListener("click", () => {
            list.style.display = "none";
        })
       
    }
}

function sports() {
    if (input.value === "") {
        alert("Please write your task...");
    } else {
        const list = document.createElement("div");
        list.setAttribute("class", "list");
        document.getElementById("nul-2").append(list);
        const boxListItems = document.createElement("div");
        boxListItems.setAttribute("class", "list-items");
        list.append(boxListItems);


        const checkbox = document.createElement("span");
        checkbox.setAttribute("class", "checkbox");
        boxListItems.append(checkbox);
        const icon0 = document.createElement("i");
        icon0.setAttribute("class", "fa-solid");
        checkbox.append(icon0);

        let turn0 = false;
        list.addEventListener("click", () => {
            if (turn0 === true) {
                turn0 = false;
                icon0.setAttribute("class", "fa-solid");
                checkbox.style.borderColor = "blue";
            } else {
                turn0 = true;
                icon0.setAttribute("class", "fa-solid fa-check");
                checkbox.style.borderColor = "#10BD36";
                checkbox.style.color = "#10BD36";
            }
        })

        const li1 = document.createElement("li");
        li1.setAttribute("class", "listId");
        boxListItems.append(li1);
        li1.innerHTML = input.value;
        input.value = "";

        const deleteTask = document.createElement("span");
        deleteTask.setAttribute("class", "deleteTask");
        boxListItems.append(deleteTask);
        const icon = document.createElement("i");
        icon.setAttribute("class", "fa-solid fa-rectangle-xmark");
        deleteTask.append(icon);

        deleteTask.addEventListener("click", () => {
            list.style.display = "none";
        })
    }
}

function work() {
    if (input.value === "") {
        alert("Please write your task...");
    } else {
        const list = document.createElement("div");
        list.setAttribute("class", "list");
        document.getElementById("nul-3").append(list);
        const boxListItems = document.createElement("div");
        boxListItems.setAttribute("class", "list-items");
        list.append(boxListItems);


        const checkbox = document.createElement("span");
        checkbox.setAttribute("class", "checkbox");
        boxListItems.append(checkbox);
        const icon0 = document.createElement("i");
        icon0.setAttribute("class", "fa-solid");
        checkbox.append(icon0);

        let turn0 = false;
        list.addEventListener("click", () => {
            if (turn0 === true) {
                turn0 = false;
                icon0.setAttribute("class", "fa-solid");
                checkbox.style.borderColor = "blue";
            } else {
                turn0 = true;
                icon0.setAttribute("class", "fa-solid fa-check");
                checkbox.style.borderColor = "#10BD36";
                checkbox.style.color = "#10BD36";
            }
        })

        const li1 = document.createElement("li");
        li1.setAttribute("class", "listId");
        boxListItems.append(li1);
        li1.innerHTML = input.value;
        input.value = "";

        const deleteTask = document.createElement("span");
        deleteTask.setAttribute("class", "deleteTask");
        boxListItems.append(deleteTask);
        const icon = document.createElement("i");
        icon.setAttribute("class", "fa-solid fa-rectangle-xmark");
        deleteTask.append(icon);

        deleteTask.addEventListener("click", () => {
            list.style.display = "none";
        })
    }
}

function other() {
    if (input.value === "") {
        alert("Please write your task...");
    } else {
        const list = document.createElement("div");
        list.setAttribute("class", "list");
        document.getElementById("nul-4").append(list);
        const boxListItems = document.createElement("div");
        boxListItems.setAttribute("class", "list-items");
        list.append(boxListItems);


        const checkbox = document.createElement("span");
        checkbox.setAttribute("class", "checkbox");
        boxListItems.append(checkbox);
        const icon0 = document.createElement("i");
        icon0.setAttribute("class", "fa-solid");
        checkbox.append(icon0);

        let turn0 = false;
        list.addEventListener("click", () => {
            if (turn0 === true) {
                turn0 = false;
                icon0.setAttribute("class", "fa-solid");
                checkbox.style.borderColor = "blue";
            } else {
                turn0 = true;
                icon0.setAttribute("class", "fa-solid fa-check");
                checkbox.style.borderColor = "#10BD36";
                checkbox.style.color = "#10BD36";
            }
        })

        const li1 = document.createElement("li");
        li1.setAttribute("class", "listId");
        boxListItems.append(li1);
        li1.innerHTML = input.value;
        input.value = "";

        const deleteTask = document.createElement("span");
        deleteTask.setAttribute("class", "deleteTask");
        boxListItems.append(deleteTask);
        const icon = document.createElement("i");
        icon.setAttribute("class", "fa-solid fa-rectangle-xmark");
        deleteTask.append(icon);

        deleteTask.addEventListener("click", () => {
            list.style.display = "none";
        })
    }
}
