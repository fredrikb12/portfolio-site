import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #242526;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 15px;
    padding-left: 15px;
  }
`;
