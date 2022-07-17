import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 8px 24px;
  border-radius: 24px;
  border: none;
  font-size: 1.3rem;
  transition: all 0.15s ease-in;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 4px 16px;
    font-size: 1.2rem;
  }
`;

export const StyledAboutButton = styled(StyledButton)`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.blue};
  border: 5px solid ${({ theme }) => theme.blue};

  &:hover {
    color: ${({ theme }) => theme.main};
    background-color: ${({ theme }) => theme.gray};
  }
`;

export const StyledProjectsButton = styled(StyledButton)`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.red};
  border: 4px solid ${({ theme }) => theme.red};

  &:hover {
    color: ${({ theme }) => theme.main};
    background-color: ${({ theme }) => theme.gray};
    border: 4px solid #ba445d;
  }
`;
