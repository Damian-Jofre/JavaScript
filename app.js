// Ejemplo 1: Pedir un número mediante prompt y sumarle otro número en cada repetición, realizando una salida por cada resultado. En este caso puse un maximo de 10, para que no se haga al infinito.

/* let numero = prompt("Ingrese un número")

do {
    numero ++;
    console.log(numero);
} while (numero<10);
 */

// Ejemplo 2: Pedir un texto mediante prompt, concatenar un valor en cada repeticion, realizando una salida por cada resultado, hasta que se ingresa "ESC"

/* let texto = prompt("Ingrese un texto. IMPORTANTE: para finalizar escriba ESC");
let resultado = " ";

while(texto != "ESC"){
    resultado += " ";
    resultado += texto;
    console.log(resultado);
    texto = prompt("Ingrese texto, para finalizar ingrese ESC");
}  */


// Ejemplo 3: Pedir un número por prompt, repetir la salida del mensaje "Hola" la cantidad de veces ingresada. (En este ejemplo no puede hacer que salga bien por consola, por eso usé alert)

/* let numero = Number(prompt("Ingrese un número"));
const hola = "HOLA!!!!!";

for(i=0;i<numero;i++){
   alert(hola) 
}  */