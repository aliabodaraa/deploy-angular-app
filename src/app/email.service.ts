import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
}) //We will need this decorator only if this service have dependencies in its constructor.
export class EmailService {
  constructor() {}
}
