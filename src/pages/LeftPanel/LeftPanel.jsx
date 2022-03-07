import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box } from "@mui/system";

const LeftPanelStyled = styled(Box)`
  padding: 50px;
  background: linear-gradient(45deg, #2fcef959, #0000001c);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
`;
const LinkStyled = styled(Link)`
  text-decoration: none;
  margin: 10px;
  color: lightslategrey;
  font-size: 30px;
  font-weight: 700;
  text-decoration: underline;
`;

export const LeftPanel = () => {
  return (
    <LeftPanelStyled>
      <LinkStyled to="/">Users</LinkStyled>
      <LinkStyled to="/albums">Albums</LinkStyled>
    </LeftPanelStyled>
  );
};
