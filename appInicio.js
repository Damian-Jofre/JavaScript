let cantidadDias = "";

document.addEventListener(`DOMContentLoaded`, () => {
    document.getElementById(`formFecha`).addEventListener(`submit`, formControlFecha)
})

function formControlFecha(event) {
    event.preventDefault()
    let formularioFecha = event.target;
    console.log(formularioFecha)
    formData = new FormData(formularioFecha);
    //formData get()
    cantidadDias = formData.get(`dias`)
    for (let keyValue of formData.entries()) {
        console.log(`${keyValue[0]}, ${keyValue[1]}`)
    }
    window.location.assign("./reserva.html")
} 