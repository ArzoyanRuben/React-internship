import React from "react";
import "../../App.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export const AlbumsBody = ({ item, toggle, setItemId }) => {
  const modalToggle = () => {
    toggle();
    setItemId(item.id);
  };
  return (
    <Box className="cards" onClick={modalToggle}>
      <Box className="card card-1">
        <Typography className="card__title">{item.title}</Typography>
      </Box>
    </Box>
  );
};
