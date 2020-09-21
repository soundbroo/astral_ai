import React from "react";
import styled from "styled-components";

import accentButtonBg from "../../images/AccentButtonBg.svg";

const Button = ({ icon, alt, accent, className, children }) => (
  <Wrapper accent={accent} className={className} type="button">
    {icon ? <img src={icon} alt={alt || null} /> : null}
    {children ? <span>{children}</span> : null}
  </Wrapper>
);

export default Button;

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  background-image: ${({ accent }) =>
    accent ? `url(${accentButtonBg})` : "none"};
  > span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.1em;
    color: #ffffff;
    text-transform: uppercase;
  }

  width: 197px;
  height: 52px;
`;
