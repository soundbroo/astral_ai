import React, { useState } from "react";
import styled, { css } from "styled-components";

import Button from "../Common/Button";

import astralLogo from "../../images/AstralLogo.svg";
import menu from "../../images/MenuBurgerIcon.svg";

const menuHrefs = [
  { name: "Компетенции", href: "#tasks" },
  { name: "Преимущества", href: "#advantages" },
  { name: "Решения", href: "#products" },
  { name: "Партнеры", href: "#partners" },
  { name: "Услуги", href: "#" },
  { name: "Напишите нам", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    const toggleTo = !open;
    setOpen(toggleTo);
    document.body.style.overflow = toggleTo ? "hidden" : "auto";
  };

  const close = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <Wrapper open={open}>
      <img src={astralLogo} alt="Astral логотип" />
      <Nav>
        {menuHrefs.map(({ href, name }) => (
          <a key={href} href={href}>
            {name}
          </a>
        ))}
      </Nav>
      <MobileMenu open={open}>
        {menuHrefs.map(({ href, name }) => (
          <a key={href} href={href} onClick={close}>
            {name}
          </a>
        ))}
      </MobileMenu>
      <MenuButton
        icon={menu}
        alt="Кнопка меню"
        open={open}
        onImgClick={toggleOpen}
      />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 24px 88px 24px;
  margin: 0 auto;

  > img {
    z-index: ${({ open }) => (open ? 3 : 1)};
  }

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

const Nav = styled.nav`
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

const MobileMenu = styled.nav`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(16 24 60 / 0.96);
  z-index: 2;
  padding: 28px;
  margin: 0 auto;

  > a {
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 131.19%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #ffffff;
    text-align: left;

    &:not(:last-child) {
      margin-bottom: 28px;
    }

    &:last-child {
      color: ${({ theme: { accent } }) => accent};
      border-top: 1px solid #c4c4c4;
      white-space: nowrap;
      padding-top: 24px;
    }
  }

  ${({
    theme: {
      viewports: { sm, md, lg, xlg },
    },
  }) => css`
    > a {
      margin-left: auto;
      margin-right: auto;
      width: 100%;

      @media (min-width: ${xlg.min}) {
        max-width: ${xlg.maxWidth};
      }

      @media (min-width: ${lg.min}) and (max-width: ${lg.max}) {
        max-width: ${lg.maxWidth};
      }

      @media (min-width: ${md.min}) and (max-width: ${md.max}) {
        max-width: ${md.maxWidth};
      }

      @media (min-width: ${sm.min}) and (max-width: ${sm.max}) {
        max-width: ${sm.maxWidth};
      }
    }
  `};
`;

const MenuButton = styled(Button)`
  display: none;
  padding: 0 8px;
  width: 32px;
  height: 32px;
  z-index: ${({ open }) => (open ? 2 : 1)};

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
