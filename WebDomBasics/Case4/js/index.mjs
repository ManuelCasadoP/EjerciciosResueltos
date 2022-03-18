function toggleShowCompletedHandler (event) {
    const completedElements = document.querySelectorAll(".completed");
    for ( let item of completedElements ) {
        item.classList.toggle("hidden");
    }
}

const botonMostrarOcultar = document.querySelector("#triggerButton");

botonMostrarOcultar.addEventListener("click", toggleShowCompletedHandler);