let cabana1 = "Cabaña 1" + "\n" + "Esta cabaña cuenta con:" + "\n" + "Cama Queen, balcón con desayunador, Netflix";
let cabana2 = "Cabaña 2" + "\n" + "Esta cabaña cuenta con:" + "\n" + "Cama King, balcón con desayunador, Netflix";
let cabana3 = "Cabaña 3" + "\n" + "Esta cabaña cuenta con:" + "\n" + "Cama Queen, un sofa cama, balcón con desayunador, Netflix";
let nombreC1 = "1: Cabaña1";
let nombreC2 = "2: Cabaña2";
let nombreC3 = "3: Cabaña3";
let contador = 0;

// Arrays

const datosCabanas = [
    {
    nombre: "Cabaña1",
    precio: 2000,
    promocion: true
    },
    {
    nombre: "Cabaña2",
    precio: 3000,
    promocion: false
    },
    {
    nombre: "Cabaña3",
    precio: 4000,
    promocion: true
    },
];

const actividades = [
    {
        nombre: "Yoga",
        precio: 1500,
    },
    {
        nombre: "Yoga Nidra",
        precio: 2000,
        promocion: true
    },
    {
        nombre: "Meditación",
        precio: 1500,
    }
];

const infoHuespedes = [
];

// Funciones

function ingreso(){
    infoHuespedes.nombre = prompt("Ingrese su nombre")
}

function saludo(){
    opcion = prompt (`Bienvenido ${infoHuespedes.nombre} \nQue quiere realizar \n1-Realizar Reservas \n2-Ver Actividades \n3-Ver Promociones \n4-Salir \nTenga en cuenta que solo puede ingresar números del 1 al 4, para seguir adelante o terminar`)
}

// Bucle 

function bucle (){
    if (opcion == "1"){
        cabanas();
        tempo();
        operacion = prompt(`${infoHuespedes.nombre} \n "Las cabañas que se encuentran disponibles en este momento son: \n ${nombreC1} \n ${nombreC2} \n ${nombreC3} \n Por favor ingrese el número de la cabaña que Usted desea reservar`);
        seleccionCabana();
        confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo");
        confirmacionCabana();
        reserva();
        confirmacion = prompt("Ingrese S si esta de acuerdo o N si no lo esta");
        confirmacionHuespedes();
        datosHuespedes();
        confirmacion = prompt("Ingrese S si sus datos son correctos o N si no lo son");
        confirmacionFinal();
    }
    if (opcion == "2"){
        alert ("Actividades");
        saludosActividades();
    }
    if (opcion == "3"){
        alert ("Acá puede ver nuestras ofertas y promociones")
        ofertas ()
        buscar();
    }
    opcion = prompt (`${infoHuespedes.nombre} \nQuiere consultar algo mas: \n1-Realizar Reservas \n2-Ver Actividades \n3-Ver Promociones \n4-Salir \nTenga en cuenta que solo puede ingresar números del 1 al 4, para seguir adelante o terminar`)
}

// Eleccion Reserva

function cabanas(){
    temporada = prompt ("Nuestros precios depende de la tempordad, elija una opción: \n1-temporada alta \n2-temporada baja")
    while (isNaN (temporada) || temporada > 2 || temporada == 0){
        temporada = prompt ("La opción no es válida elija de nuevo: \n1-temporada alta \n2-temporada baja")
    }
}

function temporadaAlta(){
    datosCabanas.forEach((e) =>{
        alta = e.precio * 2
        console.log(e.nombre + " " + alta)
    }) 
}    


function tempo(){
    if(temporada == "1"){
        alert ("Alta")
        temporadaAlta();
    } 
    if(temporada == "2"){
        alert ("Baja")
        datosCabanas.forEach(e=> {
            console.log(e.nombre + " " + e.precio)
        })
    }    
}

function seleccionCabana () {
    switch (operacion) {
        case "1":
            alert (cabana1);
            break;
        case "2":
            alert (cabana2);
            break;
        case "3":
            alert (cabana3);
            break;
        default:
            corroboroCabana();
    }
}

function corroboroCabana (){
    alert ("El valor ingresado no es correcto \nVolvamos a empezar");
    operacion = prompt(`${infoHuespedes.nombre} \n Las cabañas que se encuentran disponibles en este momento son: \n ${nombreC1} \n ${nombreC2} \n ${nombreC3} \n Por favor ingrese el número de la cabaña que Usted desea reservar`);
    seleccionCabana(); 
}

function confirmacionCabana (){
    while (confirmacion === "n" || confirmacion === "N" ) {
        alert("volvamos a empezar");
        operacion = prompt(`${infoHuespedes.nombre} \n Las cabañas que se encuentran disponibles en este momento son: \n ${nombreC1} \n ${nombreC2} \n ${nombreC3} \n Por favor ingrese el número de la cabaña que Usted desea reservar`);
        seleccionCabana(); 
        confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo");
    } if (confirmacion === "s" || confirmacion === "S") {
        alert("Ya casi terminamos");
    } else {
        soloValoresAceptadosCabana();
    }
}

function soloValoresAceptadosCabana (){
    alert("salvo que seas un gato que salto sobre el teclado, o tocas s para continuar, o tocas n, para volver a elegir cabaña");
    confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo");
    confirmacionCabana();
}

function reserva (){
    cantidadPasajeros = prompt("Cuantas personas se van a alojar en numeros, ejemplo: 2");
    while (cantidadPasajeros.length == 0 || isNaN (cantidadPasajeros) || cantidadPasajeros == 0) {
        alert ("Para continuar por favor ingrese el número de la cantidad de personas que se van a alojar, el minímo es: 1");
        cantidadPasajeros = prompt("Cuantas personas se van a alojar");
    };
    fecha = prompt("Ingrese cuantos días se va a hospedar en numeros, ejemplo: 3");
    while (fecha.length == 0 || isNaN (fecha) || fecha < 3){
        alert ("Para continuar por favor ingrese el número de la cantidad de días que se van a alojar, el minímo es: 3");
        fecha = prompt("Ingrese cuantos días se va a hospedar en numeros, ejemplo: 3");
    };
    alert ("La cantidad de Huespedes es de:" + " " + cantidadPasajeros + "\nLa cantidad de días que se van a alojar es de:" + " " + fecha)
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
        infoHuespedes.push(contador, nombre, apellido, dni, telefono, mail);
    } while (cantidadPasajeros != contador);
console.log (infoHuespedes);
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
        alert (`${infoHuespedes.nombre} \nPronto nos contactaremos con Ud. para confirmar su reserva.`)
    } else {
        soloValoresAceptadosFinal();
    }
}

// Seleccion Promociones

function ofertasYActividades (){
    alert ("A continuación podra ver las ofertas y promociones del mes")
}

function ofertas (){
    resultado = datosCabanas.filter((e) => e.precio < 3000); 
    console.log("Las ofertas del mes son:")
    console.log (resultado)
}

function buscar (){
    let filtrado = datosCabanas.find((e)=>e.promocion === true);
    filtrado = actividades.find((e)=>e.promocion === true);
    console.log(filtrado) 
}

// Actividades

function saludosActividades () {
    alert ("En este area podra ver la lista de nuestras actividades")
    console.log(actividades)
} 

// Salir

function salir (){
    alert (`${infoHuespedes.nombre}, gracias por su visita. \nLo esperamos pronto`)
}

// Programa

ingreso();
saludo();

while (opcion !=="4"){
    bucle();
}

salir();
