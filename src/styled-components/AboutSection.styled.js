import styled from "styled-components";

export const StyledAboutSection = styled.section`
  min-height: 50vh;
  background-color: ${({ theme }) => theme.darkGray};
  display: flex;
  gap: 12vw;
  align-items: center;
  padding: 150px 12vw;
  color: ${({ theme }) => theme.white};
  font-size: 1.5rem;

  span {
    font-size: 1.55rem;
  }

  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.red};
    margin-bottom: 2rem;
  }

  p {
    line-height: 2.5rem;
    letter-spacing: 0.11rem;
  }

  img {
    width: clamp(150px, 30vw, 400px);
  }

  @media (max-width: 1400px) {
    gap: 8vw;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
    gap: 10vh;

    h2 {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    p {
      line-height: 2rem;
      letter-spacing: normal;
    }

    span {
      font-size: 1.15rem;
    }
    img {
      width: 250px;
    }
  }
`;
