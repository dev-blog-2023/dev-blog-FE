import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

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
                <FormTitle>Sign in</FormTitle>
                <SignUpText>
                  Don't have an account?{" "}
                  <SignUpLink>Click here to sign up</SignUpLink>
                </SignUpText>
                <LoginForm>
                  <InputContainer placeholder="Enter Username" />
                  <InputContainer
                    type="password"
                    placeholder="Enter password"
                  />
                  <LoginBtn>Login</LoginBtn>
                </LoginForm>
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

const FormTitle = styled.h2`
  margin-top: 50px;
  text-align: center;
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

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.input`
  width: 304px;
  height: 35px;
  border-radius: 5px;
  margin-top: 20px;
  border: 1px solid #848484;
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
