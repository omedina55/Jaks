import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NsConsultaModel } from 'src/app/models/amcoderc_dev_Jaks/ns-consulta.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NsConsultaService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/nsConsulta/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(nsConsulta: NsConsultaModel): Observable<NsConsultaModel>{
    let params = new HttpParams();
    if (nsConsulta.id != null) { params = params.append('id', nsConsulta.id.toString()); }
    if (nsConsulta.tranId != null) { params = params.append('tranId', nsConsulta.tranId.toString()); }
    if (nsConsulta.cfdiTimbrada != null) { params = params.append('cfdiTimbrada', nsConsulta.cfdiTimbrada.toString()); }
    if (nsConsulta.transactionType != null) { params = params.append('transactionType', nsConsulta.transactionType.toString()); }
    if (nsConsulta.ticketCaja != null) { params = params.append('ticketCaja', nsConsulta.ticketCaja.toString()); }
    if (nsConsulta.relatedTranId != null) { params = params.append('relatedTranId', nsConsulta.relatedTranId.toString()); }
    if (nsConsulta.name != null) { params = params.append('name', nsConsulta.name.toString()); }
    if (nsConsulta.status != null) { params = params.append('status', nsConsulta.status.toString()); }
    if (nsConsulta.subtotalFormato != null) { params = params.append('subtotalFormato', nsConsulta.subtotalFormato.toString()); }
    if (nsConsulta.accountNumber != null) { params = params.append('accountNumber', nsConsulta.accountNumber.toString()); }
    if (nsConsulta.typeName != null) { params = params.append('typeName', nsConsulta.typeName.toString()); }
    if (nsConsulta.amountTaxable != null) { params = params.append('amountTaxable', nsConsulta.amountTaxable.toString()); }
    if (nsConsulta.itemTypeName != null) { params = params.append('itemTypeName', nsConsulta.itemTypeName.toString()); }
    if (nsConsulta.rate != null) { params = params.append('rate', nsConsulta.rate.toString()); }
    if (nsConsulta.entityName != null) { params = params.append('entityName', nsConsulta.entityName.toString()); }
    if (nsConsulta.entityFullName != null) { params = params.append('entityFullName', nsConsulta.entityFullName.toString()); }
    if (nsConsulta.descuentoPorAplicar != null) { params = params.append('descuentoPorAplicar', nsConsulta.descuentoPorAplicar.toString()); }
    if (nsConsulta.otherRefNum != null) { params = params.append('otherRefNum', nsConsulta.otherRefNum.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/nsConsulta`;
    const res = this.http.get(url, { params });
    return res;
  }

  getList(nsConsulta: NsConsultaModel): Observable<NsConsultaModel>{
    let params = new HttpParams();
    if (nsConsulta.id != null) { params = params.append('id', nsConsulta.id.toString()); }
    if (nsConsulta.tranId != null) { params = params.append('tranId', nsConsulta.tranId.toString()); }
    if (nsConsulta.cfdiTimbrada != null) { params = params.append('cfdiTimbrada', nsConsulta.cfdiTimbrada.toString()); }
    if (nsConsulta.transactionType != null) { params = params.append('transactionType', nsConsulta.transactionType.toString()); }
    if (nsConsulta.ticketCaja != null) { params = params.append('ticketCaja', nsConsulta.ticketCaja.toString()); }
    if (nsConsulta.relatedTranId != null) { params = params.append('relatedTranId', nsConsulta.relatedTranId.toString()); }
    if (nsConsulta.name != null) { params = params.append('name', nsConsulta.name.toString()); }
    if (nsConsulta.status != null) { params = params.append('status', nsConsulta.status.toString()); }
    if (nsConsulta.subtotalFormato != null) { params = params.append('subtotalFormato', nsConsulta.subtotalFormato.toString()); }
    if (nsConsulta.accountNumber != null) { params = params.append('accountNumber', nsConsulta.accountNumber.toString()); }
    if (nsConsulta.typeName != null) { params = params.append('typeName', nsConsulta.typeName.toString()); }
    if (nsConsulta.amountTaxable != null) { params = params.append('amountTaxable', nsConsulta.amountTaxable.toString()); }
    if (nsConsulta.itemTypeName != null) { params = params.append('itemTypeName', nsConsulta.itemTypeName.toString()); }
    if (nsConsulta.rate != null) { params = params.append('rate', nsConsulta.rate.toString()); }
    if (nsConsulta.entityName != null) { params = params.append('entityName', nsConsulta.entityName.toString()); }
    if (nsConsulta.entityFullName != null) { params = params.append('entityFullName', nsConsulta.entityFullName.toString()); }
    if (nsConsulta.descuentoPorAplicar != null) { params = params.append('descuentoPorAplicar', nsConsulta.descuentoPorAplicar.toString()); }
    if (nsConsulta.otherRefNum != null) { params = params.append('otherRefNum', nsConsulta.otherRefNum.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/nsConsulta/list`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(nsConsulta: NsConsultaModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/nsConsulta`;
    const res = this.http.post(url, {
      facturaGlobalId: nsConsulta.facturaGlobalId,
      tranDate: nsConsulta.tranDate,
      tranId: nsConsulta.tranId,
      entityId: nsConsulta.entityId,
      cfdiTimbrada: nsConsulta.cfdiTimbrada,
      transactionType: nsConsulta.transactionType,
      ticketCaja: nsConsulta.ticketCaja,
      relatedTranId: nsConsulta.relatedTranId,
      name: nsConsulta.name,
      transactionId: nsConsulta.transactionId,
      status: nsConsulta.status,
      transactionOrder: nsConsulta.transactionOrder,
      amountForeign: nsConsulta.amountForeign,
      subtotalFormato: nsConsulta.subtotalFormato,
      accounId: nsConsulta.accounId,
      accountNumber: nsConsulta.accountNumber,
      typeName: nsConsulta.typeName,
      amountTaxable: nsConsulta.amountTaxable,
      taxItemId: nsConsulta.taxItemId,
      itemTypeName: nsConsulta.itemTypeName,
      rate: nsConsulta.rate,
      entityName: nsConsulta.entityName,
      entityFullName: nsConsulta.entityFullName,
      descuentoPorAplicar: nsConsulta.descuentoPorAplicar,
      otherRefNum: nsConsulta.otherRefNum
     });
    return res;
  }

  update(nsConsulta: NsConsultaModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/nsConsulta`;
    const res = this.http.put(url, {
      id: nsConsulta.id,
      facturaGlobalId: nsConsulta.facturaGlobalId,
      tranDate: nsConsulta.tranDate,
      tranId: nsConsulta.tranId,
      entityId: nsConsulta.entityId,
      cfdiTimbrada: nsConsulta.cfdiTimbrada,
      transactionType: nsConsulta.transactionType,
      ticketCaja: nsConsulta.ticketCaja,
      relatedTranId: nsConsulta.relatedTranId,
      name: nsConsulta.name,
      transactionId: nsConsulta.transactionId,
      status: nsConsulta.status,
      transactionOrder: nsConsulta.transactionOrder,
      amountForeign: nsConsulta.amountForeign,
      subtotalFormato: nsConsulta.subtotalFormato,
      accounId: nsConsulta.accounId,
      accountNumber: nsConsulta.accountNumber,
      typeName: nsConsulta.typeName,
      amountTaxable: nsConsulta.amountTaxable,
      taxItemId: nsConsulta.taxItemId,
      itemTypeName: nsConsulta.itemTypeName,
      rate: nsConsulta.rate,
      entityName: nsConsulta.entityName,
      entityFullName: nsConsulta.entityFullName,
      descuentoPorAplicar: nsConsulta.descuentoPorAplicar,
      otherRefNum: nsConsulta.otherRefNum
    });
    return res;
  }

  enable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/nsConsulta/enable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  disable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/nsConsulta/disable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/nsConsulta/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

