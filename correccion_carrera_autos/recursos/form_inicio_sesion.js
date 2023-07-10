class Form_registro {
  constructor() {

    
    this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
    this.playButton = createButton("Jugar");
    this.titleImg = createImg("titulo_juego.png", "titulo");
    this.greeting = createElement("h2");
  }

  posicion_elementos() {
 
    this.titleImg.position(120,50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  estilo_elementos() {
    
    this.titleImg.class("estilo_titulo");
    this.input.class("estilo_input");
    this.playButton.class("estilo_boton");
    this.greeting.class("estilo_etiqueta");
  }

  ocultar_elementos() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.titleImg.hide()
  }

  click_inicio_sesion() {
    this.playButton.mousePressed(() => {
    this.input.hide();
    this.playButton.hide();
  
    var saludo = ` Hola ${this.input.value()} </br> espera a que otro jugador se una `;
    this.greeting.html(saludo);
    conteo_jugadores = conteo_jugadores + 1

    newPlayer.JugadorNombre = this.input.value()
    newPlayer.JugadorID = conteo_jugadores
    
    newPlayer.ParcaTirada()
    newPlayer.CargaPisada(conteo_jugadores)

    newPlayer.leer_distancia()

    });
  }

  mostrar() {
    this.posicion_elementos()
    this.estilo_elementos()
    this.click_inicio_sesion()
    

  }
}
