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

  campeonatoActivo()
  {
    return this.http.get("http://localhost:52102/api/campeonatoactivo/");
  }

  obtenerExpulsados(idCampeonato)
  {
    return this.http.get("http://danilomiranda-001-site4.itempurl.com/api/expulsados/"+idCampeonato+"");
  }

  obtenerCampeonatos()
  {
    return this.http.get("http://danilomiranda-001-site4.itempurl.com/api/campeonato");
  }

  obtenerProximoEncuentro(idCampeonato)
  {
    return this.http.get("http://localhost:52102/api/proximoencuentro/"+idCampeonato+"?idequipo=1");
  }

  obtenerResaultadosActuales(idCampeonato)
  {
    return this.http.get("http://localhost:52102/api/proximoencuentro/"+idCampeonato+"?idequipo=1");
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
    return this.http.get("http://localhost:52102/api/tablaposiciones2/"+idCampeonato+"?idTipo="+idtipo+"");
  }

  validarLogin(usuario:string, password:string, uid:string)
  {
    return this.http.get("http://danilomiranda-001-site4.itempurl.com/api/Login/?usuario="+usuario+"&pass="+password+"&uuid="+uid+"");
  }

}
