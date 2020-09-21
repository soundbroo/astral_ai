import React from "react";
import styled from "styled-components";

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
`;

const MenuButton = styled(Button)`
  padding: 0 8px;
  width: 32px;
  height: 32px;
`;

export default Header;
