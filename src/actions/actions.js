export const setCharactersList = (characters) => ({
  type: "SET_CHARACTERS_LIST",
  characters
});

export const setCharactersInfo = (charsInfo) => ({
  type: "SET_CHARACTERS_INFO",
  charsInfo
});

export const setCharactersError = (isErrorOccurred) => ({
  type: "SET_CHARACTERS_ERROR",
  isErrorOccurred
});
