import React from "react";
import styled from "styled-components";

const Title = ({ children, textAlign = "center" }) => {
  return <TitleText textAlign={textAlign}>{children}</TitleText>;
};

export default Title;

const TitleText = styled.h2`
  margin-top: 50px;
  text-align: ${(props) => props.textAlign};
`;
