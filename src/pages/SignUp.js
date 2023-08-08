import React from "react";
import styled from "styled-components";
import Title from "../components/Title";

const SignUp = () => {
  return (
    <SignUpContainer>
      <Title>Sign Up</Title>
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  width: 635px;
  height: 763px;
`;
