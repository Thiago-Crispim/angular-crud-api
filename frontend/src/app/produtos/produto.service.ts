
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private readonly apiUrl = 'http://localhost:3000/api/products';

  constructor(private readonly http: HttpClient) {}

  // GET - Listar todos os produtos
  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  // GET - Buscar produto por ID
  buscarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }

  // POST - Cadastrar novo produto
  cadastrar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  // PUT - Atualizar produto existente
  atualizar(id: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.apiUrl}/${id}`, produto);
  }

  // DELETE - Excluir produto
  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
