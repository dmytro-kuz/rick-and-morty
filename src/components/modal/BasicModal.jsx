import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { episodesAPI } from "../../fetch/requests";

export default function BasicModal({ data, open, onClose }) {
  const [episodesLists, setEpisodesLists] = useState([]);

  useEffect(() => {
    fetch(
      episodesAPI +
        data.episode
          .map((eps) => eps.split("/")[eps.split("/").length - 1])
          .join(",")
    )
      .then((res) => res.json())
      .then((res) => {
        if (Array.isArray(res)) setEpisodesLists([...res]);
        else setEpisodesLists([res]);
      });
    return setEpisodesLists([]);
  }, [data.episode, open]);

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box
          className='allInfo'
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: 300,
            maxWidth: 500,
            bg: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}>
          <Typography
            className='cardsInfo'
            id='modal-modal-title'
            variant='h3'
            component='h2'>
            {data.name}
          </Typography>

          <Typography
            className='cardsInfo'
            id='modal-modal-description'
            sx={{ mt: 2 }}
            variant='1'>
            Species: {data.species}
            <br />
            Gender: {data.gender}
            <br />
            Location: {data.location.name}
            <br />
            Status: {data.status}
            <br />
            Created: {new Date(data.created).toLocaleDateString()}
          </Typography>
          <Box
            id='modal-modal-description'
            sx={{ mt: 2, maxHeight: 300, overflowY: "auto" }}
            variant='body2'>
            Episodes: {episodesLists.length}
            <br />
            <ul>
              {episodesLists.map((eps) => (
                <li key={Math.floor(Math.random() * 10000000000001)}>
                  [{eps.episode}] {eps.name}
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
