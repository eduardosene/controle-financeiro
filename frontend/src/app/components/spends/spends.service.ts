import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Spend } from './spend.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpendsService {
  baseUrl = 'http://localhost:3001/spends';

  private url(id: number) {
    const url = `${this.baseUrl}/${id} `;
    return url;
  }

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-sucess'],
    });
  }
  errorHandler(error: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  read(): Observable<Spend[]> {
    return this.http.get<Spend[]>(this.baseUrl);
  }
  create(spend: Spend): Observable<Spend> {
    return this.http.post<Spend>(this.baseUrl, spend).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  readById(id: number): Observable<Spend> {
    return this.http.get<Spend>(this.url(id)).pipe(
      map((obj) => obj),
      catchError((error) => this.errorHandler(error))
    );
  }
  update(spend: Spend): Observable<Spend> {
    return this.http.put<Spend>(this.url(Number(spend.id)), spend).pipe(
      map((obj) => obj),
      catchError((error) => this.errorHandler(error))
    );
  }
  delete(id: number): Observable<Spend> {
    return this.http.delete<Spend>(this.url(id)).pipe(
      map((obj) => obj),
      catchError((error) => this.errorHandler(error))
    );
  }
}
