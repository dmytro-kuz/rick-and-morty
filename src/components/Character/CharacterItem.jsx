import React from "react";
// import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

function CharacterItem({ id, name, image, gender, species, status, location }) {
  return (
    <Card
      sx={{
        m: 1.5,
        width: 300,
        boxShadow: "0 5px 15px 0px rgba(0, 255, 255, 0.747)",
        backgroundColor: "rgb(33, 177, 182)",
        borderRadius: "20px",
      }}>
      <CardContent>
        <CardMedia
          className='images'
          component='img'
          // height="194"
          image={image}
          alt={name + "image"}
        />
        <Typography className='cardsInfo' variant='h5' component='div'>
          {name}
        </Typography>
        <Typography className='cardsInfo' sx={{ mb: 1.5 }}>
          Gender: {gender}
        </Typography>
        <Typography className='cardsInfo' variant='body2'>
          Species: {species}
          <br />
          Status: {status}
          <br />
          Location: {location.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='cardsInfo1' size='small' onClick={null}>
          Details
        </Button>
      </CardActions>
      {/* <BasicModal data={data} open={open} onClose={handleClose} /> */}
    </Card>
  );
}

export default CharacterItem;
