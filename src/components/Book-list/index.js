import React from "react";
import './index.css'
import BookListItem from "../Book-list-item";

function BookList({books}) {
  return (
    <ul className='book-list'>
      {books.map(book => <li key={book.id}><BookListItem book={book}/></li>)}
    </ul>
  );
}

export default BookList
