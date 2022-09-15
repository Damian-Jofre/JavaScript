// ARRAYS

const datosCabanas = [
    {
        id: 1,
        nombre: "Cabaña1",
        precio: 2000,
        caracteristicas: "Netflix, Jacuzzi",
        imagen: "./img/domo1.png"
    },
    {
        id: 2,
        nombre: "Cabaña2",
        precio: 3000,
        caracteristicas: "Netflix, Jacuzzi",
        promocion: false,
        imagen: "./img/domo2.png"
    },
    {
        id: 3,
        nombre: "Cabaña3",
        precio: 4000,
        caracteristicas: "Netflix, Jacuzzi",
        promocion: true,
        imagen: "./img/domo3.png"
    },
];  

const actividades = [
    {
        id: 1,
        nombre: "ACT1",
        precio: 1000,
        checkbox: false,
    },
    {
        id: 2,
        nombre: "ACT2",
        precio: 1500,
        checkbox: false,
    },
    {
        id: 3,
        nombre: "ACT3",
        precio: 2000,
        checkbox: false,
    },
    {
        id: 4,
        nombre: "ACT4",
        precio: 3000,
        checkbox: false,
    },
];  

const carrito = [];

/* const ingreso = () =>{
    let main = document.querySelector("#main")
    let bienvenido = document.createElement("section")
    bienvenido.className = ("prueba2") 
    bienvenido.innerHTML = `<div>
                            <h1>Usted está por ingresar al aera de reservas</h1>
                        </div>
                        <div>
                            <button id="btEntrar">ENTRAR</button>
                        </div>`
    main.appendChild(bienvenido)
}

ingreso(); */

/* let boton = document.querySelector("#btEntrar");
boton.addEventListener("click", respuestaEntrar);  */

/* function respuestaEntrar(){
    let prueba3 = document.querySelector("#main");
    prueba3.innerHTML = `<section class="reservas">
                        <h1>RESERVAS</h1>
                        </section>
                        <div class="titulo">
                            <h3>NUESTROS DOMOS</h3>
                        </div>
                        <section id="domos" class="section__domos">
                            
                        </section>
                        <section class="section__form">
                            <h3>RESERVAS</h3>
                            <div class="huespedesDias">
                                <input type="number" placeholder="Huespedes">
                                <input type="number" placeholder="dias">
                            </div>
                            <button id="confirmarDias">CONFIRMAR</button>
                            <div class="datos">
                                <h3>Datos Huespedes</h3>
                                <form id="miForm" class="form">
                                <input id="nombre" name="nombre" type="text" placeholder="Nombre">
                                <input id="apellido" name="apellido" type="text" placeholder="Apellido">
                                <input id="dni" name="dni" type="number" placeholder="DNI">
                                <input id="tel" name="tel" type="tel" placeholder="Teléfono">
                                <input id="mail" name="mail" type="email" placeholder="Mail">
                                </form>
                            </div>
                            <div>
                                <button id="confirmarReserva" class="confirmarReserva "type="submit">Confirmar Reserva</button>
                            </div>
                        </section>
                        <section class="section__promos">
                            <h3>PROMOCIONES</h3>
                            <div id="promos">

                            </div>
                        </section>
                        <section class="section__total">
                            <h3>TOTAL</h3>
                            <div id="total">

                            </div>
                        </section>`     
             
}  */

// DOMOS

const dibujarDomos = ()=>{
    let contenedor = document.querySelector
    ("#domos");
    datosCabanas.forEach((producto)=> {
        let cabana = document.createElement("div");
        cabana.classList.add("domitos");
        cabana.innerHTML= `<img class="imagenesCabanas" src="${producto.imagen}" alt="cabañas">
        <div>
            <h5>${producto.nombre}</h5>
            <p>${producto.caracteristicas}</p>
            <p>Precio: ${producto.precio}</p>
            <button id="${producto.id}">Seleccionar</button>
        </div>`;
        contenedor.appendChild(cabana)
    });
    sumarCabana()
}

// Aca capturo el precio de la cabaña que fue seleccionada y lo mando a un array carrito, la idea es ir haciendo eso con todos los valores que vaya seleccionando el usuario, la duda que tengo es si esta bien identificado así como lo hice, para despues poder llamar cada valor por separado. Otra cosa que me gustaría hacer es que no puedan seleccionar mas de una cabaña a la vez.


const sumarCabana = () =>{
    datosCabanas.forEach((p) => {
        document.getElementById(`${p.id}`).addEventListener(`click`, () => {
            let precioCabana = (p.precio)
            console.log(precioCabana)
            carrito.push("Valor Cabaña:",precioCabana)
            console.log(carrito)
        })
    })
}

dibujarDomos();

// PROMOCIONES

const dibujarPromos = ()=>{
    let contenedor = document.querySelector
    ("#promos");
    actividades.forEach((p)=> {
        let actividad = document.createElement("div");
        actividad.classList.add("act");
        actividad.innerHTML= `<label class="form-check-label"               for="check1">${p.nombre}
                    </label>
                    <input class="form-check-input" type="checkbox" value="" id="${p.id}" input="check">`;
        contenedor.appendChild(actividad)
    });
} 

dibujarPromos ();

/* FORMULARIOs */

let formData;

// FORMULARIO DATOS HUESPEDES

document.addEventListener(`DOMContentLoaded`, () => {
    document.getElementById(`miForm`).addEventListener(`submit`, formControl)
})

function formControl(event) {
    event.preventDefault()
    let formulario = event.target;
    formData = new FormData(formulario);
    //formData Entries
    for (let keyValue of formData.entries()) {
        console.log(`${keyValue[0]}, ${keyValue[1]}`)
    }
    //formData get()
    console.log(`Los datos ingresados fueron \n ${formData.get(`nombre`)},  \n ${formData.get(`apellido`)},`)
    
    document.querySelector("#promos").style.opacity = "100%" 
    document.querySelector("#mas").style.opacity = "100%" 
} 

// FORMULARIO FECHAS

document.addEventListener(`DOMContentLoaded`, () => {
    document.getElementById(`formFecha`).addEventListener(`submit`, formControlFecha)
})

function formControlFecha(event) {
    event.preventDefault()
    let formularioFecha = event.target;
    console.log(formularioFecha)
    formData = new FormData(formularioFecha);
    //formData get()
    console.log(`${formData.get(`huespedes`)},  \n ${formData.get(`dias`)},`)

}

// ¿como hago para capturar el nombre del formulario y usarlo en otro lado?, por ejemplo en la función subtotal.

function subtotal(nombre, dias, usuario){
    let huespedesFinal = document.querySelector("#total");
    let subtotal = document.createElement("p")
    subtotal.innerHTML = `gracias ${nombre}, reservaste para ${usuario} huespedes por ${dias} dias`
    huespedesFinal.appendChild(subtotal);
} 

// Acá abajo quise hacer lo mismo que hice arriba con el precio de las cabañas, nada mas que puse checkbox en lugar de botones pero no logro que funcione


const actividadesCheck = () =>{
    actividades.forEach((p) => {
        console.log(p.id)
        document.getElementById(`${p.id}`).addEventListener(`change`, () => {
            alert ("hola")
        })
    })
}

actividadesCheck();

const total = ()=>{
    carrito.forEach((p)=> {

    })
}