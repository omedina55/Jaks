import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioModel } from 'src/app/models/amcoderc_dev_Jaks/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuario/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(usuario: UsuarioModel): Observable<UsuarioModel>{
    let params = new HttpParams();
    if (usuario.id != null) { params = params.append('id', usuario.id.toString()); }
    if (usuario.usuario != null) { params = params.append('usuario', usuario.usuario.toString()); }
    if (usuario.correo != null) { params = params.append('correo', usuario.correo.toString()); }
    if (usuario.contrasena != null) { params = params.append('contrasena', usuario.contrasena.toString()); }
    if (usuario.nombre != null) { params = params.append('nombre', usuario.nombre.toString()); }
    if (usuario.apellidoPaterno != null) { params = params.append('apellidoPaterno', usuario.apellidoPaterno.toString()); }
    if (usuario.apellidoMaterno != null) { params = params.append('apellidoMaterno', usuario.apellidoMaterno.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuario`;
    const res = this.http.get(url, { params });
    return res;
  }

  getList(usuario: UsuarioModel): Observable<UsuarioModel>{
    let params = new HttpParams();
    if (usuario.id != null) { params = params.append('id', usuario.id.toString()); }
    if (usuario.usuario != null) { params = params.append('usuario', usuario.usuario.toString()); }
    if (usuario.correo != null) { params = params.append('correo', usuario.correo.toString()); }
    if (usuario.contrasena != null) { params = params.append('contrasena', usuario.contrasena.toString()); }
    if (usuario.nombre != null) { params = params.append('nombre', usuario.nombre.toString()); }
    if (usuario.apellidoPaterno != null) { params = params.append('apellidoPaterno', usuario.apellidoPaterno.toString()); }
    if (usuario.apellidoMaterno != null) { params = params.append('apellidoMaterno', usuario.apellidoMaterno.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuario/list`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(usuario: UsuarioModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuario`;
    const res = this.http.post(url, {
      usuario: usuario.usuario,
      correo: usuario.correo,
      contrasena: usuario.contrasena,
      nombre: usuario.nombre,
      apellidoPaterno: usuario.apellidoPaterno,
      apellidoMaterno: usuario.apellidoMaterno,
      usuarioCreacionId: usuario.usuarioCreacionId,
      fechaCreacion: usuario.fechaCreacion,
      usuarioModificacionId: usuario.usuarioModificacionId,
      fechaModificacion: usuario.fechaModificacion,
      usuarioBajaId: usuario.usuarioBajaId,
      fechaBaja: usuario.fechaBaja,
      baja: usuario.baja,
      usuarioTipoId: usuario.usuarioTipoId
     });
    return res;
  }

  update(usuario: UsuarioModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuario`;
    const res = this.http.put(url, {
      id: usuario.id,
      usuario: usuario.usuario,
      correo: usuario.correo,
      contrasena: usuario.contrasena,
      nombre: usuario.nombre,
      apellidoPaterno: usuario.apellidoPaterno,
      apellidoMaterno: usuario.apellidoMaterno,
      usuarioCreacionId: usuario.usuarioCreacionId,
      fechaCreacion: usuario.fechaCreacion,
      usuarioModificacionId: usuario.usuarioModificacionId,
      fechaModificacion: usuario.fechaModificacion,
      usuarioBajaId: usuario.usuarioBajaId,
      fechaBaja: usuario.fechaBaja,
      baja: usuario.baja,
      usuarioTipoId: usuario.usuarioTipoId
    });
    return res;
  }

  enable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuario/enable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  disable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuario/disable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuario/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

