import styled from "styled-components";

export const StyledProjectsSection = styled.section`
  padding: 30vh 0 20vh;
  background-color: ${({ theme }) => theme.darkGray};
  display: grid;
  justify-content: center;
  gap: 200px;
  grid-template-columns: clamp(600px, 60vw, 850px);

  @media (max-width: 1024px) {
    grid-template-columns: 500px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 280px;
  }
`;
