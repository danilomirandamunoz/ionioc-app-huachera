import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, LoadingController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Respuesta } from '../respuesta';
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

  detalleTercera;
  detalleSegunda;
  detalleSenior;
  detallePrimera;
  detalleGeneral;
  Generalpos:number=1;

  loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,private localNotifications: LocalNotifications, public alertCtrl: AlertController
    , public proveedor:Proveedor1Provider, public loadingCtrl: LoadingController) {
    this.serie ="general";
    //this.posiciones = this.obtenerPosiciones();
    this.loading = this.load();

      this.obtenerDetalleGeneral();
      this.obtenerDetalleTercera();
      this.obtenerDetalleSegunda();
      this.obtenerDetalleSenior();
      this.obtenerDetallePrimera();
    //  this.localNotifications.on("click").subscribe((notification)=>{

    //   let alert = alertCtrl.create({
    //     title: notification.title,
    //     subTitle: notification.text,
    //     message: notification.data.mydata
    //   });
    //   alert.present();
    // });


  }

  
  load() {
    let loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
  
    loading.present();
    return loading;
    
  }

  recargar()
  {
    this.serie ="general";
    //this.posiciones = this.obtenerPosiciones();
    this.loading = this.load();

      this.obtenerDetalleGeneral();
      this.obtenerDetalleTercera();
      this.obtenerDetalleSegunda();
      this.obtenerDetalleSenior();
      this.obtenerDetallePrimera();
  }


  // notificacion()
  // {
  //   console.log("notificacion");
  //   this.localNotifications.schedule({
  //     id: 1,
  //     title: 'C.D. HUCAHERA',
  //     text: 'Expulsados fecha 6',
  //     data: { mydata: `
  //           <p>Jugador 1 : <b>3 fechas</b></p>
  //           <p>Jugador 2 : <b>3 fechas</b></p>
  //           <p>Jugador 3 : <b>3 fechas</b></p>
  //           <p>Jugador 4 : <b>3 fechas</b></p>
  //           <p>Jugador 5 : <b>3 fechas</b></p>
  //           <p>Jugador 6 : <b>3 fechas</b></p>` },
  //     icon: "res://icon.png",
  //     smallIcon:"res://icon.png"
  //   });
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PosicionPage');
  }

  obtenerDetalleGeneral()
  {
    this.proveedor.obtenerPosiciones(5,1)
    .subscribe((data:Respuesta)=>{
      if(!data.ok)
      {
        console.log(data.obj);
      }
      else{
        this.detalleGeneral= data.obj;
        this.serie = "general";
        console.log(this.detalleGeneral);
      }
      this.loading.dismiss();
    },
    (error)=>{
      console.log(error);
      this.loading.dismiss();
    })
  }

  obtenerDetalleTercera()
  {
    this.proveedor.obtenerPosiciones(3,1)
    .subscribe((data:Respuesta)=>{
      if(!data.ok)
      {
        console.log(data.obj);
      }
      else{
        this.detalleTercera= data.obj;
      }
    },
    (error)=>{console.log(error);})
  }

  obtenerDetalleSegunda()
  {
    this.proveedor.obtenerPosiciones(2,1)
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

  obtenerDetalleSenior()
  {
    this.proveedor.obtenerPosiciones(4,1)
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

  obtenerDetallePrimera()
  {
    this.proveedor.obtenerPosiciones(1,1)
    .subscribe((data:Respuesta)=>{
      if(!data.ok)
      {
        console.log(data.obj);
      }
      else{
        this.detallePrimera= data.obj;
      }
    },
    (error)=>{console.log(error);})
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
