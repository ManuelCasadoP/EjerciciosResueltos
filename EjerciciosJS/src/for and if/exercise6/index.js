const mix = [undefined,22,"1",4,3,"5",7,NaN,8,"9","12",11,null];
let strings = [];
let numbers = [];

for (let item of mix) {
    
    // Put your code here

    if (typeof item === "string") {
        strings.push(item);
    } 
    
    if (typeof item === "number" && !isNaN(item)){
        numbers.push(item);    
    }
    
} 

console.log("Los Strings contenidos en el array son los siguientes :", strings);
console.log("Los números contenidos en el array son los siguientes :", numbers);
