import styled from "styled-components";

export const StyledMobileHeader = styled.div`
  display: flex;
  position: relative;

  button {
    cursor: pointer;
  }

  @media (min-width: 901px) {
    display: none;
    visibility: hidden;
  }
`;
