import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FacturaGlobalDetalleModel } from 'src/app/models/amcoderc_dev_Jaks/factura-global-detalle.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaGlobalDetalleService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalDetalle/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(facturaGlobalDetalle: FacturaGlobalDetalleModel): Observable<FacturaGlobalDetalleModel>{
    let params = new HttpParams();
    if (facturaGlobalDetalle.id != null) { params = params.append('id', facturaGlobalDetalle.id.toString()); }
    if (facturaGlobalDetalle.descripcion != null) { params = params.append('descripcion', facturaGlobalDetalle.descripcion.toString()); }
    if (facturaGlobalDetalle.productCode != null) { params = params.append('productCode', facturaGlobalDetalle.productCode.toString()); }
    if (facturaGlobalDetalle.identificationNumber != null) { params = params.append('identificationNumber', facturaGlobalDetalle.identificationNumber.toString()); }
    if (facturaGlobalDetalle.description != null) { params = params.append('description', facturaGlobalDetalle.description.toString()); }
    if (facturaGlobalDetalle.unitCode != null) { params = params.append('unitCode', facturaGlobalDetalle.unitCode.toString()); }
    if (facturaGlobalDetalle.unit != null) { params = params.append('unit', facturaGlobalDetalle.unit.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalDetalle`;
    const res = this.http.get(url, { params });
    return res;
  }

  getList(facturaGlobalDetalle: FacturaGlobalDetalleModel): Observable<FacturaGlobalDetalleModel>{
    let params = new HttpParams();
    if (facturaGlobalDetalle.id != null) { params = params.append('id', facturaGlobalDetalle.id.toString()); }
    if (facturaGlobalDetalle.descripcion != null) { params = params.append('descripcion', facturaGlobalDetalle.descripcion.toString()); }
    if (facturaGlobalDetalle.productCode != null) { params = params.append('productCode', facturaGlobalDetalle.productCode.toString()); }
    if (facturaGlobalDetalle.identificationNumber != null) { params = params.append('identificationNumber', facturaGlobalDetalle.identificationNumber.toString()); }
    if (facturaGlobalDetalle.description != null) { params = params.append('description', facturaGlobalDetalle.description.toString()); }
    if (facturaGlobalDetalle.unitCode != null) { params = params.append('unitCode', facturaGlobalDetalle.unitCode.toString()); }
    if (facturaGlobalDetalle.unit != null) { params = params.append('unit', facturaGlobalDetalle.unit.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalDetalle/list`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(facturaGlobalDetalle: FacturaGlobalDetalleModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalDetalle`;
    const res = this.http.post(url, {
      descripcion: facturaGlobalDetalle.descripcion,
      facturaGlobalId: facturaGlobalDetalle.facturaGlobalId,
      productCode: facturaGlobalDetalle.productCode,
      identificationNumber: facturaGlobalDetalle.identificationNumber,
      description: facturaGlobalDetalle.description,
      unitCode: facturaGlobalDetalle.unitCode,
      unitPrice: facturaGlobalDetalle.unitPrice,
      unit: facturaGlobalDetalle.unit,
      quantity: facturaGlobalDetalle.quantity,
      subtotal: facturaGlobalDetalle.subtotal,
      total: facturaGlobalDetalle.total,
      discount: facturaGlobalDetalle.discount,
      discountVal: facturaGlobalDetalle.discountVal
     });
    return res;
  }

  update(facturaGlobalDetalle: FacturaGlobalDetalleModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalDetalle`;
    const res = this.http.put(url, {
      id: facturaGlobalDetalle.id,
      descripcion: facturaGlobalDetalle.descripcion,
      facturaGlobalId: facturaGlobalDetalle.facturaGlobalId,
      productCode: facturaGlobalDetalle.productCode,
      identificationNumber: facturaGlobalDetalle.identificationNumber,
      description: facturaGlobalDetalle.description,
      unitCode: facturaGlobalDetalle.unitCode,
      unitPrice: facturaGlobalDetalle.unitPrice,
      unit: facturaGlobalDetalle.unit,
      quantity: facturaGlobalDetalle.quantity,
      subtotal: facturaGlobalDetalle.subtotal,
      total: facturaGlobalDetalle.total,
      discount: facturaGlobalDetalle.discount,
      discountVal: facturaGlobalDetalle.discountVal
    });
    return res;
  }

  enable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalDetalle/enable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  disable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalDetalle/disable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobalDetalle/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

