import React from "react";
import styled from "styled-components";

const AccentText = ({ className, children }) => (
  <Accent className={className}>{children}</Accent>
);

export default AccentText;

const Accent = styled.span`
  color: ${({ theme: { accent } }) => accent};
`;
