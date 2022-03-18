number = 0;

function plusone(number) {
    number = number + 1;
    return number;
}

/* para que funcione solo hace falta añadir 'console.log' para imprimir el resultado de la función plusone */ 
console.log('El valor de la variable "number" de dentro de la función es :',plusone(number));

console.log('El valor de la variable "number" de fuera de la función es :',number);