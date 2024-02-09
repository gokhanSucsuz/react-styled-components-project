import { styled } from "styled-components";

export const StyledArticle = styled.article`
  background-color: ${({ theme }) => theme.colors.bodyColor};
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 4px;

  & > header {
    padding: 0;
    border-bottom: none;
  }

  & > footer {
    padding: 10px 0;

    & > a {
      color: var(--link-color);
    }
  }

  & > p {
    margin-bottom: 10px;
  }
`;
