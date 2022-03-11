import React, { Fragment } from "react";
import useFetch from "../../hooks/useFetch";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export const ModalUsers = ({ setData, itemId, modalUrl, isOpen, toggle }) => {
  const { data, loading, error } = useFetch(modalUrl);
  const closeModal = () => {
    setData(null);
    toggle();
  };

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
                  component="div"
                  display="inline"
                  aria-hidden="true"
                >
                  &times;
                </Box>
              </Button>
              <Box className="modal-header">
                <TextField
                  id="outlined-name"
                  label="Name"
                  value='rerer'
                // onChange={(e) => setItem(e)}
                />
                <Button>add</Button>
                {data.map((data) => (
                  <Fragment key={data.id}>
                    {data.userId === itemId ? (
                      <Typography key={data.id} variant="overline">{data.body}</Typography>
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
