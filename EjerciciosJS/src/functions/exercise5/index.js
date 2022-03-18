const numbers = [11,9,13,12]
const numbers1 = [11,15,2,8,35,42,5,6,85,9,112,32,13,74,19];

// Put your code here

function minorInRange(idx1,idx2,array){
    let numMenor=array[idx1];
    for(i=idx1; i<=idx2; i++){
        if ( array[i] < numMenor ){
            numMenor=array[i];
        }
        
    }
    return numMenor;
}


console.log("");
console.log("Este es el array de muestra", numbers);
console.log("");
console.log("El número menor entre los índices 0 y 3 es el :", minorInRange(0,3,numbers));
console.log("--------------------------------------------------")
console.log("");
console.log("El número menor entre los índices 2 y 3 es el :", minorInRange(2,3,numbers));
console.log("--------------------------------------------------")
console.log("");
console.log("El número menor entre los índices 1 y 3 es el :", minorInRange(1,3,numbers));
console.log("--------------------------------------------------")

console.log("");
console.log("Este es el array de muestra", numbers1);
console.log("");
console.log("El número menor entre los índices 0 y 3 es el :", minorInRange(0,3,numbers1));
console.log("--------------------------------------------------")
console.log("");
console.log("El número menor entre los índices 4 y 7 es el :", minorInRange(4,7,numbers1));
console.log("--------------------------------------------------")
console.log("");
console.log("El número menor entre los índices 8 y 11 es el :", minorInRange(8,11,numbers1));
console.log("--------------------------------------------------")
console.log("");
console.log("El número menor entre los índices 12 y 15 es el :", minorInRange(12,15,numbers1));
console.log("--------------------------------------------------")