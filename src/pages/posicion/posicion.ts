import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PosicionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posicion',
  templateUrl: 'posicion.html',
})
export class PosicionPage {

  serie:String;
  posiciones;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.serie ="general";
    this.posiciones = this.obtenerPosiciones();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PosicionPage');
  }

  obtenerPosiciones()
  {
    return [
      {
        pos: 1,
        img:'../../assets/imgs/huachera.png',
        club:'La huachera',
        pts:60,
        pj: 10,
        pg: 6,
        pe:4,
        pp:3,
        class:"col-odd"
      },
      {
        pos: 2,
        img:'../../assets/imgs/huachera.png',
        club:'La huachera',
        pts:60,
        pj: 10,
        pg: 6,
        pe:4,
        pp:3
      },
      {
        pos: 3,
        img:'../../assets/imgs/huachera.png',
        club:'La huachera',
        pts:60,
        pj: 10,
        pg: 6,
        pe:4,
        pp:3
      },
      {
        pos: 4,
        img:'../../assets/imgs/huachera.png',
        club:'La huachera',
        pts:60,
        pj: 10,
        pg: 6,
        pe:4,
        pp:3
      },
      {
        pos: 5,
        img:'../../assets/imgs/huachera.png',
        club:'La huachera',
        pts:60,
        pj: 10,
        pg: 6,
        pe:4,
        pp:3
      },
      {
        pos: 6,
        img:'../../assets/imgs/huachera.png',
        club:'La huachera',
        pts:60,
        pj: 10,
        pg: 6,
        pe:4,
        pp:3
      },
      {
        pos: 7,
        img:'../../assets/imgs/huachera.png',
        club:'La huachera',
        pts:60,
        pj: 10,
        pg: 6,
        pe:4,
        pp:3
      },
      {
        pos: 8,
        img:'../../assets/imgs/huachera.png',
        club:'La huachera',
        pts:60,
        pj: 10,
        pg: 6,
        pe:4,
        pp:3
      },
    ]
  }

}
