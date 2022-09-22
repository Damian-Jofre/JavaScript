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
        nombre: "Pase de Yoga",
        precio: 4000,
    },
    {
        id: "checkbox2",
        nombre: "Pase de Meditación",
        precio: 3500,
    },
    {
        id: "checkbox3",
        nombre: "Dieta Detox",
        precio: 7000,
    },
    {
        id: "checkbox4",
        nombre: "Pase de Yoga Nidra",
        precio: 5000,
    },
];  

const carrito = [];

const carritoCabana = [];

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

let precioCabana;
let diasCabana;

// FUNCIONA

const sumarCabana = () =>{
    for (const cabanas of datosCabanas){
        document.getElementById(`${cabanas.id}`).addEventListener(`click`, () => {
            if (carritoCabana.length === 0){
                carritoCabana.push(cabanas) 
                cantidadDias = localStorage.getItem(`Dias`)
                diasCabana = cantidadDias * cabanas.precio
                console.log(carritoCabana)
            } else {
                let msjCabana = document.querySelector
                ("#mensajeCabana");
                let unaCabana = document.createElement("div");
                unaCabana.innerHTML= `Solo puede elegir una cabaña para su reserva`;
                msjCabana.appendChild(unaCabana)
            }
        })   
    }
} 

dibujarDomos();

// PROMOCIONES

const dibujarPromos = ()=>{
    let contenedor = document.querySelector
    ("#promos");
    actividades.forEach((p)=> {
        let actividad = document.createElement("div");
        actividad.classList.add("act");
        actividad.innerHTML=`<label class="form-check-label"              
                            for="check1">${p.nombre}
                            </label>
                            <input class="form-check-input" type="checkbox" value="" id="${p.id}" input="check">`;
        contenedor.appendChild(actividad)
    });
} 

dibujarPromos ();

// FORMULARIO

let formData;

document.addEventListener(`DOMContentLoaded`, () => {
    document.getElementById(`miForm`).addEventListener(`submit`, formControl)
})

function formControl(event) {
    event.preventDefault()
    let formulario = event.target;
    formData = new FormData(formulario);
    //formData get()
    nombre = formData.get(`nombre`)
    apellido = formData.get(`apellido`)
    dni = formData.get(`dni`)
    tel = formData.get(`tel`)
    mail = formData.get(`mail`)
    // localStorage get
    const nombreStr = JSON.stringify(nombre)
    localStorage.setItem("nombre", nombreStr)
    const apellidoStr = JSON.stringify(apellido)
    localStorage.setItem("apellido", apellidoStr)
    const dniStr = JSON.stringify(dni)
    localStorage.setItem("dni", dniStr)
    const telStr = JSON.stringify(tel)
    localStorage.setItem("tel", telStr)
    const mailStr = JSON.stringify(mail)
    localStorage.setItem("mail", mailStr)
    for (let keyValue of formData.entries()) {
        console.log(`${keyValue[0]}: ${keyValue[1]}`)
        datosHuespedes.push(`${keyValue[0]}, ${keyValue[1]}`)
    }
    console.log(datosHuespedes);
    const huespedesStr = JSON.stringify(datosHuespedes)
    localStorage.setItem("datos", huespedesStr)
    sessionStorage.setItem("Datos", huespedesStr)
    
    document.querySelector("#promosA").style.opacity = "100%" 
    document.querySelector("#mas").style.opacity = "100%" 
} 

// ACTIVIDADES CHECKBOX

const actividadesCheck = () =>{
    for (const actividad of actividades){
        isChecked = document.getElementById(actividad.id).checked;
        if(isChecked) {
            precioActividad =+ actividad.precio
            carrito.push(actividad)
            const carritoStr = JSON.stringify(carrito)
            localStorage.setItem("Huespedes y Actividades", carritoStr)
        } 
    }
    console.log(carrito)
}

// Botón para verificar los checkbox

document.getElementById("btActividades").addEventListener(`click`, () => {
    actividadesCheck();
    subTotal();
    total();
})

// SUBTOTAL

const subTotal = () =>{
    for (const p of carritoCabana){
        console.log(p.nombre, p.precio)
        let sumaTotal = document.querySelector(`#subTotalC`)
        let total = document.createElement("div")
        total.innerHTML = `${p.nombre} ${p.precio}` 
        sumaTotal.appendChild(total) 
    }
    for (const p of carrito){
        console.log(p.nombre, p.precio)
        let sumaTotal = document.querySelector(`#subTotal`)
        let total = document.createElement("div")
        total.innerHTML = `${p.nombre} ${p.precio}
                            <button id="borroAct">Eliminar</button>` 
        sumaTotal.appendChild(total) 
    }
}

// TOTAL

const total = () =>{
    let suma = 0
    for (const p of carrito){
        suma = suma + p.precio
        console.log(suma)
    }
    console.log(diasCabana)  
    totalFinal = diasCabana + suma
    const carritoStr = JSON.stringify(carrito)
    localStorage.setItem("carrito", carritoStr)
    let sumaTotal = document.querySelector(`#total`)
    let total = document.createElement("div")
    total.innerHTML = `${totalFinal}` 
    sumaTotal.appendChild(total) 
}

// BOTÓN cierre

function confirmar(){
    document.getElementById("btConfirmar").addEventListener(`click`, () => {
        window.location.assign("./final.html")
    })
}

confirmar ();


