let numbers = [0,1,2,3,4,5,6,7,8,9]

for ( let left of numbers) {
    if (left===0){left=1}; 
        console.log("");
        console.log("Tabla de Multiplicar del", left);
        console.log("--------------------------");

    for (let right of numbers) {
        // Put your code here
        console.log(left, "x", right,"=", left*right);
    }
}

