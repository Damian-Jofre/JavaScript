// FORMULARIO FECHAS

let cantidadDias = "";

document.addEventListener(`DOMContentLoaded`, () => {
    document.getElementById(`formFecha`).addEventListener(`submit`, formControlFecha)
})

function formControlFecha(event) {
    event.preventDefault()
    let formularioFecha = event.target;
    console.log(formularioFecha)
    formData = new FormData(formularioFecha);
    cantidadDias = Number(formData.get(`dias`))
    cantidadHuespedes = Number(formData.get(`huespedes`))
    const huespedesStr = JSON.stringify(cantidadHuespedes)
    const diasStr = JSON.stringify(cantidadDias)
    localStorage.setItem("Huespedes", huespedesStr)
    localStorage.setItem("Dias", diasStr)
    window.location.assign("./reserva.html")
} 