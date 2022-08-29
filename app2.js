/* El proyecto es para tomar reservas en un complejo de cabañas */

// Funciones

function saludo(){
    alert ("Hola" + " " + nombre); 
}

function seleccionCabana(){
    if (operacion === 1){
        costoCabanaSeleccionada += precioC1
        alert (cabana1 + "\n" + "El precio por día es:" +  "\n" + precioC1);
    }else if (operacion === 2){
        costoCabanaSeleccionada += precioC2
        alert (cabana2 + "\n" + "El precio por día es:" +  "\n" + precioC2);
    }else if (operacion === 3){
        costoCabanaSeleccionada += precioC3
        alert (cabana3 + "\n" + "El precio por día es:" +  "\n" + precioC3);
    } else {
            alert ("El valor ingresado no es correcto \n Volvamos a empezar")
            operacion = Number (prompt(`${nombre} "Las cabañas que se encuentran disponible en este momento son: \n ${nombreC1} \n ${nombreC2} \n ${nombreC3} \n Por favor ingrese el número de la cabaña que Usted desea reservar`));
            seleccionCabana(); 
        } 
}

function confirmacionCabana (){
    while (confirmacion === "n" || confirmacion === "N") {
        alert("volvamos a empezar");
        operacion = Number (prompt(`${nombre} "Las cabañas que se encuentran disponible en este momento son: \n ${nombreC1} \n ${nombreC2} \n ${nombreC3} \n Por favor ingrese el número de la cabaña que Usted desea reservar`));
        seleccionCabana(); 
        confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo")
    } if (confirmacion === "s" || confirmacion === "S") {
        alert("Ya casi terminamos")
    } else {
        alert("La opción elegida no es valida.\n Las opciones son:\n S para continuar, o N, para volver a elegir cabaña");
        confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo")
        confirmacionCabana()
    }
}

function reserva(){
    while(isNaN (huespedes) || isNaN (fecha)){
        alert ("Ingrese solo números")
        huespedes = Number(prompt("Ingrese la cantidad de personas en numeros, ejemplo: 2"));
        fecha = Number(prompt("Ingrese cuantos días se va a hospedar en numeros, ejemplo: 3"));
        resultado = huespedes * fecha * costoCabanaSeleccionada
    }  alert (`El valor total de su estadia es de: ${resultado}`);
}

function confirmacionHuespedes(){
    while (confirmacion === "n" || confirmacion === "N"){
        alert("vamos de nuevo");
        huespedes = Number(prompt("Ingrese la cantidad de personas"));
        fecha = Number(prompt("Ingrese cuantos días se va a hospedar"));
        resultado = huespedes * fecha * costoCabanaSeleccionada
        alert (`El valor total de su estadia es de: ${resultado}`)
        confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo")
    } if(confirmacion === "s" || confirmacion === "S"){
        alert ("Perfecto, vamos a tomar sus datos para la reserva")
    } else {
        alert("La opción elegida no es valida.\n Las opciones son:\n S para continuar, o N para volver a cargar los datos");
        confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo")
        confirmacionHuespedes()
    }
}

function confirmacionFinal(){
    while (confirmacion === "n" || confirmacion === "N"){
        alert("Le volveremos a pedir sus datos");
        apellido = prompt("ingrese su apellido");
        dni = prompt("ingrese su documento");
        tel = prompt("ingrese un telefono donde lo podamos contactar");
        mail = prompt("ingrese su mail");
        datos()
        confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo")
    } if(confirmacion === "s" || confirmacion === "S"){
        alert (`Perfecto, ${nombre} nos contactaremos a la brevedad para confirmar su pago`)
    } else {
        confirmacion = prompt("Solo podes ingresar S o N \n S para confirmar que todo esta bien \n N para volver a cargar tus datos")
        confirmacionFinal()
    }
}

function datos() {
    alert(`Corrobore si sus datos son correctos: \n Nombre: ${nombre} ${apellido} \n Documento: ${dni} \n Teléfono: ${tel} \n E-mail: ${mail}`); 
}

// Variables 
// Las variables las pense así, por si quiero en algún momento cambiar el nombre de las cabañas,los precios, o sus caracteristicas. 

let cabana1 = "Cabaña 1" + "\n" + "Esta cabaña cuenta con:" + "\n" + "Cama Queen, balcón con desayunador, Netflix";
let cabana2 = "Cabaña 2" + "\n" + "Esta cabaña cuenta con:" + "\n" + "Cama King, balcón con desayunador, Netflix";
let cabana3 = "Cabaña 3" + "\n" + "Esta cabaña cuenta con:" + "\n" + "Cama Queen, un sofa cama, balcón con desayunador, Netflix";
let nombreC1 = "1: Cabaña1";
let nombreC2 = "2: Cabaña2";
let nombreC3 = "3: Cabaña3";
let precioC1 = 1000;
let precioC2 = 2000;
let precioC3 = 2500;
let costoCabanaSeleccionada = "";

/* Programa */

let nombre = prompt("Bienvenido \n Usted ingresó al area de reservas de Domos. Ingrese su nombre");

saludo(nombre)

let operacion = Number (prompt(`${nombre} \n "Las cabañas que se encuentran disponibles en este momento son: \n ${nombreC1} \n ${nombreC2} \n ${nombreC3} \n Por favor ingrese el número de la cabaña que Usted desea reservar`));

seleccionCabana()

confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo")

confirmacionCabana()

let huespedes = Number(prompt("Ingrese la cantidad de personas"));
let fecha = Number(prompt("Ingrese cuantos días se va a hospedar"));
let resultado = huespedes * fecha * costoCabanaSeleccionada

reserva()

confirmacion = prompt("Ingrese S si esta de acuerdo o N si no lo esta")

confirmacionHuespedes()

let apellido = prompt("ingrese su apellido");
let dni = prompt("ingrese su documento");
let tel = prompt("ingrese un telefono donde lo podamos contactar");
let mail = prompt("ingrese su mail");

datos()

confirmacion = prompt("Ingrese S si sus datos son correctos o N si no lo son")

confirmacionFinal()