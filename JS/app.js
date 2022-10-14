// ARRAYS

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

// BIENVENIDA

function ingresoDomos() {
    document.getElementById(`entrar`).addEventListener(`click`, () => {
        document.querySelector("#header").style.opacity = "100%"
        dibujarDomos();
        muestroDomo ()
    })
}

ingresoDomos();

// DOMOS

const dibujarDomos = ()=>{
    fetch('./cabanas.json')
    .then(response => response.json()) 
    .then(json => {
        let borro = document.querySelector("#bienvenida")
        borro.innerHTML=``
        let contenedor = document.querySelector
        ("#domos");
        contenedor.innerHTML=``
        json.forEach((producto)=> {
            let cabana = document.createElement("div");
            cabana.classList.add("domitos");
            cabana.innerHTML=`<h5 class="nombreC">${producto.nombre}</h5>
                            <div class="img">
                                <img src="${producto.imagen}" alt="">
                                <button class="btn btn-light" id="${producto.id}"><i class="bi bi-arrow-right"></i></button>
                            </div>`;
            contenedor.appendChild(cabana)
        });  
    }) 
    .catch(()=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Encontramos un problema al cargar los datos de la página.',
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: 'aca',
            denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('<a href="./index.html">Haz click en el enlace para intentar solucionarlo</a>')
            }
        })
    }) 
};

function muestroDomo (){
    fetch('./cabanas.json')
    .then(response => response.json()) 
    .then(json => {
        for (const cabanas of json){
            let contenedorC = document.querySelector
            ("#muestroDomo");
            document.getElementById(`${cabanas.id}`).addEventListener(`click`, () => {
                contenedorC = document.querySelector
                ("#muestroDomo");
                contenedorC.innerHTML = ``
                contenedorC.appendChild
                let domo = document.createElement("div");
                domo.classList.add("dibujoC");
                domo.innerHTML= `<div>
                                    <h2 class="tituloD">${cabanas.nombre}</h2>
                                    <img src="${cabanas.imagen}" alt="">
                                </div>
                                <div class="textoD">
                                    <p>La cabaña cuenta con: ${cabanas.caracteristicas}</p>
                                    <p>Precio por noche :${cabanas.precio}</p>
                                    <a href="#hastaAct" id="elijoC" type="button" class="btnElijoCabana">ELEGIR</a>
                                </div>`;
                contenedorC.appendChild(domo)
                ingresar(cabanas)
            })
        } 
    })
}

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

const soloUnaCabana = () => Toastify({text: "Solo puede elegir una cabaña para su reserva",position: `center`, duration: 3000}).showToast(); 

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

// ACTIVIDADES

const dibujarActividades = ()=>{
    let contenedor = document.querySelector("#actividades");
    contenedor.innerHTML=`<h3>¿Quisiera sumar a su estadía alguna de estas actividades?</h3>
                        <div class="dibujoBtAct">
                            <a href="#hastaFinal" id="btActividades" class="btnAct" type="button"">Continuar</a>
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

const {DateTime} = luxon;
const at =  Date.parse (DateTime.now().toFormat('yyyy-LL-dd').toLocaleString(DateTime.DATE_SHORT));

document.addEventListener(`DOMContentLoaded`, () => {
    document.getElementById(`miForm`).addEventListener(`submit`, validarFormulario)
}) 

function validarFormulario(event) {
    event.preventDefault()
    formData = new FormData(event.target);
    //EMALIS JS
    emailjs.init('jZ0VkErDGABBwPeXv')
    this.numeroContacto.value = Math.random() * 100000 | 0;
    emailjs.sendForm('contactoServicio', 'contactoFormulario', this)
        .then(function() {
            console.log('Enviado!');
        }, function(error) {
            console.log('Falló el envio...', error);
            }); 
    //HUESPEDES
    localStorage.setItem("Ingreso", JSON.stringify (checkIn = Date.parse (formData.get("checkIn"))));  
    if(checkIn<at){
        Swal.fire('Algo esta mal con su fecha de ingreso, compruebe que no sea menor al día actual')
        return
    }
    localStorage.setItem("Egreso", JSON.stringify (checkOut = Date.parse (formData.get("checkOut")))); 
    if(checkOut<checkIn){
        Swal.fire('Algo esta mal con su fecha de egreso, compruebe que no sea menor a su fecha de ingreso')
        return
    }
    cuenta = checkOut - checkIn 
    resultado = (((cuenta/1000)/60)/60)/24
    if(resultado>15){
        Swal.fire('Las reservas son máximo por 15 días, por favor seleccione el tiempo de estadia correcto')
        return
    }
    localStorage.setItem("Resultado", JSON.stringify (resultado))
    localStorage.setItem("Huespedes", JSON.stringify(cantidadHuespedes = Number(formData.get(`huespedes`))));
    localStorage.setItem("nombre", JSON.stringify(formData.get("nombre")));
    localStorage.setItem("apellido", JSON.stringify(formData.get("apellido")));
    localStorage.setItem("dni", JSON.stringify(formData.get("dni")));
    localStorage.setItem("tel", JSON.stringify(formData.get("tel")));
    localStorage.setItem("mail", JSON.stringify(formData.get("mail")));
    cantidadDias = localStorage.getItem(`Resultado`)
    for (p of carritoCabana){
        diasCabana = cantidadDias * p.precio
    }
    total ();
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

const total = () =>{
    let suma = 0 
    for (const p of carrito){
        suma = suma + p.precio
    }
    totalFinal = diasCabana + suma 
    const carritoStr = JSON.stringify(carrito)
    localStorage.setItem("carrito", carritoStr)
    for (p of carritoCabana){
        Swal.fire({
            icon: 'success',
            title: 'Su reserva fué exitosa',
            titleText: `Su total es de:`,
            text: totalFinal, 
            imageUrl: p.imagen,
            imageWidth: 400,
            imageHeight: 200,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            imageAlt: 'Imagen Domo',
            footer: '<a href="./cierre.html">Imprima su Check-In</a>'
        })
    }
}

