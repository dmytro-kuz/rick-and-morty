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
  const [liked, setLiked] = useState(false);


  const handleChange = (e) => {
    setValues(e.target.outerText || e.target.value);
  }

  const handleOnApply = () => {
    let ids = [];
    let str;
    if (values !== "") {
      if(liked) {
        for(let i=0; i<localStorage.length; i++) {
          let key = localStorage.key(i);
          ids.push(key)
        }
      str = ids.join(',');
      }
      else{
         str = `&name=${values.replace(" ", "+")}${ids.join(',')}`;
      }
      
      // console.log(str);
      setFilterData(str);
      handleChangePage(null, 1, str);
    }

  }
  const handleLiked =(e) => {
    // console.log(e.target.checked);
    setLiked(!liked)
    console.log(liked);
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
      <Button sx={{m: '20px 0 20px 43%'}} className='btn' onClick={handleOnApply} variant='outlined'>
        Apply filter
      </Button>
    </Box>
  );
}
