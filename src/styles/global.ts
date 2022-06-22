import { createGlobalStyle, css } from "styled-components";

type GlobalStylesProps = {
  removeBg?: boolean;
};

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  @font-face {
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: local(''),
        url('/fonts/plus-jakarta-sans-v2-latin-regular.woff2') format('woff2')
  }
  /* plus-jakarta-sans-500 - latin */
  @font-face {
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-display: swap;
    font-weight: 500;
    src: local(''),
        url('/fonts/plus-jakarta-sans-v2-latin-500.woff2') format('woff2')
  }
  /* plus-jakarta-sans-700 - latin */
  @font-face {
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src: local(''),
        url('/fonts/plus-jakarta-sans-v2-latin-700.woff2') format('woff2')
  }

  * {
  margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      ${!removeBg &&
      css`
        background-color: ${theme.colors.white};
      `}
    }
  `}
`;

export default GlobalStyles;
