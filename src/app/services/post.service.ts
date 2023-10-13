import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
@Injectable({
  //instead of put this service in providers array in app.module.ts
  providedIn: 'root',
})
export class PostService extends DataService {
  constructor(http: HttpClient) {
    super('http://jsonplaceholder.typicode.com/posts', http);
  }
}
