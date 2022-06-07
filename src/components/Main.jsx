import React from "react";
import Box from "@mui/material/Box";
import Characters from "./elements/Characters";

export default function BasicTabs() {
  return (
    <Box sx={{ width: "100%" }}>
      <Characters contentType={"characters"} />
    </Box>
  );
}
