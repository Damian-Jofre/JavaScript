// ARRAYS

const datosCabanas = [
    {
        id: 1,
        nombre: "Domo Aguatibay",
        precio: 2000,
        caracteristicas: `Jacuzzi<br><i class="bi bi-wifi"> WIFI</i><br><i class="bi bi-tv"> Netflix</i>`,
        imagen: "./img/domo1.png",
    },
    {
        id: 2,
        nombre: "Domo Molle",
        precio: 3000,
        caracteristicas: "Netflix, Jacuzzi",
        imagen: "./img/domo2.png",
    },
    {
        id: 3,
        nombre: "Domo Algarrobo Negro",
        precio: 4000,
        caracteristicas: "Netflix, Jacuzzi",
        imagen: "./img/domo3.png",
    },
];  

const actividades = [
    {
        id: "checkbox1",
        nombre: "Pase Yoga",
        precio: 4000,
    },
    {
        id: "checkbox2",
        nombre: "Pase Meditación",
        precio: 3500,
    },
    {
        id: "checkbox3",
        nombre: "Dieta Detox",
        precio: 7000,
    },
    {
        id: "checkbox4",
        nombre: "Pase Yoga Nidra",
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
        cabana.innerHTML=`<h5 class="nombreC">${producto.nombre}</h5>
                        <div class="img">
                            <img src="${producto.imagen}" alt="">
                            <button class="btC" id="${producto.id}"><i class="bi bi-arrow-right"></i></button>
                        </div>`;
        contenedor.appendChild(cabana)
    });
}

dibujarDomos();

function muestroDomo (){
    for (const cabanas of datosCabanas){
        let contenedorC = document.querySelector
        ("#muestroCabana");
        document.getElementById(`${cabanas.id}`).addEventListener(`click`, () => {
            cambioColor(cabanas);
            contenedorC = document.querySelector
            ("#muestroCabana");
            contenedorC.innerHTML = ``
            contenedorC.appendChild
            let domo = document.createElement("div");
            domo.classList.add("dibujoC");
            domo.innerHTML=   `<h2>${cabanas.nombre}</h2>
                                <img src="${cabanas.imagen}" alt="">
                                <div class="textoD">
                                    <p>La cabaña cuenta con: ${cabanas.caracteristicas}</p>
                                    <p>Precio por noche :${cabanas.precio}</p>
                                </div>
                                <a href="#hastaAct" id="elijoC" type="button" class="btnElijoCabana">ELEGIR</a>
                                <div class="flechaAbajo">
                                    <i class="bi bi-arrow-down"></i>
                                </div>`;
            contenedorC.appendChild(domo)
            ingresar(cabanas)
        })
    } 
}

muestroDomo ()

function ingresar(cabanas) {
    document.getElementById(`elijoC`).addEventListener(`click`, () => {
        carritoCabana.length===0? agregoCabanaCarrito(cabanas): soloUnaCabana()
        dibujoBorrarCabana()
    })
}

function agregoCabanaCarrito(cabanas){
    Toastify({
        text: `Usted agrego ${cabanas.nombre}`,
        position: `left`,
        duration: 2000
    }).showToast(); 
    carritoCabana.push(cabanas)
    dibujarActividades ();
    subTotalCabanas();
    contador();
}

const soloUnaCabana = () => Toastify({text: "Solo puede elegir una cabaña para su reserva", duration: 3000}).showToast(); 

function dibujoBorrarCabana(){
    let BorroCc = document.querySelector
    ("#borroCabana");
    BorroCc.innerHTML=``;
    BorroCc.appendChild
    let BorroC = document.querySelector
    ("#borroCabana");
    let gomaCabana = document.createElement("div");
    gomaCabana.classList.add("gomaCabana");
    gomaCabana.innerHTML=`<a href="#alPrincipio" id="borrarC"    class="borrarC">Eliminar Cabaña Seleccionada</a>`;
    BorroC.appendChild(gomaCabana)
    borroCabana()
}

// BOTON ELIMINAR CABAÑA

function borroCabana(){
    document.getElementById("borrarC").addEventListener(`click`, () => {
        carritoCabana.splice(0, 1)
        let borroTotal = document.querySelector(`#subTotalC`)
        borroTotal.innerHTML = ``
        borroTotal.appendChild
        contador(); 
    })
} 

// CONTADOR

function contador(){
    i = parseInt(carritoCabana.length )
    a = parseInt(carrito.length) 
    let total = (i + a)
    let contador = document.querySelector
    ("#sumoContador");
    contador.innerHTML=`<p>
                            ${total} 
                        </p>`;
    contador.appendChild 
}

const cambioColor = (cabanas) => prueba = document.getElementById(`${cabanas.id}`).classList.toggle(`btC2`)

// ACTIVIDADES

const dibujarActividades = ()=>{
    let contenedor = document.querySelector("#actividades");
    contenedor.innerHTML=`<h3>¿Quisiera sumar a su estadía alguna de estas actividades?</h3>
                        <h6>los pasen duran 1 mes y son personales</h6>
                        <div class="dibujoBtAct">
                            <a href="#hastaFinal" id="btActividades" class="btnAct" type="button"">Agregar</a>
                            <button type="reset" class="btnReset" id="btnReset">Eliminar</button>
                        </div>
                        <div id="hastaAct">
                        </div>`;      
    actividades.forEach((p)=> {
        let actividad = document.createElement("div");
        actividad.classList.add("act");
        actividad.innerHTML=`<label                         class="form-check-label"              
                            for="check1">${p.nombre}  $${p.precio}
                            </label>
                            <input class="form-check-input" type="checkbox" id="${p.id}" input="check">` 
        contenedor.appendChild(actividad) 
    });
    actividadesCheck();
} 

// ACTIVIDADES CHECKBOX

// Botón para verificar los checkbox

const actividadesCheck = () =>{
    document.getElementById("btActividades").addEventListener(`click`, () => {
        if (carritoCabana.length === 0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debe seleccionar un Domo para continuar!',
              })
        } else {

            if (carrito.length !==0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Por favor elimine su eleccion para volver a empezar!',
                  })
            } else {
                document.querySelector("#formulario").style.opacity = "100%"
                for (const actividad of actividades){
                    isChecked = document.getElementById(actividad.id).checked;
                    isChecked && sumarActividad(actividad);
                } 
                subTotalActividades();
                contador();
                borrarAct()
            }
        }
    })
}

function sumarActividad(actividad){
    if(isChecked) {
        precioActividad =+ actividad.precio
        carrito.push(actividad)
        const carritoStr = JSON.stringify(carrito)
        localStorage.setItem("Huespedes y Actividades", carritoStr)
    } 
}

// BOTON ELIMINAR ACTIVIDADES

function borrarAct(){
    document.getElementById("btnReset").addEventListener(`click`, () => {
        let borroTotal = document.querySelector(`#subTotalA`)
        borroTotal.innerHTML = `` 
        borroTotal.appendChild
        carrito.length = 0
        contador(); 
        dibujarActividades ();
    })
} 

// FORMULARIO

let cantidadDias = "";
let formData;

document.addEventListener(`DOMContentLoaded`, () => {
    document.getElementById(`miForm`).addEventListener(`submit`, formControl)
}) 

function formControl(event) {
    event.preventDefault()
    formData = new FormData(event.target);
    localStorage.setItem("Huespedes", JSON.stringify(cantidadHuespedes = Number(formData.get(`huespedes`))));
    localStorage.setItem("Dias", JSON.stringify(cantidadDias = Number(formData.get(`dias`))));
    localStorage.setItem("nombre", JSON.stringify(formData.get("nombre")));
    localStorage.setItem("apellido", JSON.stringify(formData.get("apellido")));
    localStorage.setItem("dni", JSON.stringify(formData.get("dni")));
    localStorage.setItem("tel", JSON.stringify(formData.get("tel")));
    localStorage.setItem("mail", JSON.stringify(formData.get("mail")));
    //formData Entries
    for (let keyValue of formData.entries()) {
        console.log(`${keyValue[0]}: ${keyValue[1]}`)
        datosHuespedes.push(`${keyValue[0]}, ${keyValue[1]}`)
    }
    console.log(datosHuespedes);
    const huespedesStr = JSON.stringify(datosHuespedes)
    localStorage.setItem("datos", huespedesStr)
    sessionStorage.setItem("Datos", huespedesStr)
    cantidadDias = localStorage.getItem(`Dias`)
    console.log(cantidadDias)
    for (p of carritoCabana){
        diasCabana = cantidadDias * p.precio
    }
    console.log(diasCabana)
    dibujarTotal ();
} 


// SUBTOTAL

const subTotalCabanas = () =>{
    const [domo] = carritoCabana
    sumaTotal = document.querySelector(`#subTotalC`)
    let total = document.createElement("div")
    total.innerHTML =`${domo.nombre} <br>Precio por noche: $${domo.precio}` 
    sumaTotal.appendChild(total) 
}

const subTotalActividades = () =>{
    for (const p of carrito){
        let sumaTotal = document.querySelector(`#subTotalA`)
        let total = document.createElement("div")
        total.innerHTML = `${p.nombre} ${p.precio}` 
        sumaTotal.appendChild(total) 
    } 
}

// TOTAL

const dibujarTotal = ()=>{
    total();
}


let diasCabana = 0

const total = () =>{
    let suma = 0
    for (const p of carrito){
        suma = suma + p.precio
    }
    totalFinal = diasCabana + suma 
    const carritoStr = JSON.stringify(carrito)
    localStorage.setItem("carrito", carritoStr)
    Swal.fire({
        icon: 'success',
        title: 'Su reserva fué exitosa',
        titleText: `Su total es de:`,
        text: totalFinal, 
        footer: '<a href="./cierre.html">Imprima su Check-In</a>'
    })
}

