import React, { useState, Fragment } from "react";
import useFetch from "../../hooks/useFetch";
import { Box } from "@mui/system";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuid } from 'uuid';

export const ModalUsers = ({
  setItem,
  itemId,
  modalUrl,
  isOpen,
  toggle,
  deleteBox,
  parentBox
}) => {
  const { data, setData, loading, error } = useFetch(modalUrl);
  const [newPostItem, setNewPostItem] = useState('');
  const closeModal = () => {
    setItem(null);
    toggle();
  };

  const handleUsersAddItem = (e) => {
    e.preventDefault();
    fetch(modalUrl
      // , {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(data)
      // }
    ).then((res) => {
      if (res.status === 200) {
        setData([
          ...data,
          { userId: itemId, id: itemId, body: newPostItem, }
        ])
      }
    })
    setNewPostItem('')
  }
  const deleteItem = () => {
    fetch(modalUrl + '/' + itemId, { method: 'DELETE' })
      .then((res) => {
        if (res.status === 200) {
          deleteBox(
            parentBox.filter((parentBox) => {
              return parentBox.id !== itemId;
            })
          )
        }
      })
    toggle();
  }
  return (
    <>
      {loading && (
        <>
          <Box className="modal-overlay" />
          <Box className="modal-wrapper" role="dialog">
            <Box className="modal">
              <Button
                type="button"
                className="modal-close-button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              >
                <Box
                  sx={{ fontSize: 30 }}
                  component="div"
                  display="inline"
                  aria-hidden="true"
                >
                  &times;
                </Box>
              </Button>
              <Box className="modal-header">
                <Loader loading={loading} />
              </Box>
            </Box>
          </Box>
        </>
      )}
      <ErrorMessage error={error} />
      {isOpen && data ? (
        <>
          <Box className="modal-overlay" />
          <Box className="modal-wrapper" role="dialog">
            <Box className="modal">
              <Button
                type="button"
                className="modal-close-button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              >
                <Box
                  sx={{ fontSize: 30 }}
                  display="inline"
                  aria-hidden="true"
                >
                  &times;
                </Box>
              </Button>
              <Stack sx={{ justifyContent: 'center' }} direction="row" spacing={1}>
                <TextField
                  id="outlined-name"
                  label="Name"
                  value={newPostItem}
                  onChange={(e) => setNewPostItem(e.target.value)}
                />
                {!newPostItem && <Button onClick={handleUsersAddItem} variant='outlined' disabled><AddIcon /></Button>}
                {newPostItem && <Button onClick={handleUsersAddItem} variant='outlined'><AddIcon /></Button>}
                <Button
                  variant="outlined"
                  onClick={deleteItem}
                  startIcon={<DeleteIcon />}
                />
              </Stack >
              <Box className="modal-header">
                {data.map((data) => (
                  <Fragment key={uuid()}>
                    {data.userId === itemId ? (
                      <Typography key={uuid()} variant="overline">{data.body}</Typography>
                    ) : (
                      ""
                    )}
                  </Fragment>
                ))}
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        ""
      )}
    </>
  );
};
