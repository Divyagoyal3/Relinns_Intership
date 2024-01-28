import { Component } from '@angular/core';
import { Book } from './app/landing/book';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HTTP Solutions';
  softBooks: Book[] =[];
  constructor(private bookservice :BookService){}
  ngOnInit(){
    this.getsofBooks();
  }
  getsofBooks()
  {
    this.bookservice.getBooksFromStore().subscribe((books :Book[]) => {console.log(books)});
  }
}
