import styled from "styled-components";

export const StyledSkillsSection = styled.section`
  max-width: clamp(280px, 75vw, 1000px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: clamp(150px, 15vw, 200px);
  margin: 0 auto;
  padding: 20vh 0;

  div {
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    background-color: ${({ theme }) => theme.lighterGray};
    border: 3px solid ${({ theme }) => theme.darkGray};
    border-radius: 24px;
    padding: 40px;
    box-shadow: 0 0 12px 7px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;

    div {
      flex-direction: row;
      flex: 1;
      justify-content: space-between;
      gap: 0;
    }

    img {
      width: clamp(60px, 10vw, 200px);
    }
  }

  @media (max-width: 600px) {
    padding: 15vh 0;
    gap: 60px;

    div {
      padding: 20px;
    }
  }
`;
