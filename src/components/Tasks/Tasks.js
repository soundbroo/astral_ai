import React from "react";
import styled, { css } from "styled-components";

import AccentText from "../Common/AccentText";
import TabsView from "./TabsView";

import topToBottomBg from "../../images/TopToBottomBg.svg";

const Tasks = () => {
  return (
    <Wrapper>
      <h1>
        <AccentText>Сферы</AccentText> и Задачи для ИИ
      </h1>
      <article>
        Мы предлагаем множество решений в различных сферах и абсолютно
        нестандартных задач, также мы готовы к новым предложениям
      </article>
      <TabsView />
    </Wrapper>
  );
};

export default Tasks;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px;
  text-align: center;
  background-image: url(${topToBottomBg});
  background-repeat: no-repeat;
  background-position: center;
  height: 878px;

  ${({
    theme: {
      viewports: { xxlg },
    },
  }) => css`
    @media (min-width: ${xxlg.min}) {
      background-size: cover;
      height: 1186px;
    }
  `};

  > h1,
  > article {
    margin-left: auto;
    margin-right: auto;
  }

  > h1,
  > article,
  > div {
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
    }
  }
`;
