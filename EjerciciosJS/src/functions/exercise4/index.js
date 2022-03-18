const numbers = [11,12,13,14];

// Put your code here
function swap(idx1,idx2,array){
    //let temporal=null;
    //temporal=array[idx1];
    let temporal=array[idx1]
    array[idx1]=array[idx2];
    array[idx2]=temporal;
}

console.log("Array original:");
console.log(numbers);

console.log("------------------------");

console.log("Intercambiando posición 1º y 4º elemento del array.");
swap(0,3,numbers);
console.log(numbers);

console.log("------------------------");

console.log("Intercambiando posición 2º y 3º elemento del array.");
swap(1,2,numbers);
console.log(numbers);