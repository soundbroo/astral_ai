import React from "react";
import styled, { css } from "styled-components";

import AccentText from "../Common/AccentText";

import topToBottomBg from "../../images/TopToBottomBg.svg";
import { ReactComponent as Vostochniy } from "../../images/PartnerVostochniy.svg";
import { ReactComponent as Vtb } from "../../images/PartnerVtb.svg";
import { ReactComponent as Unicredit } from "../../images/PartnerUniCredit.svg";
import { ReactComponent as Gazprom } from "../../images/PartnerGazprom.svg";
import { ReactComponent as Sber } from "../../images/PartnerSber.svg";

const partners = [
  <Vostochniy />,
  <Vtb />,
  <Unicredit />,
  <Gazprom />,
  <Sber />,
];

const Partners = () => (
  <Wrapper id="partners">
    <h1>
      Наши <AccentText>Партнеры</AccentText>
    </h1>
    <article>
      Мы сотрудничаем с самыми предовыми компаниями на рынке, станьте одной из
      них!
    </article>
    <Content>
      {partners.map((partner, index) => (
        <div key={index}>{partner}</div>
      ))}
    </Content>
  </Wrapper>
);

export default Partners;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px;
  text-align: center;
  background-image: url(${topToBottomBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 906px;

  > article {
    margin-bottom: 32px !important;
    margin-top: 30px !important;
  }

  ${({
    theme: {
      viewports: { sm, md, lg, xlg, xxlg },
    },
  }) => css`
    @media (min-width: ${xxlg.min}) {
      height: 1194px;
    }

    > h1,
    > article,
    > div {
      margin: 0 auto;

      @media (min-width: ${xlg.min}) {
        max-width: ${xlg.maxWidth};
      }

      @media (min-width: ${lg.min}) and (max-width: ${lg.max}) {
        max-width: ${lg.maxWidth};
      }

      @media (min-width: ${md.min}) and (max-width: ${md.max}) {
        max-width: ${`${Number(md.maxWidth.replace("px", "")) + 24}px`};
      }

      @media (min-width: ${sm.min}) and (max-width: ${sm.max}) {
        max-width: ${sm.maxWidth};
      }
    }
  `};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  > div {
    margin: 32px 0;

    ${({
      theme: {
        viewports: { sm },
      },
    }) => css`
      @media (min-width: ${sm.min}) and (max-width: ${sm.max}) {
        margin: 21px 0;
      }
    `};
    > svg {
      height: 48px;
      width: inherit;

      ${({
        theme: {
          viewports: { sm, md, lg },
        },
      }) => css`
        @media (min-width: ${lg.min}) {
          height: 76px;
        }

        @media (min-width: ${sm.min}) and (max-width: ${md.max}) {
          height: 60px;
        }
      `};
    }
  }
`;
