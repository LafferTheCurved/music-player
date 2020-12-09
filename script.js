//Reproductor de Musica
//Boton de play y pausa
//Barra de progreso + minutos que dura la cancion
// Boton de backward and foward
// Cambiar titulo de cancion y artista
//Cambiar imagen del disco

const btnPlay = document.getElementById("play");
const reproducir = document.getElementById("reproductor");
const btnBack = document.querySelector(".fa-backward");
const btnFor = document.querySelector(".fa-forward");
const barraProg = document.getElementById("barra");
const tiempoCancion = document.getElementById("tiempo");
const duracionCancion = document.getElementById("duracion");

var canciones = new Array();
canciones[0]= "/canciones/atrapando-sueños/La Beriso - Cantemos.mp3";
canciones[1]= "/canciones/atrapando-sueños/La Beriso - Miras Al Cielo.mp3";
canciones[2]= "/canciones/atrapando-sueños/La Beriso - Otro Lugar.mp3";
canciones[3]= "/canciones/atrapando-sueños/La Beriso - Sin Decirme Nada.mp3";
canciones[4] = "/canciones/atrapando-sueños/La Beriso - Venenosa.mp3";
canciones[5]= "/canciones/atrapando-sueños/La Beriso -Infierno.mp3";

let songPlaying = true;
let numeroCancion = 0;
//Btn play, reproducir la cancion. Falta boton de pausa.
function togglePlayPause(){
    btnPlay.classList.toggle("fa-pause");
    btnPlay.classList.toggle("fa-play");
}

function reproducirCancion(){
    reproducir.src = `${canciones[numeroCancion]}`;
    avanzarCancion();
    if(songPlaying === true){
        reproducir.pause();
        reproducir.currentTime = 0;
    }else {
    reproducir.play();
    btnPlay.removeEventListener("click", reproducirCancion);
    }
}

function avanzarCancion(){
    reproducir.addEventListener("ended", ()=>{
        if(numeroCancion === 5){
            numeroCancion = 0;
        } else {
            numeroCancion += 1;
        }
        reproducir.src = `${canciones[numeroCancion]}`;
        reproducir.play();
        
    });
}

function playPausa(){
    let a = reproducir;
    if(songPlaying === true){
        togglePlayPause();
        songPlaying = false;
        a.play();
        
    } else{
        togglePlayPause();
        songPlaying = true;
        a.pause();
        
    }
}

function siguienteCancion(){
    if(numeroCancion === 5){
        numeroCancion = 0;
        reproducir.src = `${canciones[numeroCancion]}`;
        reproducirCancion();
    } else {
    numeroCancion +=1;
    reproducir.src = `${canciones[numeroCancion]}`;
    reproducirCancion();
    }
    
}

function backBtn(){
    if(numeroCancion === 0){
        numeroCancion = 0;
        reproducir.src = `${canciones[numeroCancion]}`;
        reproducirCancion();
    }else if (reproducir.currentTime > 0){
        reproducirCancion();
    } else if (numeroCancion < 0){
        numeroCancion = 0;
        reproducir.src = `${canciones[numeroCancion]}`;
        reproducirCancion()
    } else {
    numeroCancion -=1;
    reproducir.src = `${canciones[numeroCancion]}`;
    reproducirCancion();
    }


}

function cambiarPosicion(){
    reproducir.currentTime = (+barraProg.value * reproducir.duration) / 100;
}

function actualizarTiempo(){
    barraProg.value = (reproducir.currentTime / reproducir.duration) * 100;

    let mins = Math.floor(reproducir.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }

    let secs = Math.floor(reproducir.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }
    let duracionMin = Math.floor(reproducir.duration / 60);
    let duracionSeg = Math.floor(reproducir.duration % 60);
    if (duracionSeg < 10) {
        duracionSeg = '0' + String(duracionSeg);
    }

    tiempoCancion.innerHTML = `${mins}:${secs}`;
    duracionCancion.innerHTML = `0${duracionMin}:${duracionSeg}`;
}


btnPlay.addEventListener("click", reproducirCancion);
btnBack.addEventListener("click",backBtn);
btnFor.addEventListener("click", siguienteCancion);
barraProg.addEventListener("change", cambiarPosicion);
reproducir.addEventListener("timeupdate", actualizarTiempo);
