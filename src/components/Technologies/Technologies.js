import React from "react";
import styled from "styled-components";

import bottomToTopBg from "../../images/BottomToTopBg.svg";
import technologiesTitleBg from "../../images/TechnologiesTitleBg.svg";

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
  padding: 0 24px;
  background-image: url(${bottomToTopBg});
  background-repeat: no-repeat;
  background-position: center;
  height: 750px;
  h2 {
    font-family: Montserrat;
  }
`;

const Title = styled.div`
  background-image: url(${technologiesTitleBg});
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 120px;
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
`;
