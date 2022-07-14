import styled from "styled-components";

export const StyledAboutSection = styled.section`
  min-height: 50vh;
  background-color: ${({ theme }) => theme.darkGray};
  display: flex;
  gap: 15vw;
  align-items: center;
  padding: 150px 12vw;
  color: ${({ theme }) => theme.white};
  font-size: 1.5rem;

  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.red};
    margin-bottom: 2rem;
  }

  p {
    line-height: 2.5rem;
    letter-spacing: 0.11rem;
  }
`;
