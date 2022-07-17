import styled from "styled-components";

export const StyledMobileNavbar = styled.nav`
  display: block;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 1.2rem;
  position: fixed;
  color: white;
  width: 80vw;
  height: clamp(300px, 45vh, 800px);
  background-color: #424345;
  z-index: 2;
  padding: 20px;
  gap: 20px;
  top: 0;
  right: 0;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.4);

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: center;
    font-size: 1.5rem;
    gap: 30px;

    li {
      font-size: 1.8rem;
      height: auto;
      width: 100%;
      display: flex;
      justify-content: center;

      a {
        justify-content: center;
        width: 100%;
        gap: 25px;

        img {
          width: 40px;
        }
      }
    }
  }

  @media (min-width: 901px) {
    display: none;
    visibility: hidden;
  }
`;
