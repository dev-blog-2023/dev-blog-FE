import React from "react";
import styled from "styled-components";

const Input = ({
  type = "text",
  placeholder,
  width = "304px",
  height = "35px",
  onChange,
}) => {
  return (
    <InputContainer
      type={type}
      placeholder={placeholder}
      width={width}
      height={height}
      onChange={onChange}
    />
  );
};

export default Input;

const InputContainer = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 5px;
  margin-top: 20px;
  border: 1px solid #848484;
`;
