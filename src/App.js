import React from "react";
import styled from "styled-components";

import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Tasks from "./components/Tasks/Tasks";
import Advantages from "./components/Advantages/Advantages";
import Technologies from "./components/Technologies/Technologies";
import Products from "./components/Products/Products";
import Partners from "./components/Partners/Partners";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <Wrapper>
      <Header />
      <Intro />
      <Tasks />
      <Advantages />
      <Technologies />
      <Products />
      <Partners />
      <ContactUs />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: inline;
  flex-direction: column;
  align-items: center;
`;
