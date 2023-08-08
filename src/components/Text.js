import React from "react";
import styled from "styled-components";

const Text = ({ isError = false, marginTop, children }) => {
  return (
    <TextContainer marginTop={marginTop} isError={isError}>
      {children}
    </TextContainer>
  );
};

export default Text;

const TextContainer = styled.p`
  margin-top: ${(props) => props.marginTop};
  color: ${(props) => (props.isError ? "#FF0000" : "#000")};
`;
