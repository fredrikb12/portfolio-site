import styled from "styled-components";

export const StyledHeaderText = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.white};

  span {
    color: ${({ theme }) => theme.blue};
  }
`;
