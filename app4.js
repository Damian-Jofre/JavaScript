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

const dibujarProductos = ()=>{
    let contenedor = document.querySelector
    ("#cabanas");
    datosCabanas.forEach((producto,indice)=> {
        let card = document.createElement("div");
        card.classList.add("div__cabanas");
        card.innerHTML= `<img class="imagenesCabanas" src="${producto.imagen}" alt="cabañas">
        <div>
            <h5>${producto.nombre}</h5>
            <p>${producto.caracteristicas}</p>
            <p>Precio: ${producto.precio}</p>
        </div>`
        ;
        contenedor.appendChild(card)
    });
}

const huespedes = [];

const datosHuespedes = () =>{
    nombre = document.querySelector("#nombre").value;
    apellido = document.querySelector("#apellido").value;
    dni = document.querySelector("#dni").value;
    telefono = document.querySelector("#telefono").value;
    mail = document.querySelector("#mail").value;
    dias = document.querySelector("#dias").value;
    usuario = document.querySelector ("#huespedes").value;
    huespedes.push (nombre, apellido, dni, telefono, mail, dias, usuario)
    console.log(huespedes);
}

const estadia = [];

dibujarProductos();

function subtotal(nombre, dias, usuario){
    let huespedesFinal = document.querySelector("#total");
    let subtotal = document.createElement("p")
    subtotal.innerHTML = `gracias ${nombre}, reservaste para ${usuario} huespedes por ${dias} dias`
    huespedesFinal.appendChild(subtotal);
}


function promos(){
    let promo = document.querySelector("#promo");
    let agregoPromos = document.createElement("div");
    agregoPromos.innerHTML = `ACA VAN A IR LAS PROMOCIONES`
    promo.appendChild(agregoPromos);
}

promos();

let boton = document.querySelector("#boton");
boton.onclick = () =>{
    datosHuespedes (); 
    subtotal (nombre, dias, usuario)
    document.querySelector("#promo").style.opacity = "100%"
}


let botonReset = document.querySelector("#reset");
botonReset.onclick = () =>{
    document.querySelector("#total p").remove()
}