const charactersErrorReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_CHARACTERS_ERROR':
      return action.isErrorOccurred
    default:
      return state
  }
}

export default charactersErrorReducer
