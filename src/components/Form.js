import React from "react";
import styled from "styled-components";

const Form = ({ children }) => {
  return <FormContainer>{children}</FormContainer>;
};

export default Form;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
