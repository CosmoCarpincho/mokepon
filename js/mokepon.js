let ataqueJugador;
let ataqueEnemigo;

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', botonAgua);
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', botonTierra);
}

function seleccionarMascotaJugador(){
    let inputHipodego = document.getElementById('hipodego');
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya');
    let spanMascotaJugador = document.getElementById('mascota-jugador');

    if (inputHipodego.checked) {
        spanMascotaJugador.innerHTML = 'hipodego';
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'capipepo';
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'ratigueya';

    } else {
        alert('Selecciona una mascota');
    }
    
    seleccionarMascotaEnemigo() 
}

function seleccionarMascotaEnemigo() {
   let ataqueAleatorio = aleatorio(1,3);
   let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

    if (ataqueAleatorio == 1) {
       spanMascotaEnemigo.innerHTML = 'Hipodoge';
    } else if (ataqueAleatorio == 2 ) {
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    }

}


function ataqueFuego() {
    ataqueJugador = 'FUEGO';
    alert(ataqueJugador);
    ataqueAleatorioEnemigo();
}

function ataqueAgua() {
    ataqueJugador = 'AGUA';
    ataqueAleatorioEnemigo();
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA';
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo(params) {
    
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego);
