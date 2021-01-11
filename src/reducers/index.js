const defaultState = {
  error: null,
  books: [],
  loading: true,
  cartItems: [],
  orderTotal: 0,
}

const updateCartItems = (cartItems, item, index) => {
  if (index === -1) {
    return [...cartItems, item]
  }
  return [
    ...cartItems.slice(0, index),
    item,
    ...cartItems.slice(index + 1),
  ]
}

const updateItem = (book, item = {}) => {
  const {id = book.id, title = book.title, count = 0, total = 0} = item
  return {
    id,
    title,
    price: total + book.price,
    count: count + 1
  }
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      }
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      }
    case 'BOOK_ADDED_TO_CART':
      const bookId = action.payload
      const book = state.books.find(book => book.id === bookId)
      const itemIndex = state.cartItems.findIndex(({id}) => id === bookId)
      const item = state.cartItems[itemIndex]
      const newItem = updateItem(book, item)
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
      }
    case 'BOOK_REMOVE_TO_CART':
      return (() => {
        const bookId = action.payload
        const itemIndex = state.cartItems.findIndex(({id}) => id === bookId)

        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, itemIndex),
            ...state.cartItems.slice(itemIndex + 1),
          ]
        }
      })()
    default:
      return state
  }
}
