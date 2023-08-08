import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import Title from "../components/Title";
import Input from "../components/Input";
import Form from "../components/Form";

const Login = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalOverlay />
          <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
            <PopupContainer>
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
                <SignUpText>
                  Don't have an account?{" "}
                  <SignUpLink>Click here to sign up</SignUpLink>
                </SignUpText>
                <Form>
                  <Input placeholder="Enter Username" />
                  <Input type="password" placeholder="Enter password" />
                  <LoginBtn>Login</LoginBtn>
                </Form>
              </LoginFormContainer>
            </PopupContainer>
          </ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null;

export default Login;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

const PopupContainer = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  width: 648px;
  height: 414px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #000;
  display: flex;
`;

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

const SignUpText = styled.p`
  text-align: center;
`;

const SignUpLink = styled.a`
  text-decoration: underline;
  color: #f86f03;
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
