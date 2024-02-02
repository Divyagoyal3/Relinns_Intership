import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './app/landing/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
bookUrl = "api/books";
  constructor(private http :HttpClient) { }
  
  getBooksFromStore():Observable<Book[]>{
  return this.http.get<Book[]>(this.bookUrl);
  }
}
