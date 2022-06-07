import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { generateRandomID } from "../../helpers/generate.random.id";

export default function Filter({ filters, setFilterData, handleChangePage }) {
  const [values, setValues] = React.useState({});
  const [filtersHidden, setFiltersHidden] = React.useState(false);

  function onChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  function handleOnHide() {
    setFiltersHidden(!filtersHidden);
  }

  function handleOnClear() {
    let emptyVal = values;
    Object.keys(emptyVal).forEach((k) => (emptyVal[k] = ""));
    setValues({ ...values, ...emptyVal });

    setFilterData(``);
    handleChangePage(null, 1, ``);
  }

  function handleOnApply() {
    let str = ``;
    for (let key in values) str += `&${key}=${values[key]}`;

    setFilterData(str);
    handleChangePage(null, 1, str);
  }

  return (
    <Box>
      <div className="boxFilter" hidden={filtersHidden}>
        <Box
          sx={{
            pt: 3,
            pl: 3,
            pr: 3,
            display: "flex",
            flexFlow: "wrap",
            flexDirection: "row"
          }}
        >
          {Object.entries(filters).map(([key, val]) =>
            Array.isArray(val) ? (
              <FormControl
                className="filter"
                key={generateRandomID(10)}
                sx={{ width: 200, m: 1 }}
              >
                <InputLabel
                  className="filterTitle"
                  id="demo-simple-select-label"
                >
                  {key}
                </InputLabel>
                <Select
                  className="sel1"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values[key] || ""}
                  label={key}
                  onChange={onChange}
                  name={key}
                >
                  {val.map((option) => (
                    <MenuItem className="sel" key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <TextField
                id="outlined-basic"
                sx={{ width: 200, m: 1 }}
                key={key}
                label={key}
                variant="outlined"
                name={key}
                value={values[key] || ""}
                onChange={onChange}
              />
            )
          )}
        </Box>
      </div>
      <Box sx={{ p: 3, display: "flex", flexDirection: "row" }}>
        <Button className="btn" onClick={handleOnHide} sx={{ mr: 3 }}>
          Hide
        </Button>
        <Button className="btn" onClick={handleOnClear} sx={{ mr: 3 }}>
          Clear
        </Button>
        <Button className="btn" onClick={handleOnApply} variant="outlined">
          Apply filter
        </Button>
      </Box>
    </Box>
  );
}
