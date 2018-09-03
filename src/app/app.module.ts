import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ResultadoPage } from '../pages/resultado/resultado';
import { PosicionPage } from '../pages/posicion/posicion';
import { SeriePage } from '../pages/serie/serie';
import { DetallepartidoPage } from '../pages/detallepartido/detallepartido';
import { TabsPage } from '../pages/tabs/tabs';
import { ModalLoginPage } from '../pages/modal-login/modal-login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Proveedor1Provider } from '../providers/proveedor1/proveedor1';
//import { BackgroundMode } from '@ionic-native/background-mode';
import { LocalNotifications } from '@ionic-native/local-notifications';
// import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { Device } from '@ionic-native/device';
import { IonicStorageModule } from '@ionic/storage';
import { GlobalvarsProvider } from '../providers/globalvars/globalvars';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage, 
    ResultadoPage,
    PosicionPage,
    DetallepartidoPage,
    SeriePage,
    ModalLoginPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ResultadoPage,
    PosicionPage,
    DetallepartidoPage,
    SeriePage,
    ModalLoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Proveedor1Provider,
    //BackgroundMode,
    LocalNotifications,
    Device,
    GlobalvarsProvider
  ]
})
export class AppModule {}
