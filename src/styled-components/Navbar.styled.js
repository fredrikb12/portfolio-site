import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  min-height: 8vh;
  padding: 0 12vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.2);

  @media (max-width: 900px) {
    display: none;
    visibility: hidden;
  }
`;

export const StyledLogoContainer = styled.div`
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
`;
