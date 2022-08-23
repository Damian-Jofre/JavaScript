/*  Ejemplo 1: Pedir un número que le sume otro y muestre el resultado

let numero = prompt("Ingrese un número")

do {
    numero ++;
    console.log(numero);
} while (numero<10); */

/* Ejemplo 2: Pedir un texto mediante prompt concatenar un valor en cada repeticion, realizando una salida por cada resultado

let texto = prompt("Ingrese texto, para finalizar ingrese ESC")

while(texto != "ESC"){
    console.log(texto)
    texto = prompt("Ingrese texto, para finalizar ingrese ESC");
} */


/* Ejemplo 3: Pedir un número por prompt, repetir la salida del mensaje "Hola" la cantidad de veces ingresada.

let numero = Number(prompt("Ingrese un número"));
const hola = "HOLA!!!!!";

for(i=0;i<numero;i++){
   alert(hola)
    
} */