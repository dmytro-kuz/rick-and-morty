import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Checkbox, FormControlLabel } from "@mui/material";
import BasicModal from "../modal/BasicModal";

export default function Filter({
  filter,
  content,
  setFilterData,
  handleChangePage,
}) {
  const [values, setValues] = useState();
  const [liked, setLiked] = useState(false);

  const handleChange = (e) => {
    setValues(e.target.outerText || e.target.value);
  };

  const handleOnApply = () => {
    let ids = [];
    let str = "";
    if (liked) {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        ids.push(key);
      }
      str = `${ids}`;
    } else {
      str = `&name=${values.replace(" ", "+")}`;
    }
    console.log(str);
    setFilterData(str);
    console.log(liked);
    handleChangePage(null, 1, str, liked);
  };

  const handleLiked = (e) => {
    // console.log(e.target.checked);
    setLiked(e.target.checked);
    // console.log(liked);
  };

  return (
    <Box
      sx={{
        m: "0 auto",
        width: "800px",
        paddingTop: "15px",
        background: "rgb(255, 255, 255, 0.5)",
        borderRadius: "15px 15px 0 0",
      }}>
      <Stack spacing={2} sx={{ m: "20px auto", maxWidth: "700px" }}>
        <Autocomplete
          sx={{
            boxShadow: "0 5px 8px 0px rgb(13, 255, 0, 0.747)",
            border: " 0.5px solid rgb(13, 255, 0, 0.747)",
            borderRadius: "3px",
          }}
          onChange={handleChange}
          freeSolo
          id='free-solo-2-demo'
          disableClearable
          options={content.map((el) => el.name)}
          renderInput={(params) => (
            <TextField
              sx={{ background: "rgb(0, 0, 0, 0.3)" }}
              onChange={handleChange}
              {...params}
              label='Search input'
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Stack>
      <FormControlLabel
        onChange={handleLiked}
        sx={{ display: "flex", justifyContent: "center" }}
        label='Liked Characters'
        control={<Checkbox color='success' />}
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ m: "20px ", width: "50%", background: "rgb(0, 0, 0, 0.3)" }}
          className='btn'
          onClick={handleOnApply}
          variant='outlined'>
          Apply filter
        </Button>
      </Box>
    </Box>
  );
}
