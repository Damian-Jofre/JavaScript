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
        id: "checkbox1",
        nombre: "ACT1",
        precio: 1000,
    },
    {
        id: "checkbox2",
        nombre: "ACT2",
        precio: 1500,
    },
    {
        id: "checkbox3",
        nombre: "ACT3",
        precio: 2000,
    },
    {
        id: "checkbox4",
        nombre: "ACT4",
        precio: 3000,
    },
];  

const carrito = [];

const datosHuespedes = [];

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

let precioCabana = "";

const sumarCabana = () =>{
    datosCabanas.forEach((p) => {
        document.getElementById(`${p.id}`).addEventListener(`click`, () => {
            precioCabana = (p.precio)
            carrito.push(`${p.nombre} ${precioCabana}`)
            let totalCabana = document.querySelector(`#subTotal`)
            let cabana = document.createElement("div")
            cabana.innerHTML = `${p.nombre} por un valor de ${p.precio}`
            totalCabana.appendChild(cabana)
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

// FORMULARIO FECHAS

let cantidadDias = "";

document.addEventListener(`DOMContentLoaded`, () => {
    document.getElementById(`formFecha`).addEventListener(`submit`, formControlFecha)
})

function formControlFecha(event) {
    event.preventDefault()
    let formularioFecha = event.target;
    formData = new FormData(formularioFecha);
    //formData get()
    cantidadDias = formData.get(`dias`)
    for (let keyValue of formData.entries()) {
        console.log(`${keyValue[0]}, ${keyValue[1]}`)
    }
}

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
        console.log(`${keyValue[0]}: ${keyValue[1]}`)
        datosHuespedes.push(`${keyValue[0]}, ${keyValue[1]}`)
    }
    console.log(datosHuespedes);
    
    document.querySelector("#promos").style.opacity = "100%" 
    document.querySelector("#mas").style.opacity = "100%" 
} 

// ¿como hago para capturar el nombre del formulario y usarlo en otro lado?, por ejemplo en la función subtotal.


// Acá abajo hice algo parecido a los botones de las cabañas, lo que quiero hacer con todas las selecciones del usuario es poder armar una lista abajo, y que los valores de cada selección se vayan sumando en un total, y con eso tengo dudas. Agregué un botón para poder hacer la suma, que no funciona bien. Pero en realidad lo que quiero es que cuando hagan check se sume y si lo sacan al check se reste.

// CHECKBOX

const actividadesCheck = () =>{
    for (const actividad of actividades){
        isChecked = document.getElementById(actividad.id).checked;
        if(isChecked) {
            precioActividad =+ actividad.precio
            carrito.push (actividad.precio)
            let sumarCheck = document.querySelector(`#subTotal`)
            let check = document.createElement("div")
            check.innerHTML = `Usted agrego ${actividad.nombre} por un valor de ${actividad.precio}
            <button id="btBorrarActividades">Eliminar</button>` 
            sumarCheck.appendChild(check)
        } 
    }
    console.log(carrito)
}

// Botón para verificar los checkbox

document.getElementById("btActividades").addEventListener(`click`, () => {
    actividadesCheck();
    total();
    borrar()
})

// Botón para eliminar los productos - todavía no funciona

function borrar(){
    document.getElementById("btBorrarActividades").addEventListener(`click`, () => {
        let borrar = document.querySelector("#subtotal");
        let borro 
        borro.innerHTML = ``
        borrar.appendChild(borro)
        /* carrito = []; */
    })
}

// Tengo que resolver aca para trabajar con los datos de lo que pushee.Por ahora trabajo con variables externas, la idea es poder trabajar con lo que se pushee a carrito.

function total (){
    console.log(carrito)
    console.log(precioCabana,  cantidadDias, precioActividad)
    resultado = (precioCabana * cantidadDias) + precioActividad
    let sumaTotal = document.querySelector(`#total`)
    let total = document.createElement("div")
    total.innerHTML = `Su total es de ${resultado}` 
    sumaTotal.appendChild(total)
}
