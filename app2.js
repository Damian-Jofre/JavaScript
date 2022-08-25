/* El proyecto es para tomar reservas de unas cabañas */

//Estas variables son todas fijas pero si les pongo const, no me funcionan

let cabana1 = "Cabaña 1 /n Esta cabaña cuenta con: Cama Queen, balcón con desayunador, Netflix";
let cabana2 = "Cabaña 2 /n Esta cabaña cuenta con: Cama King, balcón con desayunador, Netflix";
let cabana3 = "Cabaña 3 /n Esta cabaña cuenta con: Cama Queen, un sofca cama, balcón con desayunador, Netflix";
let nombreC1 = "\n" + "1: Cabaña1" +"\n";
let nombreC2 = "2: Cabaña2" +"\n";
let nombreC3 = "3: Cabaña3" +"\n";
let precioC1 = 1000;
let precioC2 = 2000;
let precioC3 = 2500;
let costoCabanaSeleccionada = ""

let nombre = prompt("Bienvenido, Usted ingresó al area de reservas de Domos. Ingrese su nombre") +"\n";
alert ("Hola" + " " + nombre) 

let operacion = prompt(`${nombre} "Las cabañas que se encuentran disponible en este momento son: ${nombreC1} ${nombreC2} ${nombreC3} Por favor ingrese el número de la cabaña que Usted desea reservar`);
 
function cabanaSeleccionada (cabana1, cabana2, cabana3, operacion) {
    switch (operacion) {
        case "1":
            costoCabanaSeleccionada += precioC1
            return cabana1 + "\n" + "El precio por día es:" +  "\n" + precioC1;
            break;
        case "2":
            costoCabanaSeleccionada += precioC2
            return cabana2 + "\n" + "El precio por día es:" +  "\n" + precioC2;
            break;
        case "3":
            costoCabanaSeleccionada += precioC3
            return cabana3 + "\n" + "El precio por día es:" +  "\n" + precioC3;
            break;
        default:
            return "El número que ingreso no se encuentra disponible";
            break;
    }
}
alert(cabanaSeleccionada(cabana1, cabana2, cabana3, operacion)) 

let confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo")

while (confirmacion === "n" || confirmacion === "N") {
    alert("volvamos a empezar");
    operacion = prompt(`${nombre} "Las cabañas que se encuentran disponible en este momento son: ${nombreC1} ${nombreC2} ${nombreC3} Por favor ingrese el número de la cabaña que Usted desea reservar`);
    alert(cabanaSeleccionada(cabana1, cabana2, cabana3, operacion)); 
    confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo")
} if (confirmacion === "s" || confirmacion === "S") {
    alert("Ya casi terminamos")
}

// Acá la idea es pedir cantidad de personas y dias y poder delvover por alert el total, pero no se como llamar, o donde alojar la variable con el precio de la cabaña que eligieron. Lo solucioné agregando una variable costoCabanaSeleccionada en el switch, en el que eligen la cabaña y lo use para multiplicar, por huespedes y fecha, en una variable resultado. 

let huespedes = Number(prompt("Ingrese la cantidad de personas"));
let fecha = Number(prompt("Ingrese cuantos días se va a hospedar"));
resultado = huespedes * fecha * costoCabanaSeleccionada
alert ("El valor total de su estadia es de:" + " " + resultado);

confirmacion = prompt("Ingrese S si esta de acuerdo o N si no lo esta")

while (confirmacion === "n" || confirmacion === "N") {
    alert("vamos de nuevo");
    let huespedes = Number(prompt("Ingrese la cantidad de personas"));
    let fecha = Number(prompt("Ingrese cuantos días se va a hospedar"));
    confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo")
} if (confirmacion === "s" || confirmacion === "S") {
    alert ("Perfecto, vamos a tomar sus datos para la reserva");
}


let apellido = prompt("ingrese su apellido") +"\n";
let dni = prompt("ingrese su documento") +"\n";
let tel = prompt("ingrese un telefono donde lo podamos contactar") +"\n";
let mail = prompt("ingrese su mail") +"\n";
datos (apellido, dni, tel, mail); 

function datos(apellido, dni, tel, mail) {
    alert(`Corrobore si sus datos son correctos: \n Nombre: ${nombre} Apellido: ${apellido} Documento: ${dni} Teléfono: ${tel} E-mail: ${mail}`);
}

confirmacion = prompt("Ingrese S si sus datos son correctos o N si no lo son")

while (confirmacion === "n" || confirmacion === "N") {
    alert("Le pediremos de nuevo sus datos");
    let apellido = prompt("ingrese su apellido") +"\n";
    let dni = prompt("ingrese su documento") +"\n";
    let tel = prompt("ingrese un telefono donde lo podamos contactar") +"\n";
    let mail = prompt("ingrese su mail") +"\n";
    datos (apellido, dni, tel, mail); 
    confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo")
} if (confirmacion === "s" || confirmacion === "S") {
    alert (`Perfecto, ${nombre} nos contactaremos a la brevedad para confirmar su pago`)
}