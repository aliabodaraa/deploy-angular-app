import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}
  getOrders() {
    let headers = new HttpHeaders();
    let token = localStorage.getItem('JWT_Token');
    headers = headers.append('Authorization', 'Bearer' + token);
    return this.http.get<any[]>('http://localhost:3000/orders', {
      headers,
      observe: 'body',
    }); // using json-server
  }
}
