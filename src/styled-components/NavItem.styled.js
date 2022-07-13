import styled from "styled-components";

export const StyledNavItem = styled.li`
  position: relative;
  font-size: 1.5rem;
  width: 100px;
  height: 23px;
  padding-bottom: 10px;

  transition: all 0.25s ease-in-out;

  img {
    width: 23px;
  }

  &:hover {
    transform: scale(1.12);
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.white};
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    display: block;
    width: 0;
    height: 4px;
    background: ${({ theme }) => theme.white};
    transition: width 0.25s ease;
  }

  &:hover::after {
    width: 80%;
  }
`;
