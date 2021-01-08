const defaultState = {
  hasError: false,
  books: []
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'BOOKS__LOADED':
      return {
        books: action.payload
      }
    case 'ERR':
      return !state.hasError
    default:
      return state
  }
}
