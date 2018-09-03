import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams,LoadingController, Loading, } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
import { Respuesta } from '../respuesta';
import { Device } from '@ionic-native/device';
import { Storage } from '@ionic/storage';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
/**
 * Generated class for the ModalLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-login',
  templateUrl: 'modal-login.html',
})
export class ModalLoginPage {

  loading: Loading;
  registerCredentials = { usuario: '', password: '' };
  usuario;
  password;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private loadingCtrl: LoadingController
    , public proveedor:Proveedor1Provider
  ,private device: Device
,private storage: Storage
, public globalVars: GlobalvarsProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalLoginPage');
  }

  public login() {
    this.showLoading();
    console.log(this.usuario);
    console.log(this.password);
    

    this.proveedor.validarLogin(this.usuario, this.password, this.device.uuid)
    .subscribe((data:Respuesta)=>{
      if(!data.ok)
      {
        this.showError(data.obj)
      }
      else{
        console.log("login");
        this.storage.set("Login", 1);

        this.proveedor.campeonatoActivo()
          .subscribe((data:Respuesta)=>{
            if(!data.ok)
            {
              console.log(data.obj);
            }
            else{
              console.log("llegue al idcampeonato por el login", data.obj[0]);
              this.globalVars.setIdCampeonato(data.obj[0].id_campeonato);
              this.navCtrl.setRoot(TabsPage);
            }
          },
          (error)=>{console.log(error);})


        
        
      }
    },
    (error)=>{this.showError(error.message)})
  }

  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

}
