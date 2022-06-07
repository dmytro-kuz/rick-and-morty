import React, { useEffect, useState } from "react";
import fetchAPI from "../../fetch/fetchAPI";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Filter from "../filter/Filter";
import CharactersCard from "../charactersCard/CharactersCard";

function TabPanel({
  dispatch,
  content,
  info,
  error,
  contentType,
  filters,
  API,
}) {
  useEffect(() => {
    fetchAPI(contentType, dispatch, API);
  }, [contentType, dispatch, API]);

  const [page, setPage] = useState(1);
  const [filterData, setFilterData] = useState(``);

  const handleChangePage = (_, newPage = 1, filter = filterData) => {
    fetchAPI(contentType, dispatch, API + `?page=${newPage}` + filter);
    setPage(newPage);
  };

  if (!Object.keys(content).length || !Object.keys(info).length) return null;

  return (
    <>
      <Box>
        <Filter
          filters={filters}
          setFilterData={setFilterData}
          handleChangePage={handleChangePage}
        />
      </Box>
      <Box
        sx={{
          p: 1,
          pr: 5,
          display: "flex",
          justifyContent: "center",
        }}>
        {info ? (
          <Box
            sx={{
              ml: 3,
              mr: 3,
              display: "flex",
              color: "rgb(0, 255, 255, 0.747)",
              fontFamily: "Creepster",
              alignItems: "center",
            }}>
            {info.count + " characters "}
          </Box>
        ) : null}
        <Pagination
          page={!error ? page : 1}
          count={!error ? info.pages : 1}
          onChange={handleChangePage}
          showFirstButton
          showLastButton
        />
      </Box>
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexFlow: "wrap",
          justifyContent: "space-around",
        }}>
        {!error ? (
          content.map((res) => <CharactersCard key={res.id} data={res} />)
        ) : (
          <Box>There is nothing here</Box>
        )}
      </Box>
      <Box
        sx={{
          p: 5,
          pb: 10,
          display: "flex",
          justifyContent: "center",
        }}>
        <Pagination 
          page={!error ? page : 1}
          count={!error ? info.pages : 1}
          onChange={handleChangePage}
          showFirstButton
          showLastButton
        />
      </Box>
    </>
  );
}
export default TabPanel;
