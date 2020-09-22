import React from "react";
import styled from "styled-components";

import AccentText from "../Common/AccentText";
import Button from "../Common/Button";

import playIcon from "../../images/PlayIcon.svg";
import cvIcon from "../../images/CVIcon.svg";
import nlpIcon from "../../images/NLPIcon.svg";
import mlIcon from "../../images/MLIcon.svg";
import sphereSvg from "../../images/Sphere.svg";
import sphereWebm from "../../images/Sphere.webm";
import sphereMp4 from "../../images/Sphere.mp4";

const Intro = () => (
  <Wrapper>
    <IntroTitle>
      <h1>
        Astral AI ИИ <AccentText>для бизнеса</AccentText>
      </h1>
      <p>
        Разработка и интеграция ИИ‑решений для трансформации вашего бизнеса{" "}
      </p>
      <Buttons>
        <PresentationButton
          accent
          icon={playIcon}
          alt="Кнопка просмотра презентации"
        >
          Презентация
        </PresentationButton>
        <Button alt="Кнопка: сотрудничество">Сотрудничество</Button>
      </Buttons>
    </IntroTitle>
    <Sphere>
      <video autoPlay loop playsInline preload="auto" muted>
        <source type="video/webm" src={sphereWebm} />
        <source type="video/mp4" src={sphereMp4} />
        <img src={sphereSvg} alt="Изображение: сфера" />
      </video>
    </Sphere>
    <Scope>
      <li>
        <img src={cvIcon} alt="Иконка: сфера компьютерного зрения" />
        <h2>CV - Компьютерное зрение</h2>
        <p>
          Классификация, детекция, сегментация, OCR (оптическое распознавание
          символов), идентификация, трекинг, генерация изображений,
          видеоаналитика.
        </p>
      </li>
      <li>
        <img src={nlpIcon} alt="Иконка: сфера компьютерного зрения" />
        <h2>NLP - ОБРАБОТКА ЯЗЫКА</h2>
        <p>
          Автоматизированные ответы на запросы пользователей, классификация
          текстов, идентификация сущностей в тексте, саммеризация текстов.
        </p>
      </li>
      <li>
        <img src={mlIcon} alt="Иконка: сфера компьютерного зрения" />
        <h2>ML - Машинное обучение</h2>
        <p>
          Построение моделей на табличных данных (классификация и регрессия),
          предсказания на временных рядах, скоринг, рекомендательные системы.
        </p>
      </li>
    </Scope>
  </Wrapper>
);

export default Intro;

const Wrapper = styled.div`
  padding: 0 24px;
`;

const IntroTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
`;

const PresentationButton = styled(Button)`
  padding: 0 16px;
  margin-bottom: 12px;
`;

const Sphere = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% + 48px);
  height: 500px;
  background: radial-gradient(
    45.06% 45.06% at 50% 50%,
    #1a3286 45.38%,
    #10183c 100%
  );
  background-size: 500px;
  background-position: center;
  background-repeat: no-repeat;
  margin: -50px 0 0 -24px;

  > video {
    mix-blend-mode: screen;
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
`;

const Scope = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 52px;

  > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    &:not(:last-child) {
      margin-bottom: 32px;
    }

    > h2 {
      margin-top: 32px;
      color: ${({ theme: { accent } }) => accent};
    }

    > p {
      line-height: 168.4%;
    }
  }
`;
