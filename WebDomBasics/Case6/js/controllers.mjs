import { getTasks, setTasks } from "./models.mjs";

export function dataToHTMLList (array) {
    const HTMLElements = array.map(
        (item) => {
            const li = document.createElement("li");
            li.innerText = item.description;
            if (item.completed) li.classList.add("completed")
            return li;
        }
    )
    const htmlParent = document.querySelector("#taskList")
    htmlParent.innerHTML = "";
    htmlParent.append(...HTMLElements);
}

export function removeCompletedHandler (event) {
    let tasks = getTasks();
    tasks = tasks.filter(
        (item) => {
            return ! item.completed
        }
    )
    setTasks(tasks)
    dataToHTMLList(tasks)
}


const dropButton = document.querySelector("button");

dropButton.addEventListener("click",removeCompletedHandler);

// document.querySelector("button").addEventListener("click", removeCompletedHandler);

// const dropButton = document.getElementsByTagName("button");

// dropButton[0].addEventListener("click", removeCompletedHandler);

//const botonPrueba = Element.innerText("Drop completed");


/*
const dropButton = document.querySelectorAll("button");

const arrayButtons = Array.from(dropButton);

const button = arrayButtons.filter(
    (button) => button.innerText === "Drop completed"
);

console.log(button);

button[0].addEventListener("click", )
*/



