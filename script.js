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
const btnAzar = document.querySelector(".fa-random");
const btnList = document.querySelector(".fa-list");
const btnBackStart = document.querySelector(".fa-arrow-left");
const listaCanciones = document.getElementById("lista-canciones");
const portadaAlbumDos = document.getElementById("portada-secundaria");
const listaCancionesReproduccion = document.querySelectorAll("div.unir-play-lista");
const menu = document.getElementById("overlay");

var canciones = new Array();
canciones[0]= {album: "Atrapando Sueños", artista: "La Beriso", nombreCancion:"Cantemos", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/atrapando-sueños/La Beriso - Cantemos.mp3"};
canciones[1]= {album:"Atrapando Sueños", artista: "La Beriso", nombreCancion:"Infierno", cancion: "https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/atrapando-sueños/La Beriso - Infierno.mp3"};
canciones[2]= {album:"Atrapando Sueños", artista: "La Beriso", nombreCancion:"Miras Al Cielo", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/atrapando-sueños/La Beriso - Miras Al Cielo.mp3"};
canciones[3]= {album:"Atrapando Sueños", artista: "La Beriso", nombreCancion: "Otro Lugar", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/atrapando-sueños/La Beriso - Otro Lugar.mp3"};
canciones[4]= {album:"Atrapando Sueños", artista: "La Beriso", nombreCancion: "Sin Decirme Nada", cancion:"https://raw.githubusercontent.com/LafferTheCurved/music-player/master/canciones/atrapando-sueños/La Beriso - Sin Decirme Nada.mp3"};
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
let songPlayingList = false;
let numeroCancion = 0;
let botonAzarOn = false;
var cancionesDesplegadas = false;
var elegiCancion = false;


//Btn play, reproducir la cancion. Falta boton de pausa.
function togglePlayPause(){
    btnPlay.classList.toggle("fa-play");
    btnPlay.classList.toggle("fa-pause");
}



function reproducirCancion(){
    songPlayingList = true;
    reproducir.src = `${canciones[numeroCancion].cancion}`;
    nombreAutor(canciones[numeroCancion].artista);
    nombreCancion(canciones[numeroCancion].nombreCancion);
    cambiarTituloAlbum(canciones[numeroCancion].album);
    cambiarImagen();
    if(songPlaying === true){
        
        reproducir.pause();
        reproducir.currentTime = 0;
    } else {
    reproducir.play();
    btnPlay.removeEventListener("click", reproducirCancion);
    
    }
    reproducirCancionEnLista(numeroCancion);
    cambiarPlayPausaEnLista(numeroCancion);
    seleccionarCancionEnLista();
    
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
    songPlayingList= true;
    if(numeroCancion === (canciones.length - 1)){
        numeroCancion = 0;
        reproducir.src = `${canciones[numeroCancion].cancion}`;
        reproducirCancion();
    } else if(botonAzarOn === true){
        obtenerCancionAlAzar()
    } else {
    numeroCancion +=1;
    reproducir.src = `${canciones[numeroCancion].cancion}`;
    reproducirCancion();
    }
    reproducirCancionEnLista(numeroCancion);
    cambiarPlayPausaEnLista(numeroCancion);
    
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
    reproducirCancionEnLista(numeroCancion);
    cambiarPlayPausaEnLista(numeroCancion);
    
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
        portadaAlbumDos.src = "la-beriso-atrapando-sueños.jpeg";
    } else if(canciones[numeroCancion].album === "Descartando Miserias"){
        portadaAlbum.src = "la-beriso-descartando-miserias.jpeg";
        portadaAlbumDos.src ="la-beriso-descartando-miserias.jpeg";
    } else if(canciones[numeroCancion].album === "Historias"){
        portadaAlbum.src = "la-beriso-historias.jpeg";
        portadaAlbumDos.src = "la-beriso-historias.jpeg";
    }
}


function obtenerCancionAlAzar(){
    numeroCancion = (Math.floor(Math.random()*canciones.length));
    reproducir.src = `${canciones[numeroCancion].cancion}`;
    reproducirCancion();
}

function activarAzarBtn(){
    if(botonAzarOn === false){
    botonAzarOn = true;
    btnAzar.style = "color: white; background: rgba(70, 101, 241, 0.774); border-radius: 50%; height: 20px; width: 20px; box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1), -2px -2px  2px 3px rgb(255,255,255),2px 2px 2px 3px rgba(0,0,0,0.3); display: table-cell; text-align: center; vertical-align: middle;"
    alert("Activaste el modo aleatorio")
    }else{
        botonAzarOn = false;
        btnAzar.style = "border-radius: 50%; background-color: aliceblue; display: table-cell;text-align: center; vertical-align: middle; box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1), -2px -2px  2px 3px rgb(255,255,255),2px 2px 2px 3px rgba(0,0,0,0.3); height: 20px; width: 20px;border:aliceblue solid 2px;"
}
}

function desplegarMenu(){
    menu.style= "display: flex; flex-direction: column;";
    
}

function volverAlInicio(){
    menu.style= "display: none;"
}


// En la cancion que se esté reproduciendo. El color de unir-play-lista con el id de la cancion cambie de color.
//Y que el i con la clase fa-play, que tiene ese id, cambie a fa-pause. Y la clase play-secundaria pase a pausa-secundaria.

function reproducirCancionEnLista(song){
    let a = document.getElementById(`${song + 1}`);
    
    [...document.querySelectorAll('.unir-play-lista')].forEach(function() { 
        let activo = document.querySelector(".active");
        
        if(activo !== null){
        activo.classList.remove("active")}
        
    a.classList.add("active");
});
}

function cambiarPlayPausaEnLista(song){
    let a = document.getElementById(`${song + 1}`);
    
    [...document.querySelectorAll(".play-secundario")].forEach(function(){
        let pausado = document.querySelector(".pausa-secundaria");
        let pausadoBoton = document.querySelector(".fa-pause");
        if(pausado !== null){
            pausado.classList.remove("pausa-secundaria");
        }
        if(pausadoBoton !==null){
            pausadoBoton.classList.remove("fa-pause");
            pausadoBoton.classList.add("fa-play")
            
        }
        if(songPlaying === true){
            btnPlay.classList.remove("fa-play");
            btnPlay.classList.add("fa-pause")
          songPlaying = false;} else {
            btnPlay.classList.remove("fa-pause");
            btnPlay.classList.add("fa-play");
          songPlaying = true}
        a.childNodes[3].classList.add("fa-pause");
        a.childNodes[3].classList.remove("fa-play");
        a.childNodes[3].classList.add("pausa-secundaria");
    })
    
}

function seleccionarCancionEnLista(){
    
    [...document.querySelectorAll('.unir-play-lista')].forEach(function(item){
    item.onclick = function() {
    numeroCancion = parseInt(this.id - 1);
    reproducirCancion();
    if(songPlayingList === false){
        reproducirCancion();
        togglePlayPause();
    }
}})
}

btnPlay.addEventListener("click", reproducirCancion);
btnBack.addEventListener("click",backBtn);
btnFor.addEventListener("click", siguienteCancion);
barraProg.addEventListener("change", cambiarPosicion);
reproducir.addEventListener("timeupdate", actualizarTiempo);
reproducir.addEventListener("ended", siguienteCancion);
btnAzar.addEventListener("click", activarAzarBtn);
btnList.addEventListener("click", desplegarMenu);
btnBackStart.addEventListener("click", volverAlInicio);
seleccionarCancionEnLista();


