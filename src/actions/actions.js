export const setCharactersList = (characters) => ({
  type: "SET_CHARACTERS_LIST",
  characters
});
export const setEpisodesList = (episodes) => ({
  type: "SET_EPISODES_LIST",
  episodes
});
export const setCharactersInfo = (charsInfo) => ({
  type: "SET_CHARACTERS_INFO",
  charsInfo
});
export const setEpisodesInfo = (epsInfo) => ({
  type: "SET_EPISODES_INFO",
  epsInfo
});
export const setCharactersError = (isErrorOccurred) => ({
  type: "SET_CHARACTERS_ERROR",
  isErrorOccurred
});
export const setEpisodesError = (isErrorOccurred) => ({
  type: "SET_EPISODES_ERROR",
  isErrorOccurred
});
