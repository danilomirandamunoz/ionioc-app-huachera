import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MasinfoPage } from "../masinfo/masinfo";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {



  constructor(public navCtrl: NavController) {


  }

  abrirDetalle(item)
  {
    this.navCtrl.push(MasinfoPage,{item});
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
