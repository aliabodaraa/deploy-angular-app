import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BadInput } from '../errors/BadInput';
import { AppError } from '../errors/AppError';
import { NotFoundError } from '../errors/NotFoundError';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/operators';
export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  createService(resource: any): Observable<any> {
    return this.http
      .post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  updateService(resource: any): Observable<any> {
    return this.http.put(
      `${this.url}/${resource.id}`,
      JSON.stringify(resource)
    );
  }

  deleteService(id: number): Observable<any> {
    return this.http
      .delete(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400)
      return throwError(() => new BadInput(error.message));

    if (error.status === 404)
      return throwError(() => new NotFoundError(error.message));

    return throwError(() => new AppError(error.message));
  }
}
