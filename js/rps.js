const sectionReiniciar = document.getElementById("reiniciar")
const BotonPersonaje = document.getElementById("boton_personaje") 
const botonPiedra = document.getElementById("Seleccion_piedra")
const botonPapel = document.getElementById("Seleccion_papel")
const botonTijera = document.getElementById("Seleccion_tijera")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarPersonaje = document.getElementById("Seleccion-personaje")
const inputcheems_doomer = document.getElementById("cheems_doomer")
const inputcheems_dormilon = document.getElementById("cheems_dormilon")
const inputcheems_elegante = document.getElementById("cheems_elegante")
const inputcheems_estudioso = document.getElementById("cheems_estudioso")
const inputcheems_gamer= document.getElementById("cheems_gamer")
const inputcheems_general = document.getElementById("cheems_general")

const imgPersonaje = document.getElementById("imagen_combate_jugador")
const imgEnemigo = document.getElementById("imagen_combate_enemigo")

const spanJugador = document.getElementById("jugador")
const spanEnemigo = document.getElementById("enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes =document.getElementById("resultado")
const contenedorAtaqueJugador=document.getElementById("contenedorAtaqueJugador")
const contenedorAtaqueEnemigo=document.getElementById("contenedorAtaqueEnemigo")
const sectionSeleccionarAtaque = document.getElementById("Seleccion-ataque")

let perros = []
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){

    sectionSeleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"
    BotonPersonaje .addEventListener("click", selecionDePersonaje)
    botonPiedra.addEventListener("click", ataquePiedra)
    botonPapel.addEventListener("click", ataquePapel)
    botonTijera.addEventListener("click", ataqueTijera)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}


function selecionDePersonaje(){
    sectionSeleccionarPersonaje.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"

   if(inputcheems_doomer.checked){
        spanJugador.innerHTML ="Perro doomer"
        imgPersonaje.src = "./Imagenesxd/cheems-doomer.png"
    }
    else if (inputcheems_dormilon.checked){
        spanJugador.innerHTML ="Perro dormilon"
        imgPersonaje.src = "./Imagenesxd/cheems-dormilon.png"
    }
    else if (inputcheems_elegante.checked){
        spanJugador.innerHTML ="Perro elegante"
        imgPersonaje.src = "./Imagenesxd/cheems-elegante.png"
    }
    else if (inputcheems_estudioso.checked){
        spanJugador.innerHTML ="Perro estudioso"
        imgPersonaje.src = "./Imagenesxd/cheems-estudioso.png"
    }
    else if (inputcheems_gamer.checked){
        spanJugador.innerHTML ="Perro gamer"
        imgPersonaje.src = "./Imagenesxd/cheems-gamer.png"
    }
    else if (inputcheems_general.checked){
        spanJugador.innerHTML ="Perro de guerra"
        imgPersonaje.src = "./Imagenesxd/cheems-general.png"
    }
    else{
        alert("Selecciona un personaje")
    }
    
    SeleccionPersonajeEnemigo()
}

function SeleccionPersonajeEnemigo(){
    let numeroAleatorio = aleatorio (1,6)
    
    if(numeroAleatorio == 1) {
        spanEnemigo.innerHTML = "Perro doomer"
        imgEnemigo.src="./Imagenesxd/cheems-doomer.png"
    } else if (numeroAleatorio == 2) {
        spanEnemigo.innerHTML = "Perro dormilon"
        imgEnemigo.src="./Imagenesxd/cheems-dormilon.png"
    } else if (numeroAleatorio == 3){
        spanEnemigo.innerHTML = "Perro elegante"
        imgEnemigo.src="./Imagenesxd/cheems-elegante.png"
    } else if (numeroAleatorio == 4){
        spanEnemigo.innerHTML = "Perro estudioso"
        imgEnemigo.src="./Imagenesxd/cheems-estudioso.png"
    } else if (numeroAleatorio == 5) {
        spanEnemigo.innerHTML = "Perro gamer"
        imgEnemigo.src="./Imagenesxd/cheems-gamer.png"
    } else{
        spanEnemigo.innerHTML = "Perro de guerra"
        imgEnemigo.src="./Imagenesxd/cheems-general.png"
    }
    
    
}

function ataquePiedra(){
    ataqueJugador = "Piedra"
    ataqueAleatorioEnemigo()
}
function ataquePapel(){
    ataqueJugador = "papel"
    ataqueAleatorioEnemigo()
}
function ataqueTijera(){
    ataqueJugador = "Tijera"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio (1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Piedra"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "papel"
    } else {
        ataqueEnemigo = "Tijera"
    }

    combate()
    
}
 
function combate (){

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if (ataqueJugador == "Piedra" && ataqueEnemigo == "Tijera") {
        crearMensaje("GANASTE")
        vidasEnemigo -- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "papel" && ataqueEnemigo == "Piedra") {
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "Tijera" && ataqueEnemigo == "papel") {
        crearMensaje("GANASTE")
         vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        resultadoDefinitivo("GANASTE 🥳") 
    }
    else if(vidasJugador == 0){
        resultadoDefinitivo("TE MORISTE 💀") 
    } 
}
 
function crearMensaje(resultado){

    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo
    
    contenedorAtaqueJugador.appendChild(nuevoAtaqueJugador)
    contenedorAtaqueEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function resultadoDefinitivo(definitivo){
    
    sectionMensajes.innerHTML = definitivo

    botonPiedra.disabled = true

    botonPapel.disabled = true

    botonTijera.disabled = true
  
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }



window.addEventListener("load", iniciarJuego)