import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioEmpresaModel } from 'src/app/models/amcoderc_dev_Jaks/usuario-empresa.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioEmpresaService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioEmpresa/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(usuarioEmpresa: UsuarioEmpresaModel): Observable<UsuarioEmpresaModel>{
    let params = new HttpParams();
    if (usuarioEmpresa.id != null) { params = params.append('id', usuarioEmpresa.id.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioEmpresa`;
    const res = this.http.get(url, { params });
    return res;
  }

  getList(usuarioEmpresa: UsuarioEmpresaModel): Observable<UsuarioEmpresaModel>{
    let params = new HttpParams();
    if (usuarioEmpresa.id != null) { params = params.append('id', usuarioEmpresa.id.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioEmpresa/list`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(usuarioEmpresa: UsuarioEmpresaModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioEmpresa`;
    const res = this.http.post(url, {
      usuarioId: usuarioEmpresa.usuarioId,
      empresaId: usuarioEmpresa.empresaId,
      usuarioCreacionId: usuarioEmpresa.usuarioCreacionId,
      fechaCreacion: usuarioEmpresa.fechaCreacion,
      usuarioModificacionId: usuarioEmpresa.usuarioModificacionId,
      fechaModificacion: usuarioEmpresa.fechaModificacion,
      usuarioBajaId: usuarioEmpresa.usuarioBajaId,
      fechaBaja: usuarioEmpresa.fechaBaja,
      baja: usuarioEmpresa.baja
     });
    return res;
  }

  update(usuarioEmpresa: UsuarioEmpresaModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioEmpresa`;
    const res = this.http.put(url, {
      id: usuarioEmpresa.id,
      usuarioId: usuarioEmpresa.usuarioId,
      empresaId: usuarioEmpresa.empresaId,
      usuarioCreacionId: usuarioEmpresa.usuarioCreacionId,
      fechaCreacion: usuarioEmpresa.fechaCreacion,
      usuarioModificacionId: usuarioEmpresa.usuarioModificacionId,
      fechaModificacion: usuarioEmpresa.fechaModificacion,
      usuarioBajaId: usuarioEmpresa.usuarioBajaId,
      fechaBaja: usuarioEmpresa.fechaBaja,
      baja: usuarioEmpresa.baja
    });
    return res;
  }

  enable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioEmpresa/enable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  disable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioEmpresa/disable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/usuarioEmpresa/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

