import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EventoTipoModel } from 'src/app/models/amcoderc_dev_Jaks/evento-tipo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoTipoService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/eventoTipo/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(eventoTipo: EventoTipoModel): Observable<EventoTipoModel>{
    let params = new HttpParams();
    if (eventoTipo.id != null) { params = params.append('id', eventoTipo.id.toString()); }
    if (eventoTipo.descripcion != null) { params = params.append('descripcion', eventoTipo.descripcion.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/eventoTipo`;
    const res = this.http.get(url, { params });
    return res;
  }

  getList(eventoTipo: EventoTipoModel): Observable<EventoTipoModel>{
    let params = new HttpParams();
    if (eventoTipo.id != null) { params = params.append('id', eventoTipo.id.toString()); }
    if (eventoTipo.descripcion != null) { params = params.append('descripcion', eventoTipo.descripcion.toString()); }

    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/eventoTipo/list`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(eventoTipo: EventoTipoModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/eventoTipo`;
    const res = this.http.post(url, {
      id: eventoTipo.id,
      descripcion: eventoTipo.descripcion,
      baja: eventoTipo.baja
     });
    return res;
  }

  update(eventoTipo: EventoTipoModel) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/eventoTipo`;
    const res = this.http.put(url, {
      id: eventoTipo.id,
      descripcion: eventoTipo.descripcion,
      baja: eventoTipo.baja
    });
    return res;
  }

  enable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/eventoTipo/enable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  disable(id: number) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/eventoTipo/disable`;
    const res = this.http.put(url, {
      id: id
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `amcoderc_dev_Jaks/eventoTipo/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

