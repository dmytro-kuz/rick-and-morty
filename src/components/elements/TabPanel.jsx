import React, { useEffect, useState } from "react";
import fetchAPI from "../../fetch/fetchAPI";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Filter from "../filter/Filter";
import CharactersCard from "../charactersCard/CharactersCard";
import Header from "../header/Header";

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
  // const [liked, setLiked] = useState(false);

  const handleChangePage = (
    contentType,
    newPage = 1,
    filter = filterData,
    liked
  ) => {
    if (liked) {
      fetchAPI(contentType, dispatch, API + filter);
    } else {
      fetchAPI(contentType, dispatch, API + `?page=${newPage}` + filter);
    }
    setTimeout(() => {
      window.scrollTo({top: 480, behavior: 'smooth'});
    }, 1000)
    setPage(newPage);
  };

  if (!Object.keys(content).length || !Object.keys(info).length) return null;

  return (
    <>
      <Box>
        <Header />
      </Box>
      <Box>
        <Filter
          content={content}
          filters={filters}
          setFilterData={setFilterData}
          handleChangePage={handleChangePage}
        />
      </Box>
      <Box
        sx={{
          p: 1,
          pr: 5,
          m: '0 auto',
          maxWidth: "752px",
          paddingTop: "15px",
          background: "rgb(255, 255, 255, 0.5)",
          borderRadius: "0 0 15px 15px",
          display: 'flex',
          justifyContent: 'center'
        }}>
        {info ? (
          <Box
            sx={{
              ml: 3,
              mr: 3,
              display: "flex",
              color: "rgb(13, 255, 0)",
              fontFamily: "Creepster",
              alignItems: "center",
            }}>
            {info.count + " characters "}
          </Box>
        ) : null}
        <Pagination
        size="large"
        sx={{color: 'rgb(13, 255, 0)'}}
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
          content.map((res) => (
            <CharactersCard
              key={Math.floor(Math.random() * 10000000000001)}
              data={res}
            />
          ))
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
        sx={{
          p: 1,
          pr: 5,
          m: '0 auto',
          maxWidth: "750px",
          paddingTop: "15px",
          background: "rgb(255, 255, 255, 0.5)",
          borderRadius: "15px",
          display: 'flex',
          justifyContent: 'center'
        }}
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
