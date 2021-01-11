import React from "react";
import './index.css'
import BookListItem from "../Book-list-item";

function BookList({books, onAddedToCart}) {
  return (
    <ul className='book-list'>
      {books.map(book => <li key={book.id}><BookListItem onAddedToCart={()=>onAddedToCart(book.id)} book={book}/></li>)}
    </ul>
  );
}

export default BookList
