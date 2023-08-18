import React from "react";
import styled from "styled-components";

const Title = ({ children, marginTop = "50px", textAlign = "center" }) => {
  return (
    <TitleText marginTop={marginTop} textAlign={textAlign}>
      {children}
    </TitleText>
  );
};

export default Title;

const TitleText = styled.h2`
  margin-top: ${(props) => props.marginTop};
  text-align: ${(props) => props.textAlign};
`;
