import styled from "styled-components";

export const StyledProjectCard = styled.article`
  color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  border: 1px solid black;
  border-radius: 24px;
  box-shadow: 0 0 6px 4px rgba(0, 0, 0, 0.6);

  h3 {
    font-size: 1.5rem;
    padding: 10px 0;
  }

  img {
    max-width: 100%;
  }

  & > div {
    padding: 0 calc(250px - 10vw);
  }

  @media (max-width: 1024px) {
    & > div {
      padding: 0 50px;
    }
  }

  @media (max-width: 600px) {
    & > div {
      padding: 0 20px;
    }

    p {
      font-size: 1.1rem;
    }

    h3 {
      font-size: 1.6rem;
    }
  }
`;
