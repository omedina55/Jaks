import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioTipoModel } from 'src/app/models/amcoderc_dev_Jaks/usuario-tipo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioTipoService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioTipo/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(usuarioTipo: UsuarioTipoModel): Observable<UsuarioTipoModel>{
    let params = new HttpParams();
    if (usuarioTipo.id != null) { params = params.append('id', usuarioTipo.id.toString()); }
    if (usuarioTipo.descripcion != null) { params = params.append('descripcion', usuarioTipo.descripcion.toString()); }
    if (usuarioTipo.active != null) { params = params.append('active', usuarioTipo.active.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioTipo`;
    const res = this.http.get(url, { params });
    return res;
  }

  getList(usuarioTipo: UsuarioTipoModel): Observable<UsuarioTipoModel>{
    let params = new HttpParams();
    if (usuarioTipo.id != null) { params = params.append('id', usuarioTipo.id.toString()); }
    if (usuarioTipo.descripcion != null) { params = params.append('descripcion', usuarioTipo.descripcion.toString()); }
    if (usuarioTipo.active != null) { params = params.append('active', usuarioTipo.active.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioTipo/list`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(usuarioTipo: UsuarioTipoModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioTipo`;
    const res = this.http.post(url, {
      descripcion: usuarioTipo.descripcion
     });
    return res;
  }

  update(usuarioTipo: UsuarioTipoModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioTipo`;
    const res = this.http.put(url, {
      id: usuarioTipo.id,
      descripcion: usuarioTipo.descripcion
    });
    return res;
  }

  enable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioTipo/enable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  disable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioTipo/disable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioTipo/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

