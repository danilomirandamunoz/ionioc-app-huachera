import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DetallepartidoPage } from "../detallepartido/detallepartido";
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Respuesta } from '../respuesta';
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

  lista;
  colores: Array<string> = [
    "red",
    "blue",
  ];
  idCampeonato;
  campeonatos;
  danilo;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController
    , public proveedor:Proveedor1Provider) {
    

    

    this.cargarCampeonatos();
    this.idCampeonato = 1;
    this.cargarResultadosCampeonato();
    
  }

  loading() {
    let loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
  
    loading.present();
    return loading;
    
  }

  cargarResultadosCampeonato()
  {
    let loading = this.loading();
    this.lista = [];
    
    let idCampeonato = this.idCampeonato;

    this.proveedor.obtenerResultadosPorCampeonato(idCampeonato)
    .subscribe((data:Respuesta)=>{
      if(!data.ok)
      {
        console.log(data.obj);
      }
      else{
        this.lista = data.obj;
      }
      loading.dismiss();
    },
    (error)=>{console.log(error);})
    
  }

  recargar()
  {
    this.cargarCampeonatos();
    this.idCampeonato = 1;
    this.cargarResultadosCampeonato();
  }


  abrirDetalle(item)
  {
    this.navCtrl.push(DetallepartidoPage,{item});
  }

  
  cargarCampeonatos()
  {



    this.campeonatos =  [
      {
        id:1,
        ano:"2018"
      },
      {
        id:2,
        ano:"2017-2"
      },
      {
        id:3,
        ano:"2017-1"
      },
      {
        id:4,
        ano:"2016-2"
      },
      {
        id:5,
        ano:"2016-1"
      },
      {
        id:6,
        ano:"2015"
      },
    ]
  }

  cargarResultados(idCampeonato)
  {
    return [
      {
        nroFecha: 'Fecha 1: 06-08-2018',
        imgLocal: '../../assets/imgs/huachera.png',
        imgVisita: '../../assets/imgs/huachera.png',
        ptsLocal: 5,
        ptsVisita: 6,
        color:""
      },
      {
        nroFecha: 'Fecha 1: 06-08-2018',
        imgLocal: '../../assets/imgs/huachera.png',
        imgVisita: '../../assets/imgs/huachera.png',
        ptsLocal: 5,
        ptsVisita: 6,
        color:""
      },{
        nroFecha: 'Fecha 1: 06-08-2018',
        imgLocal: '../../assets/imgs/huachera.png',
        imgVisita: '../../assets/imgs/huachera.png',
        ptsLocal: 5,
        ptsVisita: 6,
        color:""
      },{
        nroFecha: 'Fecha 1: 06-08-2018',
        imgLocal: '../../assets/imgs/huachera.png',
        imgVisita: '../../assets/imgs/huachera.png',
        ptsLocal: 5,
        ptsVisita: 6,
        color:""
      },{
        nroFecha: 'Fecha 1: 06-08-2018',
        imgLocal: '../../assets/imgs/huachera.png',
        imgVisita: '../../assets/imgs/huachera.png',
        ptsLocal: 5,
        ptsVisita: 6,
        color:""
      },{
        nroFecha: 'Fecha 1: 06-08-2018',
        imgLocal: '../../assets/imgs/huachera.png',
        imgVisita: '../../assets/imgs/huachera.png',
        ptsLocal: 5,
        ptsVisita: 6,
        color:""
      },{
        nroFecha: 'Fecha 1: 06-08-2018',
        imgLocal: '../../assets/imgs/huachera.png',
        imgVisita: '../../assets/imgs/huachera.png',
        ptsLocal: 5,
        ptsVisita: 6,
        color:""
      },{
        nroFecha: 'Fecha 1: 06-08-2018',
        imgLocal: '../../assets/imgs/huachera.png',
        imgVisita: '../../assets/imgs/huachera.png',
        ptsLocal: 5,
        ptsVisita: 6,
        color:""
      },{
        nroFecha: 'Fecha 1: 06-08-2018',
        imgLocal: '../../assets/imgs/huachera.png',
        imgVisita: '../../assets/imgs/huachera.png',
        ptsLocal: 5,
        ptsVisita: 6,
        color:""
      },{
        nroFecha: 'Fecha 1: 06-08-2018',
        imgLocal: '../../assets/imgs/huachera.png',
        imgVisita: '../../assets/imgs/huachera.png',
        ptsLocal: 5,
        ptsVisita: 6,
        color:""
      },
  
    ];
  }

  

}
