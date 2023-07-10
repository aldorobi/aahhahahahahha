class Jugador {
  constructor() {
    this.JugadorNombre = null
    this.JugadorID = null
    this.posx = 0
    this.posy = 0    
   
    this.rank = 0
    this.vida = 200
    this.puntos = 0
  }


  //leer conteo
  Contadora(){
    var count = fuego.ref("conteo_jugadores")
    count.on("value",data => {
      conteo_jugadores = data.val()})

  }

  //cargar conteo
  CargaPisada(conteo) {
    fuego.ref("/").update({
      conteo_jugadores: conteo
    });
  }

  //agregar jugador
  ParcaTirada(){
    var ID = "jugadores/jugador" + this.JugadorID
    if(this.JugadorID === 1)
    {
      this.posx = width/2-100
    }
    else{
      this.posx = width/2+100
    }
    fuego.ref(ID).set({
      JugadorNombre : this.JugadorNombre,
      posx : this.posx,
      posy : this.posy,
      rank: this.rank,
      puntos: this.puntos,
      vida: this.vida
    })
  }

  // info jugador
  static Info (){
    var ControlInfo = fuego.ref("jugadores")
    ControlInfo.on("value",data => {
      Total = data.val()
    })
  }

  cargar_jugador() {

    var DB_ids = "jugadores/jugador" + this.JugadorID;
    fuego.ref(DB_ids).update({
      posx: this.posx,
      posy: this.posy,
      rank: this.rank,
      puntos: this.puntos
    });
  }

  leer_distancia()
  {
    var DB_distancia = fuego.ref("jugadores/jugador" + this.JugadorID);
    DB_distancia.on("value", data => {
    var data = data.val();
    this.posx = data.posx;
    this.posy = data.posy;
    });
  }
}



