import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FacturaGlobalDetalleTaxesModel } from 'src/app/models/amcoderc_dev_Jaks/factura-global-detalle-taxes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaGlobalDetalleTaxesService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalDetalleTaxes/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(facturaGlobalDetalleTaxes: FacturaGlobalDetalleTaxesModel): Observable<FacturaGlobalDetalleTaxesModel>{
    let params = new HttpParams();
    if (facturaGlobalDetalleTaxes.id != null) { params = params.append('id', facturaGlobalDetalleTaxes.id.toString()); }
    if (facturaGlobalDetalleTaxes.descripcion != null) { params = params.append('descripcion', facturaGlobalDetalleTaxes.descripcion.toString()); }
    if (facturaGlobalDetalleTaxes.name != null) { params = params.append('name', facturaGlobalDetalleTaxes.name.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalDetalleTaxes`;
    const res = this.http.get(url, { params });
    return res;
  }

  getList(facturaGlobalDetalleTaxes: FacturaGlobalDetalleTaxesModel): Observable<FacturaGlobalDetalleTaxesModel>{
    let params = new HttpParams();
    if (facturaGlobalDetalleTaxes.id != null) { params = params.append('id', facturaGlobalDetalleTaxes.id.toString()); }
    if (facturaGlobalDetalleTaxes.descripcion != null) { params = params.append('descripcion', facturaGlobalDetalleTaxes.descripcion.toString()); }
    if (facturaGlobalDetalleTaxes.name != null) { params = params.append('name', facturaGlobalDetalleTaxes.name.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalDetalleTaxes/list`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(facturaGlobalDetalleTaxes: FacturaGlobalDetalleTaxesModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalDetalleTaxes`;
    const res = this.http.post(url, {
      descripcion: facturaGlobalDetalleTaxes.descripcion,
      facturaGlobalDetalleId: facturaGlobalDetalleTaxes.facturaGlobalDetalleId,
      name: facturaGlobalDetalleTaxes.name,
      base: facturaGlobalDetalleTaxes.base,
      rate: facturaGlobalDetalleTaxes.rate,
      isRetention: facturaGlobalDetalleTaxes.isRetention,
      total: facturaGlobalDetalleTaxes.total
     });
    return res;
  }

  update(facturaGlobalDetalleTaxes: FacturaGlobalDetalleTaxesModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalDetalleTaxes`;
    const res = this.http.put(url, {
      id: facturaGlobalDetalleTaxes.id,
      descripcion: facturaGlobalDetalleTaxes.descripcion,
      facturaGlobalDetalleId: facturaGlobalDetalleTaxes.facturaGlobalDetalleId,
      name: facturaGlobalDetalleTaxes.name,
      base: facturaGlobalDetalleTaxes.base,
      rate: facturaGlobalDetalleTaxes.rate,
      isRetention: facturaGlobalDetalleTaxes.isRetention,
      total: facturaGlobalDetalleTaxes.total
    });
    return res;
  }

  enable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalDetalleTaxes/enable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  disable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalDetalleTaxes/disable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalDetalleTaxes/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

