import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController, NavParams, AlertController } from 'ionic-angular';

import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Respuesta } from '../respuesta';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  expulsados;
  proximoEncuentro;
  partidosSerie;
  idCampeonato:number;
  detalleTercera;
  detalleSegunda;
  detalleSenior;
  detallePrimera;

   constructor(public navCtrl: NavController, public proveedor:Proveedor1Provider, public loadingCtrl: LoadingController, public modalCtrl: ModalController,
    public navParams: NavParams
  , public alertCtrl: AlertController) {
    let loading = this.loading();

    console.log("campeonato", navParams.data);
    this.idCampeonato = navParams.data;
    this.proveedor.obtenerExpulsados(this.idCampeonato)
    .subscribe((data:Respuesta)=>{
      if(!data.ok)
      {
        let load = this.loadingCtrl.create({
          content: "error de api",
          
        });
      
        load.present();
      }
      else{
        console.log(data);
        this.expulsados = data.obj;
        
        this.proveedor.obtenerProximoEncuentro(this.idCampeonato).
                      subscribe((data:Respuesta)=>{
                        if(!data.ok)
                        {
                          console.log(data.obj);
                        }
                        else{
                        this.proximoEncuentro = data.obj;
                        console.log(this.proximoEncuentro);
                          if(this.proximoEncuentro[0].estado == 2)
                          {
                            this.obtenerDetalleTercera(this.proximoEncuentro[0].id_encuentro);
                            this.obtenerDetalleSegunda(this.proximoEncuentro[0].id_encuentro);
                            this.obtenerDetalleSenior(this.proximoEncuentro[0].id_encuentro);
                            this.obtenerDetallePrimera(this.proximoEncuentro[0].id_encuentro);
                          }
                        
                        
                        }
                        loading.dismiss();
                      },
                      (error)=>{
                        console.log(error);
                        loading.dismiss();
                      });

        console.log(this.expulsados);
      }
    },
    (error)=>{
      console.log(error);
      let load = this.loadingCtrl.create({
        content: error.message,
        
      });
    
      load.present();
      //loading.dismiss();
    })


    
  }


  loading() {
    let loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
  
    loading.present();
    return loading;
    
  }


  recargar()
  {
    let loading = this.loading();

    this.proveedor.obtenerExpulsados(this.idCampeonato)
    .subscribe((data:Respuesta)=>{
      if(!data.ok)
      {
        let load = this.loadingCtrl.create({
          content: "error de api",
          
        });
      
        load.present();
      }
      else{
        console.log(data);
        this.expulsados = data.obj;
        
        this.proveedor.obtenerProximoEncuentro(this.idCampeonato).
                      subscribe((data:Respuesta)=>{
                        if(!data.ok)
                        {
                          console.log(data.obj);
                        }
                        else{
                        this.proximoEncuentro = data.obj;
                        console.log(this.proximoEncuentro);
                        
                        }
                        loading.dismiss();
                      },
                      (error)=>{
                        console.log(error);
                        loading.dismiss();
                      });

        console.log(this.expulsados);
      }
    },
    (error)=>{
      console.log(error);
      let load = this.loadingCtrl.create({
        content: error.message,
        
      });
    
      load.present();
      //loading.dismiss();
    })
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
        console.log("detalle tercera",this.detalleTercera);
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
