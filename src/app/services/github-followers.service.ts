import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  //instead of put this service in providers array in app.module.ts
  providedIn: 'root',
})
export class GithubFollowersService extends DataService {
  constructor(http: HttpClient) {
    super('https://api.github.com/users/mosh-hamedani/followers', http);
  }
}
