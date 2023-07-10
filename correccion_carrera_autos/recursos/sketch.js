var fondo
var canvansio
var fuego
var Base
var Registro
var newPlayer

var conteo_jugadores
var statusJuegos

var p1Png
var p2Png

var auto1
var auto2

var Carrosa = []

var PistaPng

var Total


function preload (){
fondo = loadImage("background.png")
PistaPng = loadImage("pista_carreras.jpg")

p1Png = loadImage("auto1.png")
p2Png = loadImage("auto2.png")

}

function setup(){
canvansio = createCanvas(windowWidth,windowHeight)

fuego = firebase.database()

Base = new Estado_juego()
Base.status()
Base.Registradora()

}

function draw(){
background(fondo)
if (conteo_jugadores === 2){
    Base.CargaPateada(1)
}
if (statusJuegos === 1){
    Base.enjuagar()
}

}

function windowResized(){
resizeCanvas(windowWidth,windowHeight)

}