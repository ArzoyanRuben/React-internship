import React, { Fragment } from "react";
import useFetch from "../../hooks/useFetch";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

export const ModalUsers = ({ setData, itemId, modalUrl, isOpen, toggle }) => {
  const [items] = useFetch(null, modalUrl);
  
  const closeModal = () => {
    setData(null);
    toggle();
  };

  return (
    <>
      {isOpen && items ? (
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
                {items.map((data) => (
                  <Fragment key={data.id}>
                    {data.userId === itemId ? (
                      <Box key={data.id}>
                        <Typography variant="overline">{data.body}</Typography>
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
