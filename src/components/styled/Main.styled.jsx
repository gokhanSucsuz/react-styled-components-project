import { styled } from "styled-components";

export const StyledMain = styled.main`
  width: ${({ theme }) => theme.sizes.boxSize};
  margin: 0 auto 30px;
  border: 1px solid ${({ theme }) => theme.colors.silver};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.bgColor};
  min-height: 20px;
  padding: 20px 0;
  margin-bottom: 20px;

  overflow: auto;
`;
