import React, { Fragment } from "react";
import useFetch from "../../hooks/useFetch";
// import { CircularProgress } from '@mui/material';
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

export const ModalAlbums = ({ modalUrl, itemId, setData, toggle }) => {
  const [items] = useFetch(null, modalUrl);
console.log(modalUrl,items,'items')

  const closeModal = () => {
    setData(null);
    toggle();
  };

  return (
    <>
      {
        items
          ? items.map((data) => {
            <Fragment key={data.id}>
              {data.id === itemId ? (
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
                          <Typography>{data.title}</Typography>
                          <Box
                            component="img"
                            src={`${data.url}`}
                            alt="imgUrl"
                          />
                        </Box>
                      </Box>
                    </Box>
                    </>
              ) : ''} 
              </Fragment>
            })
          : ""
        //   <Fragment>
        //   <div className="modal-overlay" />
        //   <div className="modal-wrapper" role="dialog">
        //     <div className="modal">
        //       <button
        //         type="button"
        //         className="modal-close-button"
        //         data-dismiss="modal"
        //         aria-label="Close"
        //         onClick={closeModal}
        //       >
        //         <span aria-hidden="true">&times;</span>
        //       </button>

        //   <div style={{position:'absolute', top:'50%', right:'45%'}}>
        //   <CircularProgress size={170} color="inherit" />
        //   </div>
        //     </div>
        //   </div>
        // </Fragment>
      }
    </>
  );
};
