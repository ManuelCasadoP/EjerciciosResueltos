const numbers = [0,99,3,121,12,1,2];
let sum = 0;
let average = 0;

// Put your code here
for (let item of numbers) {
    sum = sum + item;
    average++;
}
console.log("La suma de elementos del array es :", sum)
console.log("Cantidad de elementos del array es :", average);
console.log("La media aritmética de elementos del array es :", sum/average);
