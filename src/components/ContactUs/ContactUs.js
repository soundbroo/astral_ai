import React from "react";
import styled, { css } from "styled-components";

import AccentText from "../Common/AccentText";
import Button from "../Common/Button";

const ContactUs = () => {
  return (
    <Wrapper>
      <Text>
        <h1>
          <AccentText>Напишите</AccentText> Нам
        </h1>
        <article>
          Хотите узнать больше о наших сервисах или как искусственный интеллект
          может помочь в развитии вашего бизнеса?
        </article>
        <article>
          Напишите нам и мы свяжемся с Вами в кратчайшие сроки, для этого
          используйте форму или почтовый ящик
          <a href="mailto:ai@astral.ru">{` ai@astral.ru `}</a>
        </article>
        <article>
          Нажимая кнопку Отправить, Вы соглашаетесь с нашими
          <a href="/" target="_blank">
            {` Правилами `}
          </a>
          обработки персональных данных
        </article>
      </Text>
      <Form>
        <input type="text" name="name" placeholder="Имя" />
        <input type="text" name="phone" placeholder="Телефон" />
        <input type="text" name="company" placeholder="Компания" />
        <input type="text" name="email" placeholder="E-mail" />
        <textarea type="text" name="message" placeholder="Сообщение" />
        <Button type="submit" onClick={(e) => e.preventDefault()}>
          Отправить
        </Button>
      </Form>
    </Wrapper>
  );
};

export default ContactUs;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px;
  margin: 58px auto 64px auto;

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

    @media (min-width: ${lg.min}) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex: 1;
      height: 800px;

      > div,
      > form {
        flex: 1;
      }

      > div {
        margin: 0;
      }
    }

    @media (min-width: ${md.min}) and (max-width: ${md.max}) {
      max-width: ${md.maxWidth};
    }

    @media (min-width: ${sm.min}) and (max-width: ${sm.max}) {
      max-width: ${sm.maxWidth};
    }
  `};
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;

  > article {
    text-align: left;
    &:not(:last-child) {
      margin-bottom: 21px;
    }
  }
`;

const Form = styled.form`
  margin-top: 32px;
  > input,
  textarea {
    border: 1px solid #ffffff4d;
    height: 52px;
    width: 100%;
    background: none;
    padding-left: 20px;
    margin-bottom: 30px;
    box-sizing: border-box;
    outline: none;
    resize: none;
    &::placeholder {
      color: #ffffff4d;
    }
  }

  > textarea {
    padding: 12px 20px;
    height: 150px;
    width: 100%;
  }

  > button {
    width: 128px;
    height: 20px;

    > span {
      text-align: left;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.1em;
    }
  }

  ${({
    theme: {
      viewports: { sm, lg, xlg },
    },
  }) => css`
    @media (min-width: ${xlg.min}) {
      width: 574px;
      margin: 0 0 -86px 98px;
    }

    @media (min-width: ${lg.min}) and (max-width: ${lg.max}) {
      width: 432px;
      margin: 0 0 -86px 40px;
    }

    @media (min-width: ${sm.min}) {
      > input {
        width: 48%;
        &:nth-child(2n + 1) {
          margin-right: 4%;
        }
      }
    }
  `};
`;
