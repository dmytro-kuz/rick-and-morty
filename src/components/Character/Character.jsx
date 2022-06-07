import React from "react";
import { useSelector } from "react-redux";
import CharacterItem from "./CharacterItem";
import { Box } from "@mui/material";

function Character() {
  const characters = useSelector((state) => state.reducer.characters.results);
  return (
    <ul>
      <Box
        sx={{
          p: 1,
          pr: 5,
          display: "flex",
          flexFlow: "wrap",
          justifyContent: "center",
        }}>
        {characters.map((character) => (
          <CharacterItem key={character.id} {...character} />
        ))}
      </Box>
    </ul>
  );
}

export default Character;
