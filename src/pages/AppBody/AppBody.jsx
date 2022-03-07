import React from "react";
import { LeftPanel } from "../LeftPanel/LeftPanel";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Box } from '@mui/system';

const AppBodyStyled = styled(Box)`
  display: flex;
  height: 100vh
`;
const RightPanelStyled = styled(Box)`
  padding: 40px;
  margin-left: 220px;
`;

export const AppBody = () => {
  return (
    <AppBodyStyled>
      <LeftPanel />
      <RightPanelStyled>
        <Outlet />
      </RightPanelStyled>
    </AppBodyStyled>
  );
};