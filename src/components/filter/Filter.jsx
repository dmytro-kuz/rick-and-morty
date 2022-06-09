import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Checkbox, FormControlLabel } from "@mui/material";
import BasicModal from "../modal/BasicModal";

export default function Filter({ content, setFilterData, handleChangePage }) {
  const [values, setValues] = useState();

  function handleChange(e) {
    setValues(e.target.outerText || e.target.value);
  }

  function handleOnApply() {
    if (values !== "") {
      let str = `&name=${values.replace(" ", "+")}`;
      setFilterData(str);
      handleChangePage(null, 1, str);
    }
  }

  return (
    <Box>
      <Stack spacing={2} sx={{ m: "20px auto", maxWidth: "700px" }}>
        <Autocomplete
          onChange={handleChange}
          freeSolo
          id='free-solo-2-demo'
          disableClearable
          options={content.map((el) => el.name)}
          renderInput={(params) => (
            <TextField
              // onClick={handleChange}

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
        sx={{ display: "flex", justifyContent: "center" }}
        label='Liked Characters'
        control={<Checkbox color='success' />}
      />
      <Button sx={{m: '20px 0 20px 43%'}} className='btn' onClick={handleOnApply} variant='outlined'>
        Apply filter
      </Button>
    </Box>
  );
}
