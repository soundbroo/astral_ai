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
          <h5 key={index} onClick={() => setActive(index)}>
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
  ${({
    theme: {
      viewports: { xsm, sm, md, lg, xlg },
    },
  }) => css`
    @media (min-width: ${md.min}) {
      margin-top: 64px;
    }

    @media (min-width: ${sm.min}) and (max-width: ${sm.max}) {
      margin-top: 48px;
    }

    @media (max-width: ${xsm.max}) {
      margin-top: 32px;
    }

    @media (min-width: ${sm.min}) {
      margin-left: auto;
      margin-right: auto;
      width: 100%;
    }
  `};
`;

const Tabs = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-self: center;
  width: 100%;
  padding: 0 24px;
  max-width: 637px;

  h5 {
    ${({
      theme: {
        viewports: { md },
      },
    }) => css`
      @media (min-width: ${md.min}) {
        font-size: 14px;
      }
    `};
  }
`;

const Slider = styled.div`
  height: 1px;
  width: calc(100% - 32px);
  background: ${({ theme: { tabBorder } }) => tabBorder};
  margin: 0 0 24px 0;
  max-width: 637px;
  align-self: center;

  > div {
    background: ${({ theme: { accent } }) => accent};
    width: 50%;
    height: 1px;
    transition: transform 1s ease;
    ${({ active }) =>
      active === 1 &&
      css`
        transform: translateX(100%);
      `};
  }

  ${({
    theme: {
      viewports: { sm },
    },
  }) => css`
    @media (min-width: ${sm.min}) {
      width: 100%;
    }
  `};
`;

const Content = styled.div`
  overflow: hidden;
  padding: 0 24px;
  margin: 0 auto 32px auto;
  ${({
    theme: {
      viewports: { sm },
    },
  }) => css`
    @media (min-width: ${sm.min}) and (max-width: ${sm.max}) {
      max-width: 375px;
    }
  `};
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

  ${({
    theme: {
      viewports: { sm, md, lg, xlg },
    },
  }) => css`
    @media (min-width: ${lg.min}) {
      height: 134px;
      margin: 40px 0;
      svg {
        width: 92px;
        height: 92px;
      }
    }

    @media (min-width: ${md.min}) and (max-width: ${md.max}) {
      height: 120px;
      margin: 24px 0;
    }

    @media (min-width: ${md.min}) {
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
  `};
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

  ${({
    theme: {
      viewports: { sm, md, lg, xlg },
    },
  }) => css`
    @media (min-width: ${lg.min}) {
      height: 224px;
      margin-top: -224px;
    }

    @media (min-width: ${md.min}) and (max-width: ${md.max}) {
      height: 168px;
      margin-top: -168px;
    }

    @media (min-width: ${md.min}) {
      > span {
        height: 42px;
      }
    }
  `};
`;

const DiscussButton = styled(Button)`
  align-self: center;
`;
