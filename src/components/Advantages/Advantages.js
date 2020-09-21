import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import developmentAnimation from "../../animations/DevelopmentAnimation.json";
import qualityResultAnimation from "../../animations/QualityResultAnimation.json";

import AccentText from "../Common/AccentText";

const Advantages = () => (
  <Wrapper>
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: developmentAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
      height="90%"
      width="90%"
      isStopped={false}
      isPaused={false}
    />
    <h1>
      Разработка <AccentText>Сложных Систем</AccentText>
    </h1>
    <Articles>
      <article>
        Не только знаем как натренировать точную модель, можем оптимизировать
        ее, обернуть в API, контейнеризировать, развернуть на сервере и
        подключить мониторинг.
      </article>
      <article>
        Обучение команды разметчиков, процесс ревью, разрешение конфликтов в
        кросс-разметке. Используем в работе Active Learning и псевдоразметку для
        ускорения и удешевления работы разметчиков.
      </article>
    </Articles>
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: qualityResultAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
      height="90%"
      width="90%"
      isStopped={false}
      isPaused={false}
    />
    <h1>
      <AccentText>Качество</AccentText> Результата
    </h1>
    <Articles>
      <article>
        ы переняли лучшие практики разработки софта: код ревью, автоматическое
        тестирование, версионирование кода и данных, автоматизированный деплой,
        парный DS.
      </article>
      <article>
        Используем не только сверхпопулярные Python и Pytorch, инкорпорируем в
        рабочий процесс лучшие инструменты.
      </article>
    </Articles>
  </Wrapper>
);

export default Advantages;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
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
