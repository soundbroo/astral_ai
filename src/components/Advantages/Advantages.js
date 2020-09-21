import React from "react";
import styled from "styled-components";
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
        {title}
        <Articles>
          {articles.map((article, i) => (
            <article key={i}>{article}</article>
          ))}
        </Articles>
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
  margin-bottom: 48px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
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
