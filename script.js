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
    if(songPlaying === true){
        reproducir.pause();
        reproducir.currentTime = 0;
    }else {
    reproducir.play();
    btnPlay.removeEventListener("click", reproducirCancion);
    }
    avanzarCancion();
}

function avanzarCancion(){
    reproducir.addEventListener("ended", ()=>{
        numeroCancion += 1;
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




btnPlay.addEventListener("click", reproducirCancion);
btnBack.addEventListener("click",backBtn);
btnFor.addEventListener("click", siguienteCancion);


