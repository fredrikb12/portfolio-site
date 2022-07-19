import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.lighterGray};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(50px, 10vw, 100px);
  padding: 25px;
`;
