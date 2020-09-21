import React from "react";
import styled from "styled-components";

import AccentText from "../Common/AccentText";
import Button from "../Common/Button";

const ContactUs = () => {
  return (
    <Wrapper>
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
  margin: 58px 0 64px 0;

  > article {
    text-align: left;
    &:not(:last-child) {
      margin-bottom: 21px;
    }
    &:last-child {
      margin-bottom: 56px;
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
    &::placeholder {
      color: #ffffff4d;
    }
  }

  > textarea {
    padding: 12px 20px;
    height: 150px;
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
`;
