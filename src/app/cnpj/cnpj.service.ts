import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CnpjService {
  private apiUrl = 'https://brasilapi.com.br/api/cnpj/v1/';

  constructor(private http: HttpClient) {}

  getCnpj(cnpj: string) {
    const url = `${this.apiUrl}${cnpj.replace(/[^\d]+/g, '')}`;
    return this.http.get(url);
  }
}