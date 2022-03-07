import React from "react";
import "../../App.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export const AlbumsBody = ({ data, toggle, setItemId }) => {
  const modalToggle = () => {
    toggle();
    setItemId(data.id);
    console.log( data, toggle,'setItemId');
  };
  return (
    <Box className="cards" onClick={modalToggle}>
      <Box className="card card-1">
        <Typography className="card__title">aa{data.title}</Typography>
      </Box>
    </Box>
  );
};
