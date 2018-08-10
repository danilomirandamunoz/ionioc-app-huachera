import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  expulsados;
   constructor(public navCtrl: NavController/*, public proveedor:Proveedor1Provider*/) {
    this.expulsados = this.obtenerExpulsados();
  }

  obtenerExpulsados()
  {
    return [
      {
        nombre: "jugador 1",
        pa: 4,
        pp: 3
      },
      {
        nombre: "jugador 1",
        pa: 4,
        pp: 3
      },
      {
        nombre: "jugador 1",
        pa: 4,
        pp: 3
      },
      {
        nombre: "jugador 1",
        pa: 4,
        pp: 3
      },
      {
        nombre: "jugador 1",
        pa: 4,
        pp: 3
      },
      {
        nombre: "jugador 1",
        pa: 4,
        pp: 3
      },
      {
        nombre: "jugador 1",
        pa: 4,
        pp: 3
      },
    ]
  }


}
