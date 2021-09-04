import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FacturaGlobalModel } from 'src/app/models/amcoderc_dev_Jaks/factura-global.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaGlobalService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobal/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(facturaGlobal: FacturaGlobalModel): Observable<FacturaGlobalModel>{
    let params = new HttpParams();
    if (facturaGlobal.id != null) { params = params.append('id', facturaGlobal.id.toString()); }
    if (facturaGlobal.descripcion != null) { params = params.append('descripcion', facturaGlobal.descripcion.toString()); }
    if (facturaGlobal.currency != null) { params = params.append('currency', facturaGlobal.currency.toString()); }
    if (facturaGlobal.paymentConditions != null) { params = params.append('paymentConditions', facturaGlobal.paymentConditions.toString()); }
    if (facturaGlobal.orderNumber != null) { params = params.append('orderNumber', facturaGlobal.orderNumber.toString()); }
    if (facturaGlobal.folio != null) { params = params.append('folio', facturaGlobal.folio.toString()); }
    if (facturaGlobal.cfdiType != null) { params = params.append('cfdiType', facturaGlobal.cfdiType.toString()); }
    if (facturaGlobal.paymentForm != null) { params = params.append('paymentForm', facturaGlobal.paymentForm.toString()); }
    if (facturaGlobal.paymentMethod != null) { params = params.append('paymentMethod', facturaGlobal.paymentMethod.toString()); }
    if (facturaGlobal.receiver__Rfc != null) { params = params.append('receiver__Rfc', facturaGlobal.receiver__Rfc.toString()); }
    if (facturaGlobal.receiver__Name != null) { params = params.append('receiver__Name', facturaGlobal.receiver__Name.toString()); }
    if (facturaGlobal.receiver__CfdiUse != null) { params = params.append('receiver__CfdiUse', facturaGlobal.receiver__CfdiUse.toString()); }
    if (facturaGlobal.expeditionPlaceSandbox != null) { params = params.append('expeditionPlaceSandbox', facturaGlobal.expeditionPlaceSandbox.toString()); }
    if (facturaGlobal.xmlInternalId != null) { params = params.append('xmlInternalId', facturaGlobal.xmlInternalId.toString()); }
    if (facturaGlobal.pdfInternalId != null) { params = params.append('pdfInternalId', facturaGlobal.pdfInternalId.toString()); }
    if (facturaGlobal.nombreArchivoSandbox != null) { params = params.append('nombreArchivoSandbox', facturaGlobal.nombreArchivoSandbox.toString()); }
    if (facturaGlobal.nombreArchivo != null) { params = params.append('nombreArchivo', facturaGlobal.nombreArchivo.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobal`;
    const res = this.http.get(url, { params });
    return res;
  }

  getList(facturaGlobal: FacturaGlobalModel): Observable<FacturaGlobalModel>{
    let params = new HttpParams();
    if (facturaGlobal.id != null) { params = params.append('id', facturaGlobal.id.toString()); }
    if (facturaGlobal.descripcion != null) { params = params.append('descripcion', facturaGlobal.descripcion.toString()); }
    if (facturaGlobal.currency != null) { params = params.append('currency', facturaGlobal.currency.toString()); }
    if (facturaGlobal.paymentConditions != null) { params = params.append('paymentConditions', facturaGlobal.paymentConditions.toString()); }
    if (facturaGlobal.orderNumber != null) { params = params.append('orderNumber', facturaGlobal.orderNumber.toString()); }
    if (facturaGlobal.folio != null) { params = params.append('folio', facturaGlobal.folio.toString()); }
    if (facturaGlobal.cfdiType != null) { params = params.append('cfdiType', facturaGlobal.cfdiType.toString()); }
    if (facturaGlobal.paymentForm != null) { params = params.append('paymentForm', facturaGlobal.paymentForm.toString()); }
    if (facturaGlobal.paymentMethod != null) { params = params.append('paymentMethod', facturaGlobal.paymentMethod.toString()); }
    if (facturaGlobal.receiver__Rfc != null) { params = params.append('receiver__Rfc', facturaGlobal.receiver__Rfc.toString()); }
    if (facturaGlobal.receiver__Name != null) { params = params.append('receiver__Name', facturaGlobal.receiver__Name.toString()); }
    if (facturaGlobal.receiver__CfdiUse != null) { params = params.append('receiver__CfdiUse', facturaGlobal.receiver__CfdiUse.toString()); }
    if (facturaGlobal.expeditionPlaceSandbox != null) { params = params.append('expeditionPlaceSandbox', facturaGlobal.expeditionPlaceSandbox.toString()); }
    if (facturaGlobal.xmlInternalId != null) { params = params.append('xmlInternalId', facturaGlobal.xmlInternalId.toString()); }
    if (facturaGlobal.pdfInternalId != null) { params = params.append('pdfInternalId', facturaGlobal.pdfInternalId.toString()); }
    if (facturaGlobal.nombreArchivoSandbox != null) { params = params.append('nombreArchivoSandbox', facturaGlobal.nombreArchivoSandbox.toString()); }
    if (facturaGlobal.nombreArchivo != null) { params = params.append('nombreArchivo', facturaGlobal.nombreArchivo.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobal/list`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(facturaGlobal: FacturaGlobalModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobal`;
    const res = this.http.post(url, {
      descripcion: facturaGlobal.descripcion,
      empresaId: facturaGlobal.empresaId,
      periodoId: facturaGlobal.periodoId,
      fechaInicio: facturaGlobal.fechaInicio,
      fechaFin: facturaGlobal.fechaFin,
      completadaSandbox: facturaGlobal.completadaSandbox,
      completada: facturaGlobal.completada,
      currency: facturaGlobal.currency,
      expeditionPlace: facturaGlobal.expeditionPlace,
      paymentConditions: facturaGlobal.paymentConditions,
      orderNumber: facturaGlobal.orderNumber,
      folio: facturaGlobal.folio,
      cfdiType: facturaGlobal.cfdiType,
      paymentForm: facturaGlobal.paymentForm,
      paymentMethod: facturaGlobal.paymentMethod,
      receiver__Rfc: facturaGlobal.receiver__Rfc,
      receiver__Name: facturaGlobal.receiver__Name,
      receiver__CfdiUse: facturaGlobal.receiver__CfdiUse,
      cancelada: facturaGlobal.cancelada,
      intento: facturaGlobal.intento,
      usuarioCreacionId: facturaGlobal.usuarioCreacionId,
      expeditionPlaceSandbox: facturaGlobal.expeditionPlaceSandbox,
      xmlInternalId: facturaGlobal.xmlInternalId,
      pdfInternalId: facturaGlobal.pdfInternalId,
      nombreArchivoSandbox: facturaGlobal.nombreArchivoSandbox,
      nombreArchivo: facturaGlobal.nombreArchivo,
      usuarioAprobadorId: facturaGlobal.usuarioAprobadorId
     });
    return res;
  }

  update(facturaGlobal: FacturaGlobalModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobal`;
    const res = this.http.put(url, {
      id: facturaGlobal.id,
      descripcion: facturaGlobal.descripcion,
      empresaId: facturaGlobal.empresaId,
      periodoId: facturaGlobal.periodoId,
      fechaInicio: facturaGlobal.fechaInicio,
      fechaFin: facturaGlobal.fechaFin,
      completadaSandbox: facturaGlobal.completadaSandbox,
      completada: facturaGlobal.completada,
      currency: facturaGlobal.currency,
      expeditionPlace: facturaGlobal.expeditionPlace,
      paymentConditions: facturaGlobal.paymentConditions,
      orderNumber: facturaGlobal.orderNumber,
      folio: facturaGlobal.folio,
      cfdiType: facturaGlobal.cfdiType,
      paymentForm: facturaGlobal.paymentForm,
      paymentMethod: facturaGlobal.paymentMethod,
      receiver__Rfc: facturaGlobal.receiver__Rfc,
      receiver__Name: facturaGlobal.receiver__Name,
      receiver__CfdiUse: facturaGlobal.receiver__CfdiUse,
      cancelada: facturaGlobal.cancelada,
      intento: facturaGlobal.intento,
      usuarioCreacionId: facturaGlobal.usuarioCreacionId,
      expeditionPlaceSandbox: facturaGlobal.expeditionPlaceSandbox,
      xmlInternalId: facturaGlobal.xmlInternalId,
      pdfInternalId: facturaGlobal.pdfInternalId,
      nombreArchivoSandbox: facturaGlobal.nombreArchivoSandbox,
      nombreArchivo: facturaGlobal.nombreArchivo,
      usuarioAprobadorId: facturaGlobal.usuarioAprobadorId
    });
    return res;
  }

  enable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobal/enable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  disable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobal/disable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/facturaGlobal/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

