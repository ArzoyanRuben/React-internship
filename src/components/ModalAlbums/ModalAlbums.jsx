import React, { Fragment } from "react";
import useFetch from "../../hooks/useFetch";
import { Button } from "@mui/material";
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
          <div className="modal-overlay" />
          <div className="modal-wrapper" role="dialog">
            <div className="modal">
              <button
                type="button"
                className="modal-close-button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              >
                <div
                  sx={{ fontSize: 30 }}
                  component="div"
                  display="inline"
                  aria-hidden="true"
                >
                  &times;
                </div>
              </button>
              <div className="modal-header">
                {data.map((item) => (
                  <Fragment key={item.id}>
                    {item.id === itemId ? (
                      <>
                        <p>{item.title}</p>
                        <img src={`${item.url}`} alt="imgUrl" />
                      </>
                    ) : (
                      ""
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
