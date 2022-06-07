const charactersInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CHARACTERS_INFO':
      return action.charsInfo
    default:
      return state
  }
}

export default charactersInfoReducer
