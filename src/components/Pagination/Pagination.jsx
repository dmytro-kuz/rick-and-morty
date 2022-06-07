import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchCharacters } from "../../store/reducerSlice";

export default function BasicPagination() {
  const quantityPages = useSelector(
    (state) => state.reducer.characters.info.pages
  );
  // const currentPage = useSelector(
  //   (state) => state.reducer.characters.info.next.split("=")[1] - 1
  // );

  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters(page));
  }, [page]);

  const handlePage = (_, num) => {
    console.log(num);
    setPage(num);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        size='large'
        shape='rounded'
        page={page}
        count={quantityPages}
        color='primary'
        onChange={handlePage}
        showFirstButton
        showLastButton
        sx={{ marginY: 3, marginX: "auto" }}
      />
    </Stack>
  );
}
