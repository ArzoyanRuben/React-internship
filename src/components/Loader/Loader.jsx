import React from "react";
import { Box } from '@mui/system';
import styled  from 'styled-components';
import { CircularProgress } from '@mui/material';

export const Loader = ({loading}) => {
  return (
    <>
      {loading && (
        <StyledLoader>
          <CircularProgress size={70} />
        </StyledLoader>
      )}
    </>
  );
};

const StyledLoader = styled(Box)`
  position: absolute;
  top: 50%;
  right: 45%;
`;