import React from "react";
import styled from "styled-components";

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
  background-repeat: none;
  background-position: center;
  height: 878px;
`;
