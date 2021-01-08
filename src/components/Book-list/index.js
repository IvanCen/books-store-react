import React, {useEffect} from "react";
import {connect} from 'react-redux'
import './index.css'
import BookListItem from "../Book-list-item";
import withBookstoreService from '../Hoc'
import {booksLoaded} from '../../actions'
import compose from "../../utils/compose";

function BookList({books, bookstoreService, booksLoaded}) {
  useEffect(() => {
    const data = bookstoreService.getBooks()
    booksLoaded(data)
  }, [])
  return (
    <ul className='book-list'>
      {books.map(book => <li key={book.id}><BookListItem book={book}/></li>)}
    </ul>
  );
}

const mapStateToProps = ({books}) => {
  return {books}
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, {booksLoaded})
)(BookList)
