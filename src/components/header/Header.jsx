import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

function Header() {
  return (
    <Box className='header-img' sx={{ width: "100%" }}>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "rgb(13, 255, 0)",
          fontFamily: "RickAndMorty Regular",
          fontSize: "82px",
        }}>
        Rick and Morty
      </Typography>
    </Box>
  );
}

export default Header;
