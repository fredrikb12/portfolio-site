import styled from "styled-components";

export const StyledHeaderSection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
    
    button {
      min-width: 120px;
      padding: 4px 0;
    }
  }
`;
