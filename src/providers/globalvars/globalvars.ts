import {Injectable} from '@angular/core';
@Injectable()
export class GlobalvarsProvider { 
  idCampeonato: number;
constructor() { 
this.idCampeonato = 0; 
} 

setIdCampeonato(value) { 
this.idCampeonato = value; 
}

getIdCampeonato() { 
return this.idCampeonato; 
} 
}