const numbers = [11,9,13,12];
const numbers1 = [11,15,2,8,35,42,5,6,85,9,112,32,13,74,19];
const numbers2 = [12,13,9,11];

// Paste your functions here

function swap(idx1,idx2,array){
    let temporal=array[idx1]
    array[idx1]=array[idx2];
    array[idx2]=temporal;
}

function minorInRange(idx1,idx2,array){
    let idxMenor=idx1;
    for(i=idx1; i<=idx2; i++){
        if ( array[i] < array[idxMenor] ){
            idxMenor=i;
        }
    }
    return idxMenor;
}

// Put your code here

console.log(numbers);

function ordenarArray (array) {
    for(indice=0; indice < array.length-1; indice++){
        let indiceMenor = minorInRange(indice, array.length-1, array);
        if (indiceMenor > indice) {
            swap(indice, indiceMenor, array);
        }
    }
    
}

ordenarArray(numbers);

console.log(numbers);

ordenarArray(numbers1);

console.log(numbers1);

ordenarArray(numbers2);

console.log(numbers2);
