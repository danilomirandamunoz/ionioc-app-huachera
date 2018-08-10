import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PosicionPage } from './posicion';

@NgModule({
  declarations: [
    PosicionPage,
  ],
  imports: [
    IonicPageModule.forChild(PosicionPage),
  ],
})
export class PosicionPageModule {}
