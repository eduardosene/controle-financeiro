import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Spend } from './spend.model';

@Injectable({
  providedIn: 'root',
})
export class SpendsService {
  baseUrl = 'http://localhost:3001/spends';
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['msg-success'],
    });
  }
  read(): Observable<Spend[]> {
    return this.http.get<Spend[]>(this.baseUrl);
  }
  create(spend: Spend): Observable<Spend[]> {
    return this.http.post<Spend[]>(this.baseUrl, spend);
  }
}
