import React from "react";
import styled from "styled-components";
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
  margin-bottom: 86px;
`;

const Product = styled.div`
  &:not(:last-child) {
    margin-bottom: 58px;
  }
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
