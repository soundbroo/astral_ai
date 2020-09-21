import React, { useState } from "react";
import styled, { css } from "styled-components";

import { ReactComponent as FinanceIcon } from "../../images/TaskFinanceIcon.svg";
import { ReactComponent as MedicalIcon } from "../../images/TaskMedicalIcon.svg";
import { ReactComponent as LogisticsIcon } from "../../images/TaskLogisticsIcon.svg";
import { ReactComponent as GovermentIcon } from "../../images/TaskGovermentIcon.svg";
import { ReactComponent as ProductionIcon } from "../../images/TaskFinanceIcon.svg";
import { ReactComponent as RetailIcon } from "../../images/TaskRetailIcon.svg";
import Button from "../Common/Button";

const tabs = ["Сферы применения", "Задачи для ИИ"];
const scopes = [
  { title: "Финансы", icon: <FinanceIcon /> },
  { title: "Медицина", icon: <MedicalIcon /> },
  { title: "Логистика", icon: <LogisticsIcon /> },
  { title: "Гос.сектор", icon: <GovermentIcon /> },
  { title: "Производство", icon: <ProductionIcon /> },
  { title: "Ритейл", icon: <RetailIcon /> },
];
const tasks = [
  "Биометрия",
  "Подсчет объектов",
  "Заполнение документации",
  "Контроль наличия объектов",
  "Идентификация объектов",
  "Распознавание контекста",
  "Отслеживание объектов",
  "Контроль качества",
  "Распознавание речи",
  "Сравнение с образцом",
  "Распознавание почерка",
  "Автоматический ввод",
];

const TabsView = () => {
  const [active, setActive] = useState(0);

  return (
    <Wrapper>
      <Tabs>
        {tabs.map((tab, index) => (
          <h5
            key={index}
            active={index === active}
            onClick={() => setActive(index)}
          >
            {tab}
          </h5>
        ))}
      </Tabs>
      <Slider active={active}>
        <div />
      </Slider>
      <Content>
        <Scopes active={active === 0}>
          {scopes.map(({ title, icon }, index) => (
            <div key={index}>
              {icon} <h5>{title}</h5>
            </div>
          ))}
        </Scopes>
        <Tasks active={active === 1}>
          {tasks.map((task, index) => (
            <span key={index}>
              <h5>{task}</h5>
            </span>
          ))}
        </Tasks>
      </Content>
      <DiscussButton accent alt="Кнопка: обсудить проект">
        Обсудить проект
      </DiscussButton>
    </Wrapper>
  );
};

export default TabsView;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: -24px;
  width: calc(100% + 48px);
`;

const Tabs = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  padding: 0 24px;
`;

const Slider = styled.div`
  height: 1px;
  width: calc(100% - 32px);
  background: ${({ theme: { tabBorder } }) => tabBorder};
  margin: 0 0 24px 16px;

  > div {
    background: ${({ theme: { accent } }) => accent};
    width: 50%;
    height: 1px;
    transition: transform 1s ease;
    ${({ active }) =>
      active === 1 &&
      css`
        transform: translateX(100%);
      `}
  }
`;

const Content = styled.div`
  overflow: hidden;
  padding: 0 24px;
  margin-bottom: 32px;
`;

const Scopes = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  height: 284px;
  transition: all 1s ease;
  ${({ active }) =>
    !active &&
    css`
      transform: translateX(-100px);
      opacity: 0;
    `};
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
  }
`;

const Tasks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 284px;
  margin-top: -284px;
  transition: all 1s ease;
  ${({ active }) =>
    !active &&
    css`
      transform: translateX(100px);
      opacity: 0;
    `};
  > span {
    margin: auto 0;
    > h5 {
      text-transform: unset;
    }
  }
`;

const DiscussButton = styled(Button)`
  align-self: center;
`;
