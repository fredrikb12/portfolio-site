import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  padding: 20px 12vw;
  display: flex;
  justify-content: space-between;
`;

export const StyledLogoContainer = styled.div`
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
`;
