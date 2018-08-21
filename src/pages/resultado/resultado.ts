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
    

    

      this.proveedor.obtenerCampeonatos()
      .subscribe((data:Respuesta)=>{
        if(!data.ok)
        {
          console.log(data.obj);
        }
        else{
          this.campeonatos = data.obj;
          console.log(this.campeonatos);
          this.idCampeonato = this.campeonatos[0].id_campeonato;
          this.cargarResultadosCampeonato();
        }
      },
      (error)=>{console.log(error);})
    
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
    this.proveedor.obtenerCampeonatos()
      .subscribe((data:Respuesta)=>{
        if(!data.ok)
        {
          console.log(data.obj);
        }
        else{
          this.campeonatos = data.obj;
  
          this.idCampeonato = this.campeonatos[0].id_campeonato;
          this.cargarResultadosCampeonato();
        }
      },
      (error)=>{console.log(error);})
  }


  abrirDetalle(item)
  {
    this.navCtrl.push(DetallepartidoPage,{item});
  }

  
  cargarCampeonatos()
  {

    this.proveedor.obtenerCampeonatos()
    .subscribe((data:Respuesta)=>{
      if(!data.ok)
      {
        console.log(data.obj);
      }
      else{
        this.campeonatos = data.obj;

        this.idCampeonato = this.campeonatos[0].id_campeonato;
        this.cargarResultadosCampeonato();
      }
    },
    (error)=>{console.log(error);})
  }

}
