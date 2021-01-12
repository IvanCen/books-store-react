const updateShoppingCart = (state, action) => {
  if (!state) {
    return {
      cartItems: [],
      orderTotal: 0,
    }
  }
  switch (action.type) {
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1)
    case 'BOOK_REMOVE_ALL_TO_CART':
      const book = state.shoppingCart.cartItems.find(({id}) => id === action.payload)
      return updateOrder(state, action.payload, -book.count)
    case 'BOOK_REMOVE_TO_CART':
      return updateOrder(state, action.payload, -1)
    default:
      return state.shoppingCart
  }
}

const updateCartItems = (cartItems, item, index) => {
  if (index === -1) {
    return [...cartItems, item]
  }
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, index),
      ...cartItems.slice(index + 1),
    ]
  }
  return [
    ...cartItems.slice(0, index),
    item,
    ...cartItems.slice(index + 1),
  ]
}

const updateItem = (book, item = {}, quantity) => {
  const {id = book.id, title = book.title, count = 0, total = 0} = item
  return {
    id,
    title,
    total: total + quantity * book.price,
    count: count + quantity
  }
}

const updateOrder = (state, bookId, quantity) => {
  const {shoppingCart: {cartItems}, bookList: {books}} = state
  const book = books.find(({id}) => id === bookId)
  const itemIndex = cartItems.findIndex(({id}) => id === bookId)
  const item = cartItems[itemIndex]
  const newItem = updateItem(book, item, quantity)

  return {
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  }
}

export default updateShoppingCart
