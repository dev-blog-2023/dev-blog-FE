import React from "react";
import styled from "styled-components";

const Input = ({ type = "text", placeholder }) => {
  return <InputContainer type={type} placeholder={placeholder} />;
};

export default Input;

const InputContainer = styled.input`
  width: 304px;
  height: 35px;
  border-radius: 5px;
  margin-top: 20px;
  border: 1px solid #848484;
`;
