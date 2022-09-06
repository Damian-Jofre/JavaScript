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
let contador = 0;

// Funciones

// Con respecto a esta primer función en el video que me mandaste la vez pasada me corregis algo, pero no lo entendí bien.
function saludo(){
    alert ("Hola" + " " + nombre); 
}


// Antes estaba usando if - else para cada cabaña, me pediste que usara un swicth. Además me dijiste que la función hacia demasiadas cosas y que la dividiera, o por lo menos eso entendí. Asi que eso intente hacer.
function seleccionCabana () {
    switch (operacion) {
        case "1":
            costoCabanaSeleccionada += precioC1;
            alert (cabana1 + "\n" + "El precio por día es:" +  "\n" + precioC1);
            break;
        case "2":
            costoCabanaSeleccionada += precioC2;
            alert (cabana2 + "\n" + "El precio por día es:" +  "\n" + precioC2);
            break;
        case "3":
            costoCabanaSeleccionada += precioC3;
            alert (cabana3 + "\n" + "El precio por día es:" +  "\n" + precioC3);
            break;
        default:
            corroboroCabana()
    }
}

function corroboroCabana (){
    alert ("El valor ingresado no es correcto \n Volvamos a empezar");
    operacion = prompt(`${nombre} "Las cabañas que se encuentran disponible en este momento son: \n ${nombreC1} \n ${nombreC2} \n ${nombreC3} \n Por favor ingrese el número de la cabaña que Usted desea reservar`);
    seleccionCabana(); 
}

function soloValoresAceptadosCabana (){
    alert("salvo que seas un gato que salto sobre el teclado, o tocas s para continuar, o tocas n, para volver a elegir cabaña");
    confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo");
    confirmacionCabana();
}

function confirmacionCabana (){
    while (confirmacion === "n" || confirmacion === "N" ) {
        alert("volvamos a empezar");
        operacion = prompt(`${nombre} "Las cabañas que se encuentran disponible en este momento son: \n ${nombreC1} \n ${nombreC2} \n ${nombreC3} \n Por favor ingrese el número de la cabaña que Usted desea reservar`);
        seleccionCabana(); 
        confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo");
    } if (confirmacion === "s" || confirmacion === "S") {
        alert("Ya casi terminamos");
    } else {
        soloValoresAceptadosCabana();
    }
}

function reserva (){
    cantidadPasajeros = prompt("Cuantas personas se van a alojar en numeros, ejemplo: 2");
    while (cantidadPasajeros.length == 0 || isNaN (cantidadPasajeros)) {
        alert ("Para continuar por favor ingrese el número de la cantidad de personas que se van a alojar, el minímo es: 1");
        cantidadPasajeros = prompt("Cuantas personas se van a alojar");
    };
    fecha = prompt("Ingrese cuantos días se va a hospedar en numeros, ejemplo: 3");
    while (fecha.length == 0 || isNaN (fecha)){
        alert ("Ingrese solo números");
        fecha = prompt("Ingrese cuantos días se va a hospedar en numeros, ejemplo: 3");
    };
    resultado = cantidadPasajeros * fecha * costoCabanaSeleccionada
    alert (`El valor total de su estadia es de: ${resultado}`);
}

function soloValoresAceptadosHuespedes (){
    alert("La opción elegida no es valida.\n Las opciones son:\n S para continuar, o N para volver a cargar los datos");
    confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo");
    confirmacionHuespedes();
}

function confirmacionHuespedes(){
    while (confirmacion === "n" || confirmacion === "N"){
        alert("vamos de nuevo");
        reserva();
        confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo");
    } if(confirmacion === "s" || confirmacion === "S"){
        alert ("Perfecto, vamos a tomar sus datos para la reserva");
    } else {
        soloValoresAceptadosHuespedes();
    }
}

function datosHuespedes() {
    do{
        contador++
        alert ("Vamos a ingresar los datos del" + " " + contador + " " + "pasajero");
        let nombre = prompt("Ingresar nombre");
        while (nombre.length == 0) {
            alert ("Para continuar por favor ingrese su nombre");
            nombre = prompt("Ingresar nombre");
        }
        let apellido = prompt("Ingresar apellido");
        while (apellido.length == 0) {
            alert ("Para continuar por favor ingrese su apellido");
            apellido = prompt("Ingresar apellido");
        }
        let dni = prompt("Ingresar dni"); 
        while (dni.length == 0 || isNaN (dni)) {
            alert ("Para continuar por favor ingrese su DNI, ingrese solo números. Ej: 23456789");
            dni = prompt("Ingresar dni");
        }
        let telefono = prompt("Ingresar telefono");
        while (telefono.length == 0 || isNaN (telefono)) {
            alert ("Para continuar por favor ingrese su telefono, sin guiones ni puntos. Ej. 1145842567");
            telefono = prompt("Ingresar telefono");
        }
        let mail = prompt("Ingresar mail");
        while (mail.length == 0) {
            alert ("Para continuar por favor ingrese su mail");
            mail = prompt("Ingresar mail");
        }
        datosReserva.push(new datosPasajeros(contador, nombre, apellido, dni, telefono, mail));
    } while (cantidadPasajeros != contador);
console.log (datosReserva);
}

function soloValoresAceptadosFinal(){
    contador = 0;
    confirmacion = prompt("Solo podes ingresar S o N \n S para confirmar que todo esta bien \n N para volver a cargar tus datos");
    confirmacionFinal();
}

function confirmacionFinal(){
    while (confirmacion === "n" || confirmacion === "N"){
        contador = 0;
        datosHuespedes()
        confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo");
    } if(confirmacion === "s" || confirmacion === "S"){
        alert (`Perfecto, ${nombre} nos contactaremos a la brevedad para confirmar su pago`);
    } else {
        soloValoresAceptadosFinal();
    }
}

function mostrarDatosHuespedes(){
    datosReserva.forEach((datosPasajeros) => {
        alert (`Corrobore si los datos de ${datosPasajeros.nombre} son correctos \nApellido:${datosPasajeros.apellido} \nDNI:${datosPasajeros.dni} \nTelefono:${datosPasajeros.telefono} \nMail:${datosPasajeros.mail}`)
        }
    )
}
 

// Objetos

class datosPasajeros {
    constructor(contador, nombre, apellido, dni, telefono, mail)  { 
        this.contador = parseInt(contador)
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.dni = parseInt(dni);
        this.telefono = parseInt(telefono);
        this.mail = mail;
    }
}

// Arrays

const datosReserva = [];

/* Programa */

let nombre = prompt("Bienvenido \n Usted ingresó al area de reservas de Domos. Ingrese su nombre");

saludo(nombre)

let operacion = prompt(`${nombre} \n "Las cabañas que se encuentran disponibles en este momento son: \n ${nombreC1} \n ${nombreC2} \n ${nombreC3} \n Por favor ingrese el número de la cabaña que Usted desea reservar`);

seleccionCabana()

confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo");

confirmacionCabana()

reserva()

confirmacion = prompt("Ingrese S si esta de acuerdo o N si no lo esta");

confirmacionHuespedes()

datosHuespedes()

mostrarDatosHuespedes();

confirmacion = prompt("Ingrese S si sus datos son correctos o N si no lo son");

confirmacionFinal()