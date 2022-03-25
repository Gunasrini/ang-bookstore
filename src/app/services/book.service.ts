import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _httpClient: HttpClient, private _auth: AuthService) { }


  saveBooks(books: any[]): Observable<any> {
    const tk = this._auth.getToken();
    return this._httpClient.post("https://boostore-f445e-default-rtdb.firebaseio.com/data.json?auth=" + tk, books);
  }


  getBooks() {
    const tk = this._auth.getToken();
    return this._httpClient.get("https://boostore-f445e-default-rtdb.firebaseio.com/data.json?auth=" + tk);
  }


}
