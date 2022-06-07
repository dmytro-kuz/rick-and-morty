const charactersReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CHARACTERS_LIST':
      return action.characters
    default:
      return state
  }
}

export default charactersReducer
