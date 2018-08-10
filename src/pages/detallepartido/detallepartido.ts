import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetallepartidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detallepartido',
  templateUrl: 'detallepartido.html',
})
export class DetallepartidoPage {

  item;
  serie:String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item;
    this.serie="tercera";
  }

}
