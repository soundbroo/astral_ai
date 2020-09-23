import React, { useState } from "react";
import styled, { css } from "styled-components";

import Button from "../Common/Button";

import astralLogo from "../../images/AstralLogo.svg";
import menu from "../../images/MenuBurgerIcon.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <img src={astralLogo} alt="Astral логотип" />
      <Menu>
        <a href="#tasks">Компетенции</a>
        <a href="#advantages">Преимущества</a>
        <a href="#products">Решения</a>
        <a href="#partners">Партнеры</a>
        <a href="#">Услуги</a>
        <a href="#contact">Напишите нам</a>
      </Menu>
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

const Menu = styled.nav`
  display: none;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  z-index: 1;
  > a {
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 131.19%;
    text-transform: uppercase;
    color: #ffffff;
    text-decoration: none;
    width: 100%;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:not(:last-child) {
      margin-right: 48px;
    }

    &:last-child {
      color: ${({ theme: { accent } }) => accent};
      border-left: 1px solid #c4c4c4;
      white-space: nowrap;
      padding-left: 48px;
    }
  }

  ${({
    theme: {
      viewports: { lg, xlg },
    },
  }) => css`
    @media (min-width: ${xlg.min}) and (max-width: ${xlg.max}) {
      > a:not(:last-child) {
        margin-right: 72px;
      }

      > a:last-child {
        padding-left: 72px;
      }
    }

    @media (min-width: ${lg.min}) {
      display: flex;
    }
  `};
`;

const MenuButton = styled(Button)`
  display: none;
  padding: 0 8px;
  width: 32px;
  height: 32px;
  z-index: 1;

  ${({
    theme: {
      viewports: { md },
    },
  }) => css`
    @media (max-width: ${md.max}) {
      display: flex;
    }
  `};
`;

export default Header;
