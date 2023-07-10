class Estado_juego 
{

 
  constructor() {
 
    this.titulo_boton = createElement("h1");
    this.boton_reinicio = createButton("🔄");
   
    this.titulo_puntos = createElement("h2");

    this.puntosj1 = createElement("h2");
    this.puntosj2 = createElement("h2");

  }

//iniciar juego
  Registradora()
  {
  newPlayer = new Jugador()
  conteo_jugadores = newPlayer.Contadora()

  Registro = new Form_registro()
  Registro.mostrar()

  auto1 = createSprite(width/2-59,height-100)
  auto1.addImage("auto1",p1Png)
  auto1.scale = 0.06

  auto2 = createSprite(width/2+100,height-100)
  auto2.addImage("auto2",p2Png)
  auto2.scale = 0.06

  Carrosa = [auto1,auto2]
  }

  //leer estado
  status(){
    var fuegoStatus = fuego.ref("statusJuegos")
    fuegoStatus.on("value",function(data){
      statusJuegos = data.val()})
  }

  //cargar estado
  CargaPateada(statusActual){
    fuego.ref("/").update({
      statusJuegos : statusActual})
  }

  //ocultar form
  ocultar_form()
  {
    Registro.ocultar_elementos();
    Registro.titleImg.position(40, 50);
    Registro.titleImg.class("estilo_titulo_play");
    
    this.titulo_boton.html("Reiniciar juego");
    this.titulo_boton.class("texto_reset");
    this.titulo_boton.position(width / 2 + 200, 40);

    this.boton_reinicio.class("boton_reset");
    this.boton_reinicio.position(width / 2 + 230, 100);

    this.titulo_puntos.html("Puntuación");
    this.titulo_puntos.class("texto_reset");
    this.titulo_puntos.position(width / 3 - 60, 40);

    this.puntosj1.class("puntos_jugador");
    this.puntosj1.position(width / 3 - 50, 80);

    this.puntosj2.class("puntos_jugador");
    this.puntosj2.position(width / 3 - 50, 130);

  }

  //jugar
  enjuagar(){
    this.ocultar_form()
    this.reiniciar_juego()
    Jugador.Info()
    
    if(Total  !== undefined){
      image(PistaPng,0,-height*5,width,height*6)
      
      this.mostrar_tabla_jugadores()


      var index = 0;
      for (var pos_matriz in Total) 
      {

        index = index + 1;
        console.log(index)

        var x = Total[pos_matriz].posx;
        console.log(x)

        var y = height - Total[pos_matriz].posy;
        console.log(y)

        Carrosa[index - 1].position.x = x;
        Carrosa[index - 1].position.y = y;

        if (index === newPlayer.JugadorID)
        {
          stroke(10);
          fill("blue");
          ellipse(x, y, 60, 60);

          camera.position.x = Carrosa[index - 1].position.x;
          console.log(camera.position.x)
          camera.position.y = Carrosa[index - 1].position.y;
        }
      }

      this.controles_movimiento();
      drawSprites()
    }

  }

  mostrar_tabla_jugadores() {
    var puntosj1, puntosj2;

    var jugadores = Object.values(Total);

   if ((jugadores[0].rank === 0  && jugadores[1].rank === 0) ||  jugadores[0].rank === 1) 
    {
      puntosj1 = jugadores[0].rank + "&emsp;" + jugadores[0].JugadorNombre + "&emsp;" + jugadores[0].puntos;
        puntosj2 = jugadores[1].rank + "&emsp;" + jugadores[1].JugadorNombre + "&emsp;" + jugadores[1].puntos;
    }

     if (jugadores[1].rank === 1) 
    {
        puntosj1 =  jugadores[1].rank + "&emsp;" + jugadores[1].JugadorNombre + "&emsp;" + jugadores[1].puntos;
        puntosj2 =  jugadores[0].rank + "&emsp;" + jugadores[0].JugadorNombre + "&emsp;" + jugadores[0].puntos;
    }

    this.puntosj1.html(puntosj1);
    this.puntosj2.html(puntosj2);
  }



  reiniciar_juego() {
    this.boton_reinicio.mousePressed(() => {
      fuego.ref("/").set({
        conteo_jugadores: 0,
        statusJuegos: 0,
        jugadores: {}
      });
      window.location.reload();
    });
  }

  controles_movimiento()
      {

        if (keyIsDown(UP_ARROW)) 
        {
          console.log("boton presionado")
            newPlayer.posy = newPlayer.posy + 10;
            console.log(newPlayer.posx)
            newPlayer.cargar_jugador();
            
         }

       if (keyIsDown(LEFT_ARROW) && newPlayer.posx> width / 3 - 50) {
          newPlayer.posx = newPlayer.posx -5;
          newPlayer.cargar_jugador();
        }
    
        if (keyIsDown(RIGHT_ARROW) && newPlayer.posx< width / 2 + 300) {
          newPlayer.posx = newPlayer.posx + 5;
          newPlayer.cargar_jugador();
        }
      }
}