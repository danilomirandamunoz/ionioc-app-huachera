import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Respuesta } from '../respuesta';

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
  detalleTercera;
  detalleSegunda;
  detalleSenior;
  detallePrimera;
  constructor(public navCtrl: NavController, public navParams: NavParams
    , public proveedor:Proveedor1Provider) {
    let idEncuentro = navParams.data.item;
    
    this.obtenerDetalleTercera(idEncuentro);
    this.obtenerDetalleSegunda(idEncuentro);
    this.obtenerDetalleSenior(idEncuentro);
    this.obtenerDetallePrimera(idEncuentro);
  }


  obtenerDetalleTercera(idencuentro)
  {
    this.proveedor.obtenerDetalleEncuentro(idencuentro,3)
    .subscribe((data:Respuesta)=>{
      if(!data.ok)
      {
        console.log(data.obj);
      }
      else{
        this.detalleTercera= data.obj;
        this.serie = "tercera";
      }
    },
    (error)=>{console.log(error);})
  }

  obtenerDetalleSegunda(idencuentro)
  {
    this.proveedor.obtenerDetalleEncuentro(idencuentro,2)
    .subscribe((data:Respuesta)=>{
      if(!data.ok)
      {
        console.log(data.obj);
      }
      else{
        this.detalleSegunda= data.obj;

      }
    },
    (error)=>{console.log(error);})
  }

  obtenerDetalleSenior(idencuentro)
  {
    this.proveedor.obtenerDetalleEncuentro(idencuentro,4)
    .subscribe((data:Respuesta)=>{
      if(!data.ok)
      {
        console.log(data.obj);
      }
      else{
        this.detalleSenior= data.obj;

      }
    },
    (error)=>{console.log(error);})
  }

  obtenerDetallePrimera(idencuentro)
  {
    this.proveedor.obtenerDetalleEncuentro(idencuentro,1)
    .subscribe((data:Respuesta)=>{
      if(!data.ok)
      {
        console.log(data.obj);
      }
      else{
        this.detallePrimera= data.obj;
        console.log(this.detallePrimera);
      }
    },
    (error)=>{console.log(error);})
  }

}
