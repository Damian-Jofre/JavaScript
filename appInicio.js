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

// Está va a ser la página con la que se va a iniciar, la idea compleja, es poder utilizar un calendario y que elijan los días desde ahí haciendo click en cada uno, pero todavía no tengo idea como hacerlo. Por ahora lo que quiero es que en esta primer página puedan cagar la cantidad de huespedes y la cantidad de días que se van a hospedar y poder utilizarlo en la siguiente página que me abre, cuando doy click en CONFIMAR. Quizas esto lo puedo hacer guardando esos datos en el local storage y descargandolos en la siguiente página, en este caso reservas, para poder utilizarlos ahí.