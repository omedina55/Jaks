import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FacturaGlobalEventoModel } from 'src/app/models/amcoderc_dev_Jaks/factura-global-evento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaGlobalEventoService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalEvento/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(facturaGlobalEvento: FacturaGlobalEventoModel): Observable<FacturaGlobalEventoModel>{
    let params = new HttpParams();
    if (facturaGlobalEvento.id != null) { params = params.append('id', facturaGlobalEvento.id.toString()); }
    if (facturaGlobalEvento.descripcion != null) { params = params.append('descripcion', facturaGlobalEvento.descripcion.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalEvento`;
    const res = this.http.get(url, { params });
    return res;
  }

  getList(facturaGlobalEvento: FacturaGlobalEventoModel): Observable<FacturaGlobalEventoModel>{
    let params = new HttpParams();
    if (facturaGlobalEvento.id != null) { params = params.append('id', facturaGlobalEvento.id.toString()); }
    if (facturaGlobalEvento.descripcion != null) { params = params.append('descripcion', facturaGlobalEvento.descripcion.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalEvento/list`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(facturaGlobalEvento: FacturaGlobalEventoModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalEvento`;
    const res = this.http.post(url, {
      descripcion: facturaGlobalEvento.descripcion,
      facturaGlobalId: facturaGlobalEvento.facturaGlobalId,
      eventoTipoId: facturaGlobalEvento.eventoTipoId,
      usuarioId: facturaGlobalEvento.usuarioId,
      fecha: facturaGlobalEvento.fecha
     });
    return res;
  }

  update(facturaGlobalEvento: FacturaGlobalEventoModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalEvento`;
    const res = this.http.put(url, {
      id: facturaGlobalEvento.id,
      descripcion: facturaGlobalEvento.descripcion,
      facturaGlobalId: facturaGlobalEvento.facturaGlobalId,
      eventoTipoId: facturaGlobalEvento.eventoTipoId,
      usuarioId: facturaGlobalEvento.usuarioId,
      fecha: facturaGlobalEvento.fecha
    });
    return res;
  }

  enable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalEvento/enable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  disable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalEvento/disable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalEvento/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

