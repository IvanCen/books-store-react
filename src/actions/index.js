export const booksLoaded = (payload) => ({type: 'FETCH_BOOKS_SUCCESS', payload})
export const booksError = (payload) => ({type: 'FETCH_BOOKS_FAILURE', payload})
export const booksRequested = () => ({type: 'FETCH_BOOKS_REQUEST'})
export const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested())
  bookstoreService.getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => dispatch(booksError(err)))
}
