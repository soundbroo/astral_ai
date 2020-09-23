import React from "react";
import styled, { css } from "styled-components";

import accentButtonBg from "../../images/AccentButtonBg.svg";

const Button = ({ icon, alt, accent, className, children, onImgClick }) => (
  <Wrapper accent={accent} className={className} type="button">
    {icon ? <img onClick={onImgClick} src={icon} alt={alt || null} /> : null}
    {children ? <span>{children}</span> : null}
  </Wrapper>
);

export default Button;

const Wrapper = styled.button`
  position: relative;
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
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  overflow: hidden;

  ${({ accent }) =>
    accent &&
    css`
      &:before {
        content: "";
        background: rgb(255 255 255 / 0.3);
        position: absolute;
        top: 6px;
        left: 40%;
        width: 0;
        height: 80%;
        border-radius: 5px 20px;
        filter: blur(16px);
        transform: translateY(-50%);
        transition: all 0.1s ease-in;
      }

      &:hover {
        &:before {
          width: 100px;
          transform: translateY(0);
        }
      }
    `};

  > span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.1em;
    color: #ffffff;
    text-transform: uppercase;

    ${({
      theme: {
        viewports: { sm },
      },
    }) => css`
      @media (min-width: ${sm.min}) {
        font-size: 14px;
        line-height: 17px;
      }
    `}
  }
  width: 197px;
  height: 52px;

  ${({
    theme: {
      viewports: { sm },
    },
  }) => css`
    @media (min-width: ${sm.min}) {
      width: 227px;
      height: 60px;
    }
  `}
`;
