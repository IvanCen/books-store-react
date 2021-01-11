export const booksLoaded = (newBooks) => ({type: 'FETCH_BOOKS_SUCCESS', payload: newBooks})
export const booksError = (error) => ({type: 'FETCH_BOOKS_FAILURE', payload: error})
export const booksRequested = () => ({type: 'FETCH_BOOKS_REQUEST'})
export const bookAddedToCart = (bookId) => ({type: 'BOOK_ADDED_TO_CART', payload: bookId})
export const bookRemoveToCart = (bookId) => ({type: 'BOOK_REMOVE_TO_CART', payload: bookId})
export const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested())
  bookstoreService.getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => dispatch(booksError(err)))
}

