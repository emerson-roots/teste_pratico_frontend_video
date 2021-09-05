import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { MOVIMENTACAO_CONTEINER_API } from '../config/api.config';
import { MovimentacaoConteinerDTO } from '../dto/movimetacao-conteiner.dto';

@Injectable()
export class MovimentacaoConteinerService {

  constructor(private http: HttpClient) { }


  save(obj: MovimentacaoConteinerDTO) {

    if (obj.id == null) {
      return this.http.post(
        `${MOVIMENTACAO_CONTEINER_API.baseUrl}`,
        obj,
        {
          observe: 'response',
          responseType: 'text'
        }
      );
    } else {
      return this.http.put(`${MOVIMENTACAO_CONTEINER_API.baseUrl}`, obj)
    }
  }

  findAll(): Observable<MovimentacaoConteinerDTO[]> {
    return this.http.get<MovimentacaoConteinerDTO[]>(`${MOVIMENTACAO_CONTEINER_API.baseUrl}`);
  }

  loadById(id: number) {
    return this.http.get(`${MOVIMENTACAO_CONTEINER_API.baseUrl}/${id}`).pipe(take(1));
  }

  delete(id: number) {
    return this.http.delete(`${MOVIMENTACAO_CONTEINER_API.baseUrl}/${id}`);
  }

  getTipoMovimentacoes(){
    return this.http.get(`${MOVIMENTACAO_CONTEINER_API.baseUrl}/tipo_movimentacoes`).pipe(take(1));
  }

  getRelatorio(){
    return this.http.get(`${MOVIMENTACAO_CONTEINER_API.baseUrl}/return`).pipe(take(1));
  }

}
