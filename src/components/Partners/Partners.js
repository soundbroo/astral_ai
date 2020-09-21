import React from "react";
import styled from "styled-components";

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

const Partners = () => {
  return (
    <Wrapper>
      <h1>
        Наши <AccentText>Партнеры</AccentText>
      </h1>
      <article>
        Мы сотрудничаем с самыми предовыми компаниями на рынке, станьте одной из
        них!
      </article>
      <Content>
        {partners.map((partner, index) => (
          <li key={index}>{partner}</li>
        ))}
      </Content>
    </Wrapper>
  );
};

export default Partners;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px;
  text-align: center;
  background-image: url(${topToBottomBg});
  background-repeat: none;
  background-position: center;
  height: 820px;
`;

const Content = styled.ul`
  > li {
    height: 48px;
    width: 100%;
    margin: 32px 0;
  }
`;
