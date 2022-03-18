const numbers = [22,1,4,3,5,7,8,9,12,11];
const odd = [];
const even = [];

for (let item of numbers) {
    console.log("item:", item);

    // Put your code here
    if (item%2===0) {
        even.push(item);
        console.log("Añadiendo a array Par");
        console.log("---------------------");
    } else {
        odd.push(item);
        console.log("Añadiendo a array Impar");
        console.log("---------------------");
    }
}

console.log("odd:", odd);
console.log("even:", even);
