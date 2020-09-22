import React from "react";
import styled, { css } from "styled-components";

import Button from "../Common/Button";

import astralLogo from "../../images/AstralLogo.svg";
import menu from "../../images/MenuBurgerIcon.svg";

const Header = () => {
  return (
    <Wrapper>
      <img src={astralLogo} alt="Astral логотип" />
      <MenuButton icon={menu} alt="Кнопка меню" />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 24px 88px 24px;
  margin: 0 auto;

  ${({
    theme: {
      viewports: { sm, md, lg, xlg },
    },
  }) => css`
    @media (min-width: ${xlg.min}) {
      max-width: ${xlg.maxWidth};
    }

    @media (min-width: ${lg.min}) and (max-width: ${lg.max}) {
      padding: 28px 24px 110px 24px;
      max-width: ${lg.maxWidth};
    }

    @media (min-width: ${md.min}) and (max-width: ${md.max}) {
      padding: 28px 24px 64px 24px;
      max-width: ${md.maxWidth};
    }

    @media (min-width: ${sm.min}) and (max-width: ${sm.max}) {
      padding: 28px 24px 48px 24px;
      max-width: ${sm.maxWidth};
    }
  `}
`;

const MenuButton = styled(Button)`
  padding: 0 8px;
  width: 32px;
  height: 32px;
  z-index: 1;
`;

export default Header;
