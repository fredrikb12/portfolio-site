import styled from "styled-components";

export const ImportantSpan = styled.span`
  font-weight: 600;
  font-size: 1.55rem;
`;

export const RedImportantSpan = styled(ImportantSpan)`
  color: ${({ theme }) => theme.red};
`;

export const BlueImportantSpan = styled(ImportantSpan)`
  color: ${({ theme }) => theme.blue};
`;

export const PaleRedImportantSpan = styled(ImportantSpan)`
  color: ${({ theme }) => theme.paleRed};
`;
