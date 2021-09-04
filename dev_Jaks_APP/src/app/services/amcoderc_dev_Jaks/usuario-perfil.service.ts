import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioPerfilModel } from 'src/app/models/amcoderc_dev_Jaks/usuario-perfil.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioPerfilService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioPerfil/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(usuarioPerfil: UsuarioPerfilModel): Observable<UsuarioPerfilModel>{
    let params = new HttpParams();
    if (usuarioPerfil.id != null) { params = params.append('id', usuarioPerfil.id.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioPerfil`;
    const res = this.http.get(url, { params });
    return res;
  }

  getList(usuarioPerfil: UsuarioPerfilModel): Observable<UsuarioPerfilModel>{
    let params = new HttpParams();
    if (usuarioPerfil.id != null) { params = params.append('id', usuarioPerfil.id.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioPerfil/list`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(usuarioPerfil: UsuarioPerfilModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioPerfil`;
    const res = this.http.post(url, {
      usuarioId: usuarioPerfil.usuarioId,
      perfilId: usuarioPerfil.perfilId,
      usuarioCreacionId: usuarioPerfil.usuarioCreacionId,
      fechaCreacion: usuarioPerfil.fechaCreacion,
      usuarioModificacionId: usuarioPerfil.usuarioModificacionId,
      fechaModificacion: usuarioPerfil.fechaModificacion,
      usuarioBajaId: usuarioPerfil.usuarioBajaId,
      fechaBaja: usuarioPerfil.fechaBaja,
      baja: usuarioPerfil.baja
     });
    return res;
  }

  update(usuarioPerfil: UsuarioPerfilModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioPerfil`;
    const res = this.http.put(url, {
      id: usuarioPerfil.id,
      usuarioId: usuarioPerfil.usuarioId,
      perfilId: usuarioPerfil.perfilId,
      usuarioCreacionId: usuarioPerfil.usuarioCreacionId,
      fechaCreacion: usuarioPerfil.fechaCreacion,
      usuarioModificacionId: usuarioPerfil.usuarioModificacionId,
      fechaModificacion: usuarioPerfil.fechaModificacion,
      usuarioBajaId: usuarioPerfil.usuarioBajaId,
      fechaBaja: usuarioPerfil.fechaBaja,
      baja: usuarioPerfil.baja
    });
    return res;
  }

  enable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioPerfil/enable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  disable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioPerfil/disable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioPerfil/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

