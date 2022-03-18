
// Put your code here

function powerage(operando,potencia=(1/2)){
    return Math.pow(operando,potencia);
}

function power(operando,potencia=(1/2)){
    return operando**potencia;
}

console.log("");
console.log(powerage(25));
console.log(powerage(8,1/3));
console.log(powerage(2,3));
console.log(powerage(5,2));

console.log("---------------------------------");

console.log(power(25));
console.log(power(8,1/3));
console.log(power(2,3));
console.log(power(5,2));


