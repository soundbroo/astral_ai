import React from "react";
import styled, { css } from "styled-components";

import AccentText from "../Common/AccentText";
import Button from "../Common/Button";

import playIcon from "../../images/PlayIcon.svg";
import cvIcon from "../../images/CVIcon.svg";
import nlpIcon from "../../images/NLPIcon.svg";
import mlIcon from "../../images/MLIcon.svg";
import sphereSvg from "../../images/Sphere.svg";
import sphereWebm from "../../images/Sphere.webm";
import sphereMp4 from "../../images/Sphere.mp4";

const AutoplayVideo = () => (
  <Sphere
    dangerouslySetInnerHTML={{
      __html: `<video muted autoPlay loop playsInline>
    <source type="video/webm" src=${sphereWebm} />
    <source type="video/mp4" src=${sphereMp4} />
    <img src=${sphereSvg} alt="Изображение: сфера" />
  </video>`,
    }}
  ></Sphere>
);

const Intro = () => (
  <Wrapper>
    <IntroContent>
      <IntroTitle>
        <h1>
          Astral AI ИИ <AccentText>для бизнеса</AccentText>
        </h1>
        <p>
          Разработка и интеграция ИИ‑решений для трансформации вашего бизнеса
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
      <AutoplayVideo />
    </IntroContent>
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
  margin: 0 auto;

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
  `}
`;

const IntroContent = styled.div`
  display: flex;
  flex-direction: column;

  ${({
    theme: {
      viewports: { lg, xlg },
    },
  }) => css`
    @media (min-width: ${xlg.min}) {
      max-height: 500px;
      margin-bottom: 235px;
    }

    @media (min-width: ${lg.min}) and (max-width: ${lg.max}) {
      max-height: 400px;
      margin-bottom: 205px;
    }

    @media (min-width: ${lg.min}) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  `}
`;

const IntroTitle = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
  z-index: 1;

  ${({
    theme: {
      viewports: { sm },
    },
  }) => css`
    @media (min-width: ${sm.min}) {
      flex-direction: row;
      justify-content: flex-start;
      > button {
        margin-bottom: 0;
        &:first-child {
          margin-right: 24px;
        }
      }
    }
  `}
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
  margin: -50px 0 -42px -24px;

  > video {
    mix-blend-mode: screen;
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

  ${({
    theme: {
      viewports: { sm, md, lg, xlg },
    },
  }) => css`
    @media (min-width: ${xlg.min}) {
      height: 1000px;
      min-width: 1000px;
      background-size: 1000px;
      margin: 0 0 0 -100px;
      > video {
        width: 450px;
        height: 450px;
      }
    }

    @media (min-width: ${lg.min}) and (max-width: ${lg.max}) {
      margin: 0 0 0 -100px;
    }

    @media (min-width: ${md.min}) and (max-width: ${md.max}) {
      margin: -50px 0 -42px -24px;
    }

    @media (min-width: ${sm.min}) and (max-width: ${lg.max}) {
      height: 750px;
      min-width: 750px;
      background-size: 750px;
      > video {
        width: 400px;
        height: 400px;
      }
    }

    @media (min-width: ${sm.min}) and (max-width: ${sm.max}) {
      height: 620px;
      min-width: 320px;
      background-size: 620px;
    }
  `}
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
      font-size: 14px;
    }
  }

  ${({
    theme: {
      viewports: { lg },
    },
  }) => css`
    @media (min-width: ${lg.min}) {
      flex-direction: row;
      > li {
        padding: 0 12px;
      }
    }
  `}
`;
