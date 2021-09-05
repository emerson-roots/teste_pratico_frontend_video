import { take } from 'rxjs/operators';
import { CONTEINER_API } from './../config/api.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConteinerDTO } from '../dto/conteiner.dto';

@Injectable()
export class ConteinerService {

  constructor(private http: HttpClient) { }

  save(obj: ConteinerDTO) {

    if (obj.id == null) {
      return this.http.post(
        `${CONTEINER_API.baseUrl}`,
        obj,
        {
          observe: 'response',
          responseType: 'text'
        }
      );
    } else {
      return this.http.put(`${CONTEINER_API.baseUrl}`, obj)
    }
  }

  findAll(): Observable<ConteinerDTO[]> {
    return this.http.get<ConteinerDTO[]>(`${CONTEINER_API.baseUrl}`);
  }

  loadById(id: number) {
    return this.http.get(`${CONTEINER_API.baseUrl}/${id}`).pipe(take(1));
  }

  delete(id: number) {
    return this.http.delete(`${CONTEINER_API.baseUrl}/${id}`);
  }

  getTiposConteiner() {
    return this.http.get(`${CONTEINER_API.baseUrl}/tipos_conteiner`).pipe(take(1));
  }

  getStatusConteiner() {
    return this.http.get(`${CONTEINER_API.baseUrl}/status`).pipe(take(1));
  }

  getCategoriasConteiner() {
    return this.http.get(`${CONTEINER_API.baseUrl}/categorias`).pipe(take(1));
  }

}
