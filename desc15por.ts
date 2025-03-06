import  * as readlineSync from 'readline-sync';
let precioU=readlineSync.questionInt("Ingrese precio unitario");
let cantidad=readlineSync.questionInt("Ingrese cantidad");
let mes=readlineSync.questionInt("Ingrese mes");
let pagar:number;
if (mes=10){
     pagar=(precioU*cantidad)*0.85;}
else{
    pagar =precioU*cantidad
}    
console.log("debe pagar ",pagar);

