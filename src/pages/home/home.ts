import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

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
   constructor(public navCtrl: NavController, public proveedor:Proveedor1Provider, public loadingCtrl: LoadingController) {

    let loading = this.loading();

    this.proveedor.obtenerExpulsados()
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
        
        this.proveedor.obtenerProximoEncuentro().
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

    this.proveedor.obtenerExpulsados()
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
        
        this.proveedor.obtenerProximoEncuentro().
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


}
