import { Link } from "react-router-dom";
import gif404 from "../../assets/images/notfoundgif.gif";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  & > img width: 550px;
`;
export const Error404 = () => {
  return (
    <StyledDiv>
      <h2>I think you're lost, just like John Travolta!</h2>
      <img src={gif404} alt="gif" />
      <p>
        <Link to="/">Go to Homepage</Link>
      </p>
    </StyledDiv>
  );
};
