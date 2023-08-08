import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import Title from "../components/Title";
import Input from "../components/Input";
import Form from "../components/Form";
import SubTitle from "../components/SubTitle";
import LinkText from "../components/LinkText";
import Modal from "../components/Modal";

const Login = ({ isShowing, hide }) =>
  isShowing ? (
    <Modal>
      <LogoContainer>
        <LogoImg
          src="https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/blog-512.png"
          alt="logo"
        />
        <LogoText>Welcome!</LogoText>
      </LogoContainer>
      <LoginFormContainer>
        <CancelBtn onClick={hide}>X</CancelBtn>
        <Title>Sign in</Title>
        <SubTitle>
          Don't have an account?{" "}
          <LinkText href="/signup">Click here to sign up</LinkText>
        </SubTitle>
        <Form>
          <Input placeholder="Enter Username" />
          <Input type="password" placeholder="Enter password" />
          <LoginBtn>Login</LoginBtn>
        </Form>
      </LoginFormContainer>
    </Modal>
  ) : null;

export default Login;

const LogoContainer = styled.div`
  border-top-left-radius: 10px;
  background-color: #000;
  width: 211px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 62px;
  height: 62px;
`;

const LogoText = styled.p`
  color: #fff;
`;

const LoginFormContainer = styled.div`
  width: 430px;
`;

const CancelBtn = styled.button`
  margin-top: 10px;
  outline: none;
  border: none;
  background-color: #fff;
  float: right;
  &:hover {
    cursor: pointer;
  }
`;

const LoginBtn = styled.button`
  margin-top: 40px;
  border: 1px solid #000;
  background-color: #fff;
  border-radius: 5px;
  width: 305px;
  height: 36px;
  &:hover {
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`;
