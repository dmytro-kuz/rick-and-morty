import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import BasicModal from "../modal/BasicModal";

export default function CharactersCard({ data }) {
  const [open, setOpen] = useState(false);

  const handleOpenInfo = () => {
    setOpen(true);
  };

  const handleCloseInfo = () => {
    setOpen(false);
  };

  return (
    <Card
      sx={{
        cursor: "pointer",
        m: 1.5,
        height: 460,
        width: 300,
        boxShadow: "0 5px 15px 0px rgba(255, 255, 255, 0.747)",
        background:
          "url('https://kartinkin.net/src.php?src=https://kartinkin.net/uploads/posts/2021-04/thumbs/1617600139_57-p-chernii-fon-so-zvezdami-58.png&w=315&h=455')",
        borderRadius: "10px",
      }}>
      <CardContent onClick={handleOpenInfo}>
        <CardMedia
          sx={{ mb: 3 }}
          className='images'
          component='img'
          image={data.image}
          alt={data.name + "image"}
        />
        <Typography
          sx={{ mb: 2, display: "flex", justifyContent: "center" }}
          className='cardsInfo'
          variant='h4'
          component='div'>
          {data.name}
        </Typography>

        <Typography className='cardsInfo' variant='h6'>
          Status: {data.status}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button className='cardsInfo1' onClick={handleOpenInfo}>
          Show More
        </Button>
      </CardActions>
      <BasicModal data={data} open={open} onClose={handleCloseInfo} />
    </Card>
  );
}