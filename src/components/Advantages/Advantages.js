import React from "react";
import styled, { css } from "styled-components";
import Lottie from "react-lottie";
import developmentAnimation from "../../animations/DevelopmentAnimation.json";
import qualityResultAnimation from "../../animations/QualityResultAnimation.json";

import AccentText from "../Common/AccentText";

const advantages = [
  {
    animation: developmentAnimation,
    title: (
      <h1>
        Разработка <AccentText>Сложных Систем</AccentText>
      </h1>
    ),
    articles: [
      "Не только знаем как натренировать точную модель, можем оптимизировать ее, обернуть в API, контейнеризировать, развернуть на сервере и подключить мониторинг.",
      "Обучение команды разметчиков, процесс ревью, разрешение конфликтов в кросс-разметке. Используем в работе Active Learning и псевдоразметку для ускорения и удешевления работы разметчиков.",
    ],
  },
  {
    animation: qualityResultAnimation,
    title: (
      <h1>
        <AccentText>Качество</AccentText> Результата
      </h1>
    ),
    articles: [
      "Мы переняли лучшие практики разработки софта: код ревью, автоматическое тестирование, версионирование кода и данных, автоматизированный деплой, парный DS.",
      "Используем не только сверхпопулярные Python и Pytorch, инкорпорируем в рабочий процесс лучшие инструменты.",
    ],
  },
];

const Advantages = () => (
  <Wrapper>
    {advantages.map(({ animation, title, articles }, index) => (
      <Content key={index}>
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
            height="90%"
            width="90%"
          />
        </Animation>
        <Text>
          {title}
          <Articles>
            {articles.map((article, i) => (
              <article key={i}>{article}</article>
            ))}
          </Articles>
        </Text>
      </Content>
    ))}
  </Wrapper>
);

export default Advantages;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({
    theme: {
      viewports: { md },
    },
  }) => css`
    @media (min-width: ${md.min}) {
      padding: 86px 0;
      justify-content: space-between;
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
  margin: 48px 0;
  flex-shrink: 0;

  ${({
    theme: {
      viewports: { md, lg },
    },
  }) => css`
    @media (min-width: ${lg.min}) {
      transform: scale(1.3);
    }

    @media (min-width: ${md.min}) {
      padding: 24px;
    }
  `};
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 490px;
`;

const Articles = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 58px;
  }

  > article {
    text-align: left;
  }

  > article:not(:last-child) {
    margin-bottom: 21px;
  }
`;
