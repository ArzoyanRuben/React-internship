import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import "../../App.css";

export const UsersBody = ({ data, setItemId, toggle }) => {
  const modalToggle = () => {
    toggle();
    setItemId(data.id);
  };
  return (
    <Box className="cards" onClick={modalToggle}>
      <Box className="card card-1">
        <Typography className="card__title">{data.name}</Typography>
      </Box>
    </Box>
  );
};
