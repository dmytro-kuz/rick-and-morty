import * as React from "react";
import Box from "@mui/material/Box";
import Character from "./Character/Character"
import { Pagination } from "./Pagination/Pagination";

export default function Main() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Character />
      <Pagination sx={{ width: "100%" }} />
    </Box>
  );
}
