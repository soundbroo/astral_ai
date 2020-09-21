import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background: ${({ theme: { bg } }) => bg}
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
  }

  h2 {
    font-family: Manrope;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 131.19%;
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme: { accent } }) => accent};
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
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 146.9%;
    color: #FFFFFF;
  }

  article {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 170.9%;
    text-align: center;
    color: #FFFFFF;
  }
`;

export default GlobalStyle;
