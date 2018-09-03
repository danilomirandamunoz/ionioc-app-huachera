import { Component } from '@angular/core';
import { Platform, AlertController, NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { ModalLoginPage } from '../pages/modal-login/modal-login';
//import { BackgroundMode } from '@ionic-native/background-mode';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Storage } from '@ionic/storage';
import { Proveedor1Provider } from '../providers/proveedor1/proveedor1';
import { GlobalvarsProvider } from '../providers/globalvars/globalvars';
import { Respuesta } from '../pages/respuesta';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  idCampeonato:number = 45;

   constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen/*,private backgroundMode: BackgroundMode*/, 
    private localNotifications: LocalNotifications, public alertCtrl: AlertController
    ,private storage: Storage
    , public proveedor:Proveedor1Provider
  , public globalVars: GlobalvarsProvider) {

      this.storage.get('Login').then((val) => {
        if(val == "1")
        {
          this.proveedor.campeonatoActivo()
          .subscribe((data:Respuesta)=>{
            if(!data.ok)
            {
              console.log(data.obj);
            }
            else{
              console.log("llegue al idcampeonato", data.obj[0]);
              this.idCampeonato = data.obj[0].id_campeonato;
              this.globalVars.setIdCampeonato(this.idCampeonato);
              this.rootPage = TabsPage;
            }
          },
          (error)=>{console.log(error);})
          

          
        }
        else{
          this.rootPage = ModalLoginPage;
        }
      });

    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //this.backgroundMode.enable();

      // this.backgroundMode.on('activate').subscribe(() => {
      //   this.localNotifications.on("click").subscribe((notification)=>{

      //     let alert = alertCtrl.create({
      //       title: notification.title,
      //       subTitle: notification.text,
      //       message: notification.data.mydata
      //     });
      //     alert.present();
      // });

    // });
    //   let year = new Date().getFullYear();
    //   let month = new Date().getMonth();
    //   let day = new Date().getDate();
    //   let hora = new Date().getHours();

    //   let time1 = new Date(year, month, day, 10, 0, 0, 0);
    //   let time2 = new Date(year, month, day, 12, 0, 0, 0);

      // this.localNotifications.schedule({
      //   id: 1,
      //   title: 'C.D. HUCAHERA',
      //   text: 'Expulsados fecha 6',
      //   data: { mydata: `
      //         <p>Jugador 1 : <b>3 fechas</b></p>
      //         <p>Jugador 2 : <b>3 fechas</b></p>
      //         <p>Jugador 3 : <b>3 fechas</b></p>
      //         <p>Jugador 4 : <b>3 fechas</b></p>
      //         <p>Jugador 5 : <b>3 fechas</b></p>
      //         <p>Jugador 6 : <b>3 fechas</b></p>` },
      //   icon: "res://icon.png",
      //   smallIcon:"res://icon.png",
      //   trigger: { at: new  Date(year, month, day, 16, 50, 0, 0) },
      // });
  
      

    });

  }

}
