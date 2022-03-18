/*
export function dataToHTMLList (array) {
    const HTMLElements = array.map(
        (item) => {
            const li = document.createElement("li");
            li.innerText = `Importe: ${item} puntos.`;
            return li;
        }
    )
    document.querySelector("#list").append(...HTMLElements);
}
*/
export function dataToHTMLList (array) {
    const HTMLElements = array.map(
        (item) => {
            const li = document.createElement("li");
            // Dos posibles soluciones a la misma línea...
            //li.innerText = `Dividimos ${item} entre 2. Resultado : ${item/2}`;
            li.innerText = "Dividimos "+ item + " entre 2. Resultado: " + item/2;
            return li;
        }
    )
    document.querySelector("#list").append(...HTMLElements);
}