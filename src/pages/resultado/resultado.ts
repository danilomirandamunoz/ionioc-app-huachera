import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallepartidoPage } from "../detallepartido/detallepartido";

/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  abrirDetalle(item)
  {
    this.navCtrl.push(DetallepartidoPage,{item});
  }

  lista: Array<any> = [
    {
      nroFecha: 'Fecha 1: 06-08-2018',
      imgLocal: '../../assets/imgs/huachera.png',
      imgVisita: '../../assets/imgs/huachera.png',
      ptsLocal: 5,
      ptsVisita: 6
    },
    {
      nroFecha: 'Fecha 1: 06-08-2018',
      imgLocal: '../../assets/imgs/huachera.png',
      imgVisita: '../../assets/imgs/huachera.png',
      ptsLocal: 5,
      ptsVisita: 6
    },{
      nroFecha: 'Fecha 1: 06-08-2018',
      imgLocal: '../../assets/imgs/huachera.png',
      imgVisita: '../../assets/imgs/huachera.png',
      ptsLocal: 5,
      ptsVisita: 6
    },{
      nroFecha: 'Fecha 1: 06-08-2018',
      imgLocal: '../../assets/imgs/huachera.png',
      imgVisita: '../../assets/imgs/huachera.png',
      ptsLocal: 5,
      ptsVisita: 6
    },{
      nroFecha: 'Fecha 1: 06-08-2018',
      imgLocal: '../../assets/imgs/huachera.png',
      imgVisita: '../../assets/imgs/huachera.png',
      ptsLocal: 5,
      ptsVisita: 6
    },{
      nroFecha: 'Fecha 1: 06-08-2018',
      imgLocal: '../../assets/imgs/huachera.png',
      imgVisita: '../../assets/imgs/huachera.png',
      ptsLocal: 5,
      ptsVisita: 6
    },{
      nroFecha: 'Fecha 1: 06-08-2018',
      imgLocal: '../../assets/imgs/huachera.png',
      imgVisita: '../../assets/imgs/huachera.png',
      ptsLocal: 5,
      ptsVisita: 6
    },{
      nroFecha: 'Fecha 1: 06-08-2018',
      imgLocal: '../../assets/imgs/huachera.png',
      imgVisita: '../../assets/imgs/huachera.png',
      ptsLocal: 5,
      ptsVisita: 6
    },{
      nroFecha: 'Fecha 1: 06-08-2018',
      imgLocal: '../../assets/imgs/huachera.png',
      imgVisita: '../../assets/imgs/huachera.png',
      ptsLocal: 5,
      ptsVisita: 6
    },{
      nroFecha: 'Fecha 1: 06-08-2018',
      imgLocal: '../../assets/imgs/huachera.png',
      imgVisita: '../../assets/imgs/huachera.png',
      ptsLocal: 5,
      ptsVisita: 6
    },

  ];

}
