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
        class:"celda-up"
      },
      {
        pos: 2,
        img:'../../assets/imgs/huachera.png',
        club:'La huachera',
        pts:60,
        pj: 10,
        pg: 6,
        pe:4,
        pp:3,
        class:"celda-up"
      },
      {
        pos: 3,
        img:'../../assets/imgs/huachera.png',
        club:'La huachera',
        pts:60,
        pj: 10,
        pg: 6,
        pe:4,
        pp:3,
        class:"celda-up"
      },
      {
        pos: 4,
        img:'../../assets/imgs/huachera.png',
        club:'La huachera',
        pts:60,
        pj: 10,
        pg: 6,
        pe:4,
        pp:3,
        class:"celda-up"
      },
      {
        pos: 5,
        img:'../../assets/imgs/huachera.png',
        club:'La huachera',
        pts:60,
        pj: 10,
        pg: 6,
        pe:4,
        pp:3,
        class:"celda-up"
      },
      {
        pos: 6,
        img:'../../assets/imgs/huachera.png',
        club:'La huachera',
        pts:60,
        pj: 10,
        pg: 6,
        pe:4,
        pp:3,
        class:"celda-normal"
      },
      {
        pos: 7,
        img:'../../assets/imgs/huachera.png',
        club:'La huachera',
        pts:60,
        pj: 10,
        pg: 6,
        pe:4,
        pp:3,
        class:"celda-normal"
      },
      {
        pos: 8,
        img:'../../assets/imgs/huachera.png',
        club:'La huachera',
        pts:60,
        pj: 10,
        pg: 6,
        pe:4,
        pp:3,
        class:"celda-normal"
      },
      {
        pos: 9,
        img:'../../assets/imgs/huachera.png',
        club:'La huachera',
        pts:60,
        pj: 10,
        pg: 6,
        pe:4,
        pp:3,
        class:"celda-down"
      },
      {
        pos: 10,
        img:'../../assets/imgs/huachera.png',
        club:'La huachera',
        pts:60,
        pj: 10,
        pg: 6,
        pe:4,
        pp:3,
        class:"celda-down"
      },
      {
        pos: 11,
        img:'../../assets/imgs/huachera.png',
        club:'La huachera',
        pts:60,
        pj: 10,
        pg: 6,
        pe:4,
        pp:3,
        class:"celda-down"
      },
      {
        pos: 12,
        img:'../../assets/imgs/huachera.png',
        club:'La huachera',
        pts:60,
        pj: 10,
        pg: 6,
        pe:4,
        pp:3,
        class:"celda-down"
      },
    ]
  }

}
