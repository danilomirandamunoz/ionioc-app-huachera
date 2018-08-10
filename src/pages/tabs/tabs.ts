import { Component } from '@angular/core';


import { ResultadoPage } from '../resultado/resultado';
import { PosicionPage } from '../posicion/posicion';
import { HomePage } from '../home/home';
import { SeriePage } from '../serie/serie';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ResultadoPage;
  tab3Root = PosicionPage;
  tab4Root = SeriePage;
  platform;
  constructor() {

  }

  logout()
  {
    
  }
}
