import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Form from "../components/Form";
import Input from "../components/Input";
import Text from "../components/Text";

const SignUp = () => {
  return (
    <SignUpWrapper>
      <Nav />
      <SignUpContainer>
        <Title>Sign Up</Title>
        <Form>
          <Input placeholder="Enter username" />
          <EmailContainer>
            <Input width="232px" placeholder="Enter email" />
            <EmailBtn>인증요청</EmailBtn>
          </EmailContainer>
          <Input placeholder="Enter name" />
          <Input type="password" placeholder="Enter new password" />
          <Input type="password" placeholder="Confirm password" />
          <SignUpBtn>Sign me up</SignUpBtn>
        </Form>
        <Text marginTop="120px">©2023 dev-blog-2023. All rights reserved</Text>
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

const EmailContainer = styled.div`
  display: flex;
`;

const EmailBtn = styled.button`
  width: 72px;
  height: 37px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
`;

const SignUpBtn = styled.button`
  width: 305px;
  height: 36px;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  margin-top: 70px;
  border: none;
`;
