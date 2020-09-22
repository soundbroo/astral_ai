import React from "react";
import styled, { css } from "styled-components";

import astralLogo from "../../images/AstralLogo.svg";
import bottomToTopBg from "../../images/BottomToTopBg.svg";

const menu = [
  { title: "Компания", items: ["Контакты", "Вопросы"] },
  { title: "Документы", items: ["Правовая информация", "Партнерам"] },
  { title: "Разработчикам", items: ["Полезные статьи", "FAQ"] },
];

const Footer = () => {
  return (
    <Wrapper>
      <Top>
        <img src={astralLogo} alt="Astral логотип" />
        <Menu>
          {menu.map(({ title, items }, index) => (
            <li key={index}>
              <h5>{title}</h5>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>
                    <a href="/" target="_blank">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </Menu>
      </Top>
      <Bottom>
        <h3>ГК “Астрал” 1993-2020©</h3>
        <a href="mailto:ai@astral.ru">ai@astral.ru</a>
      </Bottom>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 24px;
  background-image: url(${bottomToTopBg});
  background-repeat: none;
  background-position: center top;
  height: 695px;

  ${({
    theme: {
      viewports: { sm, md, lg, xlg },
    },
  }) => css`
    @media (min-width: ${sm.min}) {
      height: 412px;
    }

    > div {
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

const Top = styled.div`
  display: flex;
  flex-direction: column;
  margin: 132px auto 0 auto;
  width: 100%;

  > img {
    margin: 0 0 24px -40px;
  }

  a {
    color: #ffffff;
  }

  ${({
    theme: {
      viewports: { sm, md },
    },
  }) => css`
    @media (min-width: ${md.min}) {
      flex-direction: row;
      justify-content: space-between;
    }

    @media (min-width: ${sm.min}) and (max-width: ${sm.max}) {
      margin: 106px auto 0 auto;
    }

    > img {
      @media (min-width: ${sm.min}) {
        margin: 0 0 24px 0;
        align-self: flex-start;
      }
    }
  `};
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 16px 0;

  > li {
    > h5 {
      color: ${({ theme: { accent } }) => accent};
      text-align: left;
    }
    > ul > li {
      font-family: Manrope;
      font-size: 12px;
      line-height: 131.19%;
      letter-spacing: 0.11em;
      color: #ffffff;
      &:not(:last-child) {
        margin-bottom: 16px;
      }
      &:last-child {
        margin-bottom: 6px;
      }
    }
  }

  ${({
    theme: {
      viewports: { sm, md, lg },
    },
  }) => css`
    @media (min-width: ${lg.min}) {
      max-width: 560px;
    }

    @media (min-width: ${md.min}) {
      max-width: 460px;
      width: 100%;
    }

    @media (min-width: ${sm.min}) {
      flex-direction: row;
      justify-content: space-between;

      > li > h5 {
        margin-bottom: 40px;
      }
    }
  `};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 28px 0;
  border-top: 1px solid #c4c4c433;
  margin: 0 auto;

  h3,
  a {
    font-weight: 500;
    font-size: 14px;
    line-height: 170.9%;
  }

  ${({
    theme: {
      viewports: { sm },
    },
  }) => css`
    @media (min-width: ${sm.min}) and (max-width: ${sm.max}) {
      padding: 12px 0;
    }
  `};
`;
