import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmpresaModel } from 'src/app/models/amcoderc_dev_Jaks/empresa.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/empresa/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(empresa: EmpresaModel): Observable<EmpresaModel>{
    let params = new HttpParams();
    if (empresa.id != null) { params = params.append('id', empresa.id.toString()); }
    if (empresa.descripcion != null) { params = params.append('descripcion', empresa.descripcion.toString()); }
    if (empresa.rFC != null) { params = params.append('rFC', empresa.rFC.toString()); }
    if (empresa.razonSocial != null) { params = params.append('razonSocial', empresa.razonSocial.toString()); }
    if (empresa.constrasenaVUCEM != null) { params = params.append('constrasenaVUCEM', empresa.constrasenaVUCEM.toString()); }
    if (empresa.tokenWEBVUCEM != null) { params = params.append('tokenWEBVUCEM', empresa.tokenWEBVUCEM.toString()); }
    if (empresa.correo != null) { params = params.append('correo', empresa.correo.toString()); }
    if (empresa.expeditionPlaceSandbox != null) { params = params.append('expeditionPlaceSandbox', empresa.expeditionPlaceSandbox.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/empresa`;
    const res = this.http.get(url, { params });
    return res;
  }

  getList(empresa: EmpresaModel): Observable<EmpresaModel>{
    let params = new HttpParams();
    if (empresa.id != null) { params = params.append('id', empresa.id.toString()); }
    if (empresa.descripcion != null) { params = params.append('descripcion', empresa.descripcion.toString()); }
    if (empresa.rFC != null) { params = params.append('rFC', empresa.rFC.toString()); }
    if (empresa.razonSocial != null) { params = params.append('razonSocial', empresa.razonSocial.toString()); }
    if (empresa.constrasenaVUCEM != null) { params = params.append('constrasenaVUCEM', empresa.constrasenaVUCEM.toString()); }
    if (empresa.tokenWEBVUCEM != null) { params = params.append('tokenWEBVUCEM', empresa.tokenWEBVUCEM.toString()); }
    if (empresa.correo != null) { params = params.append('correo', empresa.correo.toString()); }
    if (empresa.expeditionPlaceSandbox != null) { params = params.append('expeditionPlaceSandbox', empresa.expeditionPlaceSandbox.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/empresa/list`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(empresa: EmpresaModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/empresa`;
    const res = this.http.post(url, {
      descripcion: empresa.descripcion,
      rFC: empresa.rFC,
      razonSocial: empresa.razonSocial,
      constrasenaVUCEM: empresa.constrasenaVUCEM,
      tokenWEBVUCEM: empresa.tokenWEBVUCEM,
      vigencia: empresa.vigencia,
      correo: empresa.correo,
      usuarioCreacionId: empresa.usuarioCreacionId,
      fechaCreacion: empresa.fechaCreacion,
      usuarioModificacionId: empresa.usuarioModificacionId,
      fechaModificacion: empresa.fechaModificacion,
      usuarioBajaId: empresa.usuarioBajaId,
      fechaBaja: empresa.fechaBaja,
      baja: empresa.baja,
      expeditionPlace: empresa.expeditionPlace,
      expeditionPlaceSandbox: empresa.expeditionPlaceSandbox
     });
    return res;
  }

  update(empresa: EmpresaModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/empresa`;
    const res = this.http.put(url, {
      id: empresa.id,
      descripcion: empresa.descripcion,
      rFC: empresa.rFC,
      razonSocial: empresa.razonSocial,
      constrasenaVUCEM: empresa.constrasenaVUCEM,
      tokenWEBVUCEM: empresa.tokenWEBVUCEM,
      vigencia: empresa.vigencia,
      correo: empresa.correo,
      usuarioCreacionId: empresa.usuarioCreacionId,
      fechaCreacion: empresa.fechaCreacion,
      usuarioModificacionId: empresa.usuarioModificacionId,
      fechaModificacion: empresa.fechaModificacion,
      usuarioBajaId: empresa.usuarioBajaId,
      fechaBaja: empresa.fechaBaja,
      baja: empresa.baja,
      expeditionPlace: empresa.expeditionPlace,
      expeditionPlaceSandbox: empresa.expeditionPlaceSandbox
    });
    return res;
  }

  enable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/empresa/enable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  disable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/empresa/disable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/empresa/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

