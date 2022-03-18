const numbers = [0,1,5,2,7,5,0,0,9,5,5,6];
let counter = 0;

// Put your code here
for (item of numbers){
    if (item===5){
        counter++
    }
}

console.log("El número 5 aparece en el array",counter, "veces");
