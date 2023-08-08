import React from "react";
import styled from "styled-components";

const Title = ({ children }) => {
  return <TitleText>{children}</TitleText>;
};

export default Title;

const TitleText = styled.h2`
  margin-top: 50px;
  text-align: center;
`;
