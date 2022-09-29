//LUXON
const {DateTime} = luxon;
const at = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

function cierre(){
    nombre = localStorage.getItem(`nombre`)
    apellido = localStorage.getItem(`apellido`)
    dni = localStorage.getItem(`dni`)
    tel = localStorage.getItem(`tel`)
    mail = localStorage.getItem(`mail`)
    cantidadDias = localStorage.getItem(`Dias`)
    cantidadHuespedes = localStorage.getItem(`Huespedes`)
    let cierre = document.querySelector(`#cierre`)
    let cierreF = document.createElement("div")
    cierreF.className = ("textoCierre")
    cierreF.innerHTML = `<h1>Reserva Confirmada</h1>
    <h4>Usted confirmo la reserva el: ${at}</h4> 
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

setTimeout(function(){
    finalizar();
}, 3000);

function finalizar(){
    window.location.assign("./index.html")
} 