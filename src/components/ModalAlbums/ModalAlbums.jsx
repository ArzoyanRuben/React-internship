import React, { Fragment } from "react";
import useFetch from "../../hooks/useFetch";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Loader } from "./../Loader/Loader";
import { ErrorMessage } from "./../ErrorMessage/ErrorMessage";

export const ModalAlbums = ({ modalUrl, itemId, setData, toggle, isOpen }) => {
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
                {data.map((item) => (
                  <Fragment key={item.id}>
                    {item.albumId === itemId ? (
                      <Box key={item.id}>
                        <Typography variant="overline">{item.title}</Typography>
                      </Box>
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