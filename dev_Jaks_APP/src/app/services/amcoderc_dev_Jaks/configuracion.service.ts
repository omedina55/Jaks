import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ConfiguracionModel } from 'src/app/models/amcoderc_dev_Jaks/configuracion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/configuracion/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(configuracion: ConfiguracionModel): Observable<ConfiguracionModel>{
    let params = new HttpParams();
    if (configuracion.id != null) { params = params.append('id', configuracion.id.toString()); }
    if (configuracion.descripcion != null) { params = params.append('descripcion', configuracion.descripcion.toString()); }
    if (configuracion.valor != null) { params = params.append('valor', configuracion.valor.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/configuracion`;
    const res = this.http.get(url, { params });
    return res;
  }

  getList(configuracion: ConfiguracionModel): Observable<ConfiguracionModel>{
    let params = new HttpParams();
    if (configuracion.id != null) { params = params.append('id', configuracion.id.toString()); }
    if (configuracion.descripcion != null) { params = params.append('descripcion', configuracion.descripcion.toString()); }
    if (configuracion.valor != null) { params = params.append('valor', configuracion.valor.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/configuracion/list`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(configuracion: ConfiguracionModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/configuracion`;
    const res = this.http.post(url, {
      id: configuracion.id,
      descripcion: configuracion.descripcion,
      valor: configuracion.valor
     });
    return res;
  }

  update(configuracion: ConfiguracionModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/configuracion`;
    const res = this.http.put(url, {
      id: configuracion.id,
      descripcion: configuracion.descripcion,
      valor: configuracion.valor
    });
    return res;
  }

  enable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/configuracion/enable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  disable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/configuracion/disable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/configuracion/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

