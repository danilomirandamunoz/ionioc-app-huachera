import { Component } from '@angular/core';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
import { NavParams } from 'ionic-angular';
import { ResultadoPage } from '../resultado/resultado';
import { PosicionPage } from '../posicion/posicion';
import { HomePage } from '../home/home';
import { SeriePage } from '../serie/serie';
import { Respuesta } from '../respuesta';

import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ResultadoPage;
  tab3Root = PosicionPage;
  tab4Root = SeriePage;
  platform;
  idCampeonato:number= 0;

  constructor(public proveedor:Proveedor1Provider, public navParams: NavParams
    , public globalVars: GlobalvarsProvider) {
    this.idCampeonato = this.globalVars.getIdCampeonato()

  }

  logout()
  {
    
  }
}
