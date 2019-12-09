import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = [
    {id: 1, name: 'Harry Potter'},
    {id: 2, name: 'The Lord of the Rings'},
    {id: 3, name: 'The Catcher in the Rye'},
    {id: 4, name: 'Metamorphosis'},
    {id: 5, name: 'Fight Club'},
    {id: 6, name: 'The Legend of Zelda'},
    {id: 7, name: 'Star Wars'}
  ];
  book: any;

  constructor() { }

  ngOnInit() {
  }

  onSelect(id: number) {
    this.book = this.books.find((elem) => {
      if(elem.id === id) {
        return elem;
      }
    })
  }
}
