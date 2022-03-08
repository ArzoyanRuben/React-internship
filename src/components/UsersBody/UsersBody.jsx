import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import "../../App.css";

export const UsersBody = ({ item, setItemId, toggle }) => {
  const modalToggle = () => {
    toggle();
    setItemId(item.id);
  };
  return (
    <Box className="cards" onClick={modalToggle}>
      <Box className="card card-1">
        <Typography className="card__title">{item.name}</Typography>
      </Box>
    </Box>
  );
};
