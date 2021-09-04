import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PerfilModel } from 'src/app/models/amcoderc_dev_Jaks/perfil.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/perfil/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(perfil: PerfilModel): Observable<PerfilModel>{
    let params = new HttpParams();
    if (perfil.id != null) { params = params.append('id', perfil.id.toString()); }
    if (perfil.descripcion != null) { params = params.append('descripcion', perfil.descripcion.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/perfil`;
    const res = this.http.get(url, { params });
    return res;
  }

  getList(perfil: PerfilModel): Observable<PerfilModel>{
    let params = new HttpParams();
    if (perfil.id != null) { params = params.append('id', perfil.id.toString()); }
    if (perfil.descripcion != null) { params = params.append('descripcion', perfil.descripcion.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/perfil/list`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(perfil: PerfilModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/perfil`;
    const res = this.http.post(url, {
      id: perfil.id,
      descripcion: perfil.descripcion,
      fechaCreacion: perfil.fechaCreacion,
      usuarioModificacionId: perfil.usuarioModificacionId,
      fechaModificacion: perfil.fechaModificacion,
      usuarioBajaId: perfil.usuarioBajaId,
      fechaBaja: perfil.fechaBaja,
      baja: perfil.baja
     });
    return res;
  }

  update(perfil: PerfilModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/perfil`;
    const res = this.http.put(url, {
      id: perfil.id,
      descripcion: perfil.descripcion,
      fechaCreacion: perfil.fechaCreacion,
      usuarioModificacionId: perfil.usuarioModificacionId,
      fechaModificacion: perfil.fechaModificacion,
      usuarioBajaId: perfil.usuarioBajaId,
      fechaBaja: perfil.fechaBaja,
      baja: perfil.baja
    });
    return res;
  }

  enable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/perfil/enable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  disable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/perfil/disable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/perfil/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

