import React from "react";
import styled from "styled-components";

const Text = ({ isError = false, marginTop, children, fontSize = "14px" }) => {
  return (
    <TextContainer marginTop={marginTop} fontSize={fontSize} isError={isError}>
      {children}
    </TextContainer>
  );
};

export default Text;

const TextContainer = styled.p`
  font-size: ${(props) => props.fontSize};
  margin-top: ${(props) => props.marginTop};
  color: ${(props) => (props.isError ? "#FF0000" : "#000")};
`;
