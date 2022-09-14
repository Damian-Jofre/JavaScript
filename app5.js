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
        precio: 2000,
        checkbox: false,
    },
    {
        id: 2,
        nombre: "ACT2",
        precio: 2000,
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
        precio: 2000,
        checkbox: false,
    },
];  


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

let botonf = document.querySelector("#confirmarReserva");
botonf.addEventListener("click", escuchoActividades); 

function escuchoActividades(){
    document.querySelector("#promos").style.opacity = "100%" 
    document.querySelector("#mas").style.opacity = "100%" 
    datosHuespedes();
} 

/* FORMULARIO */

const huespedes = [];

const datosHuespedes = () =>{
    nombre = document.querySelector("#nombre").value;
    apellido = document.querySelector("#apellido").value;
    dni = document.querySelector("#dni").value;
    telefono = document.querySelector("#tel").value;
    mail = document.querySelector("#mail").value;
    dias = document.querySelector("#dias").value;
    usuario = document.querySelector ("#huespedes").value;
    huespedes.push (nombre, apellido, dni, telefono, mail, dias, usuario)
    console.log(huespedes);
    subtotal(nombre, dias, usuario);
}

function subtotal(nombre, dias, usuario){
    let huespedesFinal = document.querySelector("#total");
    let subtotal = document.createElement("p")
    subtotal.innerHTML = `gracias ${nombre}, reservaste para ${usuario} huespedes por ${dias} dias`
    huespedesFinal.appendChild(subtotal);
} 