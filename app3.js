// Como me pediste, saqué todas las variables que estaban acá y las metí en un array. Me falta ordenar el código como me sugeris. Voy a intentar hacer ahora con DOM, para la proxima entrega.

// Arrays

const datosCabanas = [
    {
    nombre: "Cabaña1",
    precio: 2000,
    promocion: true,

    },
    {
    nombre: "Cabaña2",
    precio: 3000,
    promocion: false,
    },
    {
    nombre: "Cabaña3",
    precio: 4000,
    promocion: true,
    },
];

const actividades = [
    {
        nombre: "Yoga",
        precio: 1500,
        promocion: false,
    },
    {
        nombre: "Yoga Nidra",
        precio: 2000,
        promocion: true,
    },
    {
        nombre: "Meditación",
        precio: 1500,
        promocion: false,
    }
];

const infoHuespedes = [];

const promociones = [];

// Funciones

// Saludo y Opciones de ingreso

function ingreso(nombre){
    nombre = prompt("Ingrese su nombre")
    infoHuespedes.push(nombre)
}

function saludo(){
    opcion = prompt (`Bienvenido ${infoHuespedes[0]} \nQue quiere realizar \n1-Realizar Reservas \n2-Ver Actividades \n3-Ver Promociones \n4-Salir \nTenga en cuenta que solo puede ingresar números del 1 al 4, para seguir adelante o terminar`)
}

// Eleccón Reserva

function seleccionTemporada(){
    temporada = prompt ("Nuestros precios depende de la tempordad, elija una opción: \n1-temporada alta \n2-temporada baja")
    while (isNaN (temporada) || temporada > 2 || temporada == 0){
        temporada = prompt ("La opción no es válida elija de nuevo: \n1-temporada alta \n2-temporada baja")
    }
}


function tempo(precioAlta){
    if(temporada == "1"){
        for (var i =0; i < datosCabanas.length; i++){
            precioAlta = datosCabanas[i].precio * 2 
            datosCabanas[i].precio = precioAlta
        }
    }  
}

function seleccionCabana () {
    switch (operacion) {
        case "1":
            alert (`Cabaña: ${datosCabanas[0].nombre}  Precio: ${datosCabanas[0].precio}`);
            total = datosCabanas[0].precio
            break;
        case "2":
            alert (`Cabaña: ${datosCabanas[1].nombre}  Precio: ${datosCabanas[1].precio}`);
            total = datosCabanas[1].precio
            break;
        case "3":
            alert (`Cabaña: ${datosCabanas[2].nombre}  Precio: ${datosCabanas[2].precio}`);
            total = datosCabanas[2].precio
            break;
        default:
            corroboroCabana();
    }
}

function corroboroCabana (){
    alert ("El valor ingresado no es correcto \nVolvamos a empezar");
    operacion = prompt(`${infoHuespedes[0]} \nLas cabañas que se encuentran disponibles en este momento son: \n1-${datosCabanas[0].nombre} Precio: ${datosCabanas[0].precio} \n2-${datosCabanas[1].nombre} Precio: ${datosCabanas[1].precio} \n3-${datosCabanas[2].nombre} Precio: ${datosCabanas[2].precio} \nPor favor ingrese el número de la cabaña que Usted desea reservar`);
    seleccionCabana(); 
}

function confirmacionCabana (){
    while (confirmacion === "n" || confirmacion === "N" ) {
        alert("volvamos a empezar");
        operacion = prompt(`${infoHuespedes[0]} \nLas cabañas que se encuentran disponibles en este momento son: \n1-${datosCabanas[0].nombre} Precio: ${datosCabanas[0].precio} \n2-${datosCabanas[1].nombre} Precio: ${datosCabanas[1].precio} \n3-${datosCabanas[2].nombre} Precio: ${datosCabanas[2].precio} \nPor favor ingrese el número de la cabaña que Usted desea reservar`);
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
    aPagar = total * cantidadPasajeros * fecha;
    alert ("La cantidad de Huespedes es de:" + " " + cantidadPasajeros + "\nLa cantidad de días que se van a alojar es de:" + " " + fecha + "\nEl monto total de su reserva es de:" + " " + aPagar)
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

function cargaDatosHuespedes() {
    contador = 0;
    do{
        contador++
        alert ("Vamos a ingresar los datos del" + " " + contador + " " + "pasajero");
        nombre = prompt("Ingresar nombre");
        while (nombre.length == 0) {
            alert ("Para continuar por favor ingrese su nombre");
            nombre = prompt("Ingresar nombre");
        }
        apellido = prompt("Ingresar apellido");
        while (apellido.length == 0) {
            alert ("Para continuar por favor ingrese su apellido");
            apellido = prompt("Ingresar apellido");
        }
        dni = prompt("Ingresar dni"); 
        while (dni.length == 0 || isNaN (dni)) {
            alert ("Para continuar por favor ingrese su DNI, ingrese solo números. Ej: 23456789");
            dni = prompt("Ingresar dni");
        }
        telefono = prompt("Ingresar telefono");
        while (telefono.length == 0 || isNaN (telefono)) {
            alert ("Para continuar por favor ingrese su telefono, sin guiones ni puntos. Ej. 1145842567");
            telefono = prompt("Ingresar telefono");
        }
        mail = prompt("Ingresar mail");
        while (mail.length == 0) {
            alert ("Para continuar por favor ingrese su mail");
            mail = prompt("Ingresar mail");
        }
        infoHuespedes.push({contador, nombre, apellido, dni, telefono, mail});
    } while (cantidadPasajeros != contador);
}

function soloValoresAceptadosFinal(){
    contador = 0;
    confirmacion = prompt("Solo podes ingresar S o N \n S para confirmar que todo esta bien \n N para volver a cargar tus datos");
    confirmacionFinal();
}

function confirmacionFinal(){
    while (confirmacion === "n" || confirmacion === "N"){
        datosHuespedes()
        confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo");
    } if(confirmacion === "s" || confirmacion === "S"){
        alert (`${infoHuespedes[0]} \nPronto nos contactaremos con Ud. para confirmar su reserva.`)
    } else {
        soloValoresAceptadosFinal();
    }
}

function reseteo (temporada){
    infoHuespedes.splice(1, infoHuespedes.length);
    if(temporada == "1"){
        for (var i =0; i < datosCabanas.length; i++){
            precioAlta = datosCabanas[i].precio / 2 
            datosCabanas[i].precio = precioAlta
        }
    }
}  

// PROMOCIONES Y OFERTAS

function ofertasYActividades (){
    ofertaPromo = prompt ("A continuación podra ver las ofertas y promociones del mes. \nIngrese \n1-para Ofertas \n2-para Promociones \n3-para volver al menú anterior")
}

function ofertas (){
    alert ("Ofertas")
    precioOferta = (datosCabanas.filter((e)=> e.precio < 3000));
    for (var i =0; i < precioOferta.length; i++){
        alert (`Nuestra cabaña: ${datosCabanas[i].nombre} se encuentra en oferta a un precio de: ${precioOferta[i].precio} por noche`)
    }
}

function buscar (){
    alert ("Promociones")
    for (var i =0; i < promociones.length; i++){
        alert (`${infoHuespedes[0]} alquilando cualquiera de nuetras cabañas por mas de 3 noches accedé a un descuento del 50% en clases de: ${actividades[i].nombre} con un precio final de ${precioA} por clase.`);
    }
} 

function buscaPromo (){
    promoA = (actividades.find((e)=>e.promocion === true));
    promociones.push(promoA)
    for (var i =0; i < promociones.length; i++){
        precioA = promociones[i].precio / 2
    }
}

// ACTIVIDADES

function saludosActividades () {
    alert ("En este area podra ver la lista de nuestras actividades (por consola)")
    console.log(actividades)
} 
// Salir

function salir (){
    alert (`${infoHuespedes[0]}, gracias por su visita. \nLo esperamos pronto`)
}

// Esta funcion solo hacen cálculos para el resto del código
buscaPromo();

// Programa

ingreso();
saludo();

while (opcion !=="4"){
    if (opcion == "1"){
        // COMIENZA RESERVA
        seleccionTemporada();
        tempo();
        operacion = prompt(`${infoHuespedes[0]} \n Las cabañas que se encuentran disponibles en este momento son: \n1-${datosCabanas[0].nombre} Precio: ${datosCabanas[0].precio} \n2-${datosCabanas[1].nombre} Precio: ${datosCabanas[1].precio} \n3-${datosCabanas[2].nombre} Precio: ${datosCabanas[2].precio} \nPor favor ingrese el número de la cabaña que Usted desea reservar`);
        seleccionCabana();
        confirmacion = prompt("Ingrese S para aceptar o N para elegir de nuevo");
        confirmacionCabana();
        reserva();
        confirmacion = prompt("Ingrese S si esta de acuerdo o N si no lo esta");
        confirmacionHuespedes();
        cargaDatosHuespedes();
        for (var i =1; i < infoHuespedes.length; i++){
            alert (`Nombre: ${infoHuespedes[i].nombre} \nApellido: ${infoHuespedes[i].apellido} \nTélefono: ${infoHuespedes[i].telefono} \nDNI: ${infoHuespedes[i].dni} \nMail: ${infoHuespedes[i].mail}`);
        }
        confirmacion = prompt("Ingrese S si sus datos son correctos o N si no lo son");
        confirmacionFinal();
        reseteo (temporada);
    }
    if (opcion == "2"){
        // ACTIVIDADES
        alert ("Actividades");
        saludosActividades();
    }
    if (opcion == "3"){
        // PROMOCIONES Y OFERTAS
            ofertasYActividades ();
            while (ofertaPromo !=="3"){
                if (ofertaPromo == "1"){
                    ofertas ();
                    break;
                }
                if (ofertaPromo == "2"){
                    buscar();
                    break;
                }
                else {
                    ofertaPromo = prompt ("\nPor favor ingrese \n1-para Ofertas \n2-para Promociones \n3-para volver al menú anterior")
                }
            }
    }
    opcion = prompt (`${infoHuespedes[0]} \nQuiere consultar algo mas: \n1-Realizar Reservas \n2-Ver Actividades \n3-Ver Promociones \n4-Salir \nTenga en cuenta que solo puede ingresar números del 1 al 4, para seguir adelante o terminar`)
    
}

salir();
