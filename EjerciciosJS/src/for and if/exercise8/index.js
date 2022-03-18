// Put your code here

for (let outer = 1; outer <= 9 ; outer++) {
    console.log("");
    console.log("Tabla de Multiplicar del ", outer);
    console.log("---------------------------");

    for (let inner = 0; inner <= 9; inner++ ){ 
        
        console.log(outer,"x", inner, "=" , outer*inner);
      //console.log(`Outer: ${outer}, Inner: ${inner}`);  
    }
}
