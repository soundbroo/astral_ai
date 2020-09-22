import React from "react";
import styled, { css } from "styled-components";
import Lottie from "react-lottie";
import celsusAnimation from "../../animations/CelsusAnimation.json";
import astralDocsAnimation from "../../animations/AstralDocsAnimation.json";
import Button from "../Common/Button";

const products = [
  {
    animation: celsusAnimation,
    animationDescription: "Анализ медицинских изображений",
    title: "Celsus",
    articles: [
      "На данный момент в портфеле 4 продукта: маммография, рентген легких, КТ легких, гистопатология.",
      "Сервис применяется в отделениях лучевой диагностики города Москвы в рамках эксперимента по использованию CV/AI решений. Пилотные проекты запущены в 13 регионах РФ.",
    ],
  },
  {
    animation: astralDocsAnimation,
    animationDescription: "Анализ документов",
    title: "Astral Docs",
    articles: [
      "Классификация документов, распознавание текста на фотографиях и сканах, детекция текста, сличение лиц.",
      "Наши системы умеют работать даже с фотографиями согнутых и частично скрытых документов.",
    ],
  },
];

const Products = () => (
  <Wrapper>
    {products.map(
      ({ animation, animationDescription, title, articles }, index) => (
        <Product key={index}>
          <Animation>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            />
          </Animation>
          <Content>
            <Description>{animationDescription}</Description>
            <h1>{title}</h1>
            <Articles>
              {articles.map((article, i) => (
                <article key={i}>{article}</article>
              ))}
            </Articles>
            <MoreButton
              accent
              alt={`Кнопка: подробнее про "${animationDescription}"`}
            >
              Подробнее
            </MoreButton>
          </Content>
        </Product>
      )
    )}
  </Wrapper>
);

export default Products;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  margin: 48px auto;

  ${({
    theme: {
      viewports: { sm, md, lg, xlg },
    },
  }) => css`
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
  `};
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 58px;
  }

  ${({
    theme: {
      viewports: { md },
    },
  }) => css`
    @media (min-width: ${md.min}) {
      padding: 86px 0;

      &:not(:last-child) {
        margin-bottom: 0;
      }

      &:nth-child(2n) {
        flex-direction: row;
      }

      &:nth-child(2n + 1) {
        flex-direction: row-reverse;
      }
    }
  `};
`;

const Animation = styled.div`
  max-width: 378px;
  width: 100%;
  align-self: center;
  flex-shrink: 0;

  ${({
    theme: {
      viewports: { md },
    },
  }) => css`
    @media (min-width: ${md.min}) {
      padding: 24px;
    }
  `};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Articles = styled.div`
  display: flex;
  flex-direction: column;

  > article {
    text-align: left;
    margin-bottom: 21px;
  }
`;

const Description = styled.article`
  color: ${({ theme: { accent } }) => accent};
  text-align: left;
`;

const MoreButton = styled(Button)`
  margin-top: 12px;
`;
