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
const tituloCancion = document.getElementById("titulo-cancion");
const nombreArtista = document.getElementById("artista");
const portadaAlbum = document.getElementById("portada");
const tituloAlbum = document.getElementById("titulo-album"); 

var canciones = new Array();
canciones[0]= {album: "Atrapando Sueños", artista: "La Beriso", nombreCancion:"Cantemos", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/atrapando-sueños/La Beriso - Cantemos.mp3"};
canciones[1]= {album:"Atrapando Sueños", artista: "La Beriso", nombreCancion:"Infierno", cancion: "https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/atrapando-sueños/La Beriso - Infierno.mp3"};
canciones[2]= {album:"Atrapando Sueños", artista: "La Beriso", nombreCancion:"Miras Al Cielo", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/atrapando-sueños/La Beriso - Miras Al Cielo.mp3"};
canciones[3]= {album:"Atrapando Sueños", artista: "La Beriso", nombreCancion: "Otro Lugar", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/atrapando-sueños/La Beriso - Otro Lugar.mp3"};
canciones[4]= {album:"Atrapando Sueños", artista: "La Beriso", nombreCancion: "Sin Decirme Nada", cancion:"/canciones/atrapando-sueños/La Beriso - Sin Decirme Nada.mp3"};
canciones[5] = {album:"Atrapando Sueños", artista: "La Beriso", nombreCancion: "Venenosa", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/atrapando-sueños/La Beriso - Venenosa.mp3"};
canciones[6] = {album:"Descartando Miserias", artista: "La Beriso", nombreCancion: "Argentina", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/descartando-miserias/La Beriso - Argentina.mp3"};
canciones[7] = {album:"Descartando Miserias", artista: "La Beriso", nombreCancion: "Buena Suerte", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/descartando-miserias/La Beriso - Buena Suerte.mp3"};
canciones[8] = {album:"Descartando Miserias", artista: "La Beriso", nombreCancion: "Cómo Dejar", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/descartando-miserias/La Beriso - Como Dejar.mp3"};
canciones[9] = {album:"Descartando Miserias", artista: "La Beriso", nombreCancion: "Confundido", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/descartando-miserias/La Beriso - Confundido.mp3"};
canciones[10] = {album:"Descartando Miserias", artista: "La Beriso", nombreCancion: "Diez Promesas", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/descartando-miserias/La Beriso - Diez Promesas.mp3"};
canciones[11] = {album:"Descartando Miserias", artista: "La Beriso", nombreCancion: "Flores Para Dejar", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/descartando-miserias/La Beriso - Flores para Dejar.mp3"};
canciones[12] = {album:"Descartando Miserias", artista: "La Beriso", nombreCancion: "Maldito Dolor", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/descartando-miserias/La Beriso - Maldito Dolor.mp3"};
canciones[13] = {album:"Descartando Miserias", artista: "La Beriso", nombreCancion: "Mi Banda de Rock", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/descartando-miserias/La Beriso - Mi Banda de Rock.mp3"};
canciones[14] = {album:"Descartando Miserias", artista: "La Beriso", nombreCancion: "No Hables", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/descartando-miserias/La Beriso - No Hables.mp3"};
canciones[15] = {album:"Descartando Miserias", artista: "La Beriso", nombreCancion: "Sin Aliento", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/descartando-miserias/La Beriso - Sin Aliento.mp3"};
canciones[16] = {album:"Descartando Miserias", artista: "La Beriso", nombreCancion: "Sin Tu Amor", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/descartando-miserias/La Beriso - Sin Tu Amor.mp3"};
canciones[17] = {album:"Historias", artista: "La Beriso", nombreCancion: "Docientas Almas", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/historias/La Beriso - Docientas Almas.mp3"};
canciones[18] = {album:"Historias", artista: "La Beriso", nombreCancion: "Quiero Salir", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/historias/La Beriso - Quiero Salir.mp3"};
canciones[19] = {album:"Historias", artista: "La Beriso", nombreCancion: "Sueños", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/historias/La Beriso - Sueños.mp3"};
canciones[20] = {album:"Historias", artista: "La Beriso", nombreCancion: "Todo es Mentira", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/historias/La Beriso - Todo es mentira.mp3"};
canciones[21] = {album:"Historias", artista: "La Beriso", nombreCancion: "Traicionero", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/historias/La Beriso - Traicionero.mp3"};
canciones[22] = {album:"Historias", artista: "La Beriso", nombreCancion: "Un Error", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/historias/La Beriso - Un error.mp3"};
canciones[23] = {album:"Historias", artista: "La Beriso", nombreCancion: "Vamos Por La Gloria", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/historias/La Beriso - Vamos por la Gloria.mp3"};



let songPlaying = true;
let numeroCancion = 0;

//Btn play, reproducir la cancion. Falta boton de pausa.
function togglePlayPause(){
    btnPlay.classList.toggle("fa-pause");
    btnPlay.classList.toggle("fa-play");
}

function reproducirCancion(){
    reproducir.src = `${canciones[numeroCancion].cancion}`;
    nombreAutor(canciones[numeroCancion].artista);
    nombreCancion(canciones[numeroCancion].nombreCancion);
    cambiarTituloAlbum(canciones[numeroCancion].album);
    cambiarImagen();
    if(songPlaying === true){
        reproducir.pause();
        reproducir.currentTime = 0;
    }else {
    reproducir.play();
    btnPlay.removeEventListener("click", reproducirCancion);
    
    }
    
}

function nombreCancion(t){
    title = tituloCancion;
    title.innerText = `${t}`;
}
function nombreAutor(n){
    nombreArtista.innerText = `${n}`;
}
function cambiarTituloAlbum(a){
    tituloAlbum.innerText = `${a}`;
}


function playPausa(){
    
    if(songPlaying === true){
        togglePlayPause();
        songPlaying = false;
        btnPlay.id= "play";
        reproducir.play();
        
    } else{
        togglePlayPause();
        songPlaying = true;
        btnPlay.id= "pause";
        reproducir.pause();
        
        
    }
}

function siguienteCancion(){
    if(numeroCancion === (canciones.length - 1)){
        numeroCancion = 0;
        reproducir.src = `${canciones[numeroCancion].cancion}`;
        reproducirCancion();
    } else {
    numeroCancion +=1;
    reproducir.src = `${canciones[numeroCancion].cancion}`;
    reproducirCancion();
    }
    
}

function backBtn(){
    if(numeroCancion === 0){
        numeroCancion = 0;
        reproducir.src = `${canciones[numeroCancion].cancion}`;
        reproducirCancion();
    }else if (reproducir.currentTime > 0){
        reproducir.src = `${canciones[numeroCancion].cancion}`;
        reproducirCancion();
        
    } else if (numeroCancion < 0){
        numeroCancion = 0;
        reproducir.src = `${canciones[numeroCancion].cancion}`;
        reproducirCancion();
        
    } else {
    numeroCancion -=1;
    reproducir.src = `${canciones[numeroCancion].cancion}`;
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
    actualizarDuracion(reproducir)
    
    tiempoCancion.innerHTML = `${mins}:${secs}`;
}

function actualizarDuracion(song){
    
    barraProg.value = (song.currentTime / song.duration) * 100;

    let duracionMin = Math.floor(song.duration / 60);
    let duracionSeg = Math.floor(song.duration % 60);
    if (duracionSeg < 10) {
        duracionSeg = '0' + String(duracionSeg);
    };
    
    duracionCancion.innerHTML = `0${duracionMin}:${duracionSeg}`;
}

function cambiarImagen(){
    if(canciones[numeroCancion].album === "Atrapando Sueños"){
        portadaAlbum.src = "la-beriso-atrapando-sueños.jpeg";
    } else if(canciones[numeroCancion].album === "Descartando Miserias"){
        portadaAlbum.src = "la-beriso-descartando-miserias.jpeg";
    } else if(canciones[numeroCancion].album === "Historias"){
        portadaAlbum.src = "la-beriso-historias.jpeg"
    }
}


btnPlay.addEventListener("click", reproducirCancion);
btnBack.addEventListener("click",backBtn);
btnFor.addEventListener("click", siguienteCancion);
barraProg.addEventListener("change", cambiarPosicion);
reproducir.addEventListener("timeupdate", actualizarTiempo);
reproducir.addEventListener("ended", siguienteCancion);
