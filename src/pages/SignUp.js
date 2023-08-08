import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Form from "../components/Form";
import Input from "../components/Input";

const SignUp = () => {
  return (
    <SignUpWrapper>
      <Nav />
      <SignUpContainer>
        <Title>Sign Up</Title>
        <Form>
          <Input placeholder="Enter username" />
          <Input placeholder="Enter email" />
          <Input placeholder="Enter name" />
          <Input type="password" placeholder="Enter new password" />
          <Input type="password" placeholder="Confirm password" />
        </Form>
      </SignUpContainer>
    </SignUpWrapper>
  );
};

export default SignUp;

const SignUpWrapper = styled.div`
  background-color: #f5f5f5;
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #848484;
  border-radius: 10px;
  background-color: #fff;
  width: 530px;
  height: 700px;
  margin: auto;
`;
