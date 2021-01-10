import React, {useEffect} from "react";
import {connect} from 'react-redux'
import withBookstoreService from '../Hoc'
import {fetchBooks} from '../../actions'
import compose from "../../utils/compose";
import Spinner from "../Spinner";
import ErrorIndicator from "../Error-Indicator";
import BookList from "../Book-list";

function BookListContainer({books, loading, error, fetchBooks}) {
  useEffect(() => {
    fetchBooks()
  }, [])
  if (loading) {
    return <Spinner/>
  }
  if (error) {
    return <ErrorIndicator/>
  }
  return (
    <BookList books={books}/>
  );
}

const mapStateToProps = ({books, loading, error}) => {
  return {books, loading, error}
}

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)
