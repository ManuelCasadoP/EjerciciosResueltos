function multiplicaPorDos(event){
    let campoResultado=document.querySelector("#campoResultado").value;
    campoResultado = campoResultado * 2;
    document.querySelector("#campoResultado").value = campoResultado;  

}
const botonPorDos = document.querySelector("#botonPorDos");

botonPorDos.addEventListener("click", multiplicaPorDos);