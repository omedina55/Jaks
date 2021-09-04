import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PeriodoEmpresaModel } from 'src/app/models/amcoderc_dev_Jaks/periodo-empresa.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeriodoEmpresaService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/periodoEmpresa/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(periodoEmpresa: PeriodoEmpresaModel): Observable<PeriodoEmpresaModel>{
    let params = new HttpParams();
    if (periodoEmpresa.id != null) { params = params.append('id', periodoEmpresa.id.toString()); }
    if (periodoEmpresa.descripcion != null) { params = params.append('descripcion', periodoEmpresa.descripcion.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/periodoEmpresa`;
    const res = this.http.get(url, { params });
    return res;
  }

  getList(periodoEmpresa: PeriodoEmpresaModel): Observable<PeriodoEmpresaModel>{
    let params = new HttpParams();
    if (periodoEmpresa.id != null) { params = params.append('id', periodoEmpresa.id.toString()); }
    if (periodoEmpresa.descripcion != null) { params = params.append('descripcion', periodoEmpresa.descripcion.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/periodoEmpresa/list`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(periodoEmpresa: PeriodoEmpresaModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/periodoEmpresa`;
    const res = this.http.post(url, {
      descripcion: periodoEmpresa.descripcion,
      generada: periodoEmpresa.generada,
      periodo: periodoEmpresa.periodo,
      mes: periodoEmpresa.mes,
      fechaInicio: periodoEmpresa.fechaInicio,
      fechaFin: periodoEmpresa.fechaFin,
      empresaId: periodoEmpresa.empresaId
     });
    return res;
  }

  update(periodoEmpresa: PeriodoEmpresaModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/periodoEmpresa`;
    const res = this.http.put(url, {
      id: periodoEmpresa.id,
      descripcion: periodoEmpresa.descripcion,
      generada: periodoEmpresa.generada,
      periodo: periodoEmpresa.periodo,
      mes: periodoEmpresa.mes,
      fechaInicio: periodoEmpresa.fechaInicio,
      fechaFin: periodoEmpresa.fechaFin,
      empresaId: periodoEmpresa.empresaId
    });
    return res;
  }

  enable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/periodoEmpresa/enable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  disable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/periodoEmpresa/disable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/periodoEmpresa/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

