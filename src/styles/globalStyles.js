import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background: ${({ theme: { bg } }) => bg};
  }

  #root {
    overflow: hidden;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.04em;
    color: #FFFFFF;

    ${({
      theme: {
        viewports: { sm, md, lg, xlg },
      },
    }) => css`
      @media (min-width: ${xlg.min}) {
        font-size: 52px;
        line-height: 63px;
      }

      @media (min-width: ${lg.min}) and (max-width: ${lg.max}) {
        font-size: 48px;
        line-height: 59px;
      }

      @media (min-width: ${md.min}) and (max-width: ${md.max}) {
        font-size: 40px;
        line-height: 49px;
      }

      @media (min-width: ${sm.min}) and (max-width: ${sm.max}) {
        font-size: 32px;
        line-height: 39px;
      }
    `}
  }

  h2 {
    font-family: Manrope;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 131.19%;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  h3 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 131.19%;
    color: #FFFFFF;
  }

  h5 {
    font-family: Manrope;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 131.19%;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;

    ${({
      theme: {
        viewports: { lg, xlg },
      },
    }) => css`
      @media (min-width: ${xlg.min}) {
        letter-spacing: 0.11em;
      }

      @media (min-width: ${lg.min}) {
        font-size: 14px;
      }
    `}
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 146.9%;
    color: #FFFFFF;

    ${({
      theme: {
        viewports: { sm, md },
      },
    }) => css`
      @media (min-width: ${md.min}) {
        font-size: 20px;
      }

      @media (min-width: ${sm.min}) and (max-width: ${sm.max}) {
        font-size: 16px;
      }
    `}
  }

  article {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 170.9%;
    text-align: center;
    color: #FFFFFF;

    ${({
      theme: {
        viewports: { md, lg },
      },
    }) => css`
      @media (min-width: ${lg.min}) {
        font-size: 16px;
      }

      @media (min-width: ${md.min}) and (max-width: ${md.max}) {
        font-size: 14px;
      }
    `}
  }

  a {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 170.9%;
    text-align: center;
    color: ${({ theme: { accent } }) => accent};
    text-decoration: none;
  }

  input, textarea {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 170.9%;
    color: #ffffff;
  }

  ul {
    padding-inline-start: 0;
  }

  li {
    list-style-type: none;
  }

  * {
    ::-webkit-scrollbar {
      width: 6px;
      background: #10183C;
    }

    ::-webkit-scrollbar-thumb {
      width: 6px;
      background: ${({ theme: { accent } }) => accent};
    }
    scrollbar-width: thin;
    scrollbar-color: ${({ theme: { accent } }) => `${accent} #10183C`};
  }
`;

export default GlobalStyle;
