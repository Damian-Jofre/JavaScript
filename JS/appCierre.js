//ARRAY

const datosCierre = [];

function cierre(){
    nombre = localStorage.getItem(`nombre`)
    apellido = localStorage.getItem(`apellido`)
    dni = localStorage.getItem(`dni`)
    tel = localStorage.getItem(`tel`)
    mail = localStorage.getItem(`mail`)
    cantidadDias = localStorage.getItem(`Dias`)
    cantidadHuespedes = localStorage.getItem(`Huespedes`)
    console.log(datosCierre)
    let cierre = document.querySelector(`#cierre`)
    let cierreF = document.createElement("div")
    cierreF.className = ("cierre")
    cierreF.innerHTML = `<h1>Reserva Confirmada</h1>
    <h4>Los datos de su reserva son:</h4>
    <p>Nombre: ${nombre} <br>
    Apellido: ${apellido} <br>
    DNI: ${dni}<br>
    Telefono: ${tel} <br>
    Mail: ${mail}<br>
    Su reserva es por ${cantidadDias} días para ${cantidadHuespedes} personas.
    </p>
    <h4>En breve nos estaremos comunicando a ${mail}</h4>`   
    cierre.appendChild(cierreF)  
}

cierre();

function finalizar(){
    window.location.assign("./index.html")
} 

setTimeout(function(){
    finalizar();
}, 3000);
