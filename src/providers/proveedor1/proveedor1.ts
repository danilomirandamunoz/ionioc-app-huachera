import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 import { HttpClientModule } from '@angular/common/http';

/*
  Generated class for the Proveedor1Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Proveedor1Provider {

  constructor(public http: HttpClient) {
    console.log('Hello Proveedor1Provider Provider');
  }

  obtenerExpulsados()
  {
    return this.http.get("http://danilomiranda-001-site4.itempurl.com/api/expulsados/1");
  }

  obtenerCampeonatos()
  {
    return this.http.get("http://danilomiranda-001-site4.itempurl.com/api/campeonato");
  }

  obtenerProximoEncuentro()
  {
    return this.http.get("http://danilomiranda-001-site4.itempurl.com/api/proximoencuentro/1?idequipo=1");
  }

  obtenerResultadosPorCampeonato(idCampeonato:number)
  {
    return this.http.get("http://danilomiranda-001-site4.itempurl.com/api/encuentros/"+idCampeonato+"");
  }

  obtenerDetalleEncuentro(idEncuentro:number, idSerie:number)
  {
    return this.http.get("http://danilomiranda-001-site4.itempurl.com/api/encuentrodetalle/"+idEncuentro+"?idSerie="+idSerie+"");
  }

  obtenerPosiciones(idtipo:number, idCampeonato:number)
  {
    return this.http.get("http://danilomiranda-001-site4.itempurl.com/api/tablaposiciones/"+idCampeonato+"?idTipo="+idtipo+"");
  }

}
