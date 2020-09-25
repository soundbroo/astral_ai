import React from "react";
import styled, { css } from "styled-components";

import bottomToTopBg from "../../images/BottomToTopBg.svg";
import technologiesTitleBg from "../../images/TechnologiesTitleBg.svg";
import technologiesIcon from "../../images/TechnologiesIcon.svg";
import technologiesIconLg from "../../images/TechnologiesIconLg.svg";

const technologies = [
  {
    sphere: "Data Science",
    list: [
      "PyTorch, MxNet, Tensorflow, TensorRT OpenVino, DVC, Supervisely, AmazonS3",
    ],
  },
  {
    sphere: "DEVOPS",
    list: ["Docker, Kubernetes, Sentry, Elasticsearch, Logstash,  Kibana"],
  },
  {
    sphere: "Front-end",
    list: ["React, NextJS, MaterialUI, Styled-components, GraphQL"],
  },
  {
    sphere: "Back-end",
    list: ["Microservices, .Net core, NodeJs, Python, GraphQl, PostgreSql"],
  },
];

const Technologies = () => (
  <Wrapper>
    <Title>
      <h2>Технологии</h2>
    </Title>
    <List>
      {technologies.map(({ sphere, list }, index) => (
        <li key={index}>
          <h2>{sphere}</h2>
          {list.map((el, i) => (
            <p key={i}>{el}</p>
          ))}
        </li>
      ))}
    </List>
  </Wrapper>
);

export default Technologies;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  background-image: url(${bottomToTopBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 820px;

  h2 {
    font-family: Montserrat;
    line-height: 24px !important;
  }

  ${({
    theme: {
      viewports: { sm, md, lg, xxlg },
    },
  }) => css`
    @media (min-width: ${xxlg.min}) {
      height: 1076px;
    }
    > div,
    > ul {
      @media (min-width: ${lg.min}) {
        max-width: ${lg.maxWidth};
      }

      @media (min-width: ${md.min}) and (max-width: ${md.max}) {
        max-width: ${md.maxWidth};
      }

      @media (min-width: ${sm.min}) and (max-width: ${sm.max}) {
        max-width: ${sm.maxWidth};
      }
    }
  `};
`;

const Title = styled.div`
  background-image: url(${technologiesTitleBg});
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 32px;
  width: 208px;
  height: 50px;
  > h2 {
    line-height: 20px;
    letter-spacing: 0.15em;
  }
`;

const List = styled.ul`
  > li {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
    > h2 {
      color: ${({ theme: { accent } }) => accent};
      line-height: 191.19%;
      text-align: left;
      margin-bottom: -6px;
    }
    > p {
      line-height: 170.69%;
    }
  }

  ${({
    theme: {
      viewports: { sm, md, lg },
    },
  }) => css`
    @media (min-width: ${lg.min}) {
      grid-column-gap: 426px;
      grid-row-gap: 96px;
      background-image: url(${technologiesIconLg});
      background-position: 54% 55%;
    }

    @media (min-width: ${md.min}) and (max-width: ${md.max}) {
      grid-column-gap: 206px;
      grid-row-gap: 110px;
      background-image: url(${technologiesIcon});
      background-position: 54% 50%;
    }

    @media (min-width: ${md.min}) {
      display: grid;
      grid-template-columns: 278px 278px;
      grid-template-rows: 1fr 1fr;
      background-repeat: no-repeat;
      margin-left: -44px;

      > li:not(:last-child) {
        margin-bottom: 0;
      }

      > li > p {
        font-size: 16px;
      }

      > li:nth-child(2n + 1) {
        > h2,
        > p {
          text-align: right;
        }
      }
    }

    @media (min-width: ${sm.min}) and (max-width: ${sm.max}) {
      > li > p {
        font-size: 14px;
      }
    }
  `};
`;
