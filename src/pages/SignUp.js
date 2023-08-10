import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Form from "../components/Form";
import Input from "../components/Input";
import Text from "../components/Text";
import useModal from "../hooks/useModal";
import Modal from "../components/Modal";

const SignUp = () => {
  const { isShowing, toggle } = useModal();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const handleDuplicate = () => {};
  const handleAuth = () => {};
  const handleSignUp = () => {};

  return (
    <SignUpWrapper>
      <Nav />
      <SignUpContainer>
        <Title>Sign Up</Title>
        <Form>
          <InputContainer>
            <Input
              width="232px"
              placeholder="Enter username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <InputBtn onClick={handleDuplicate}>중복확인</InputBtn>
          </InputContainer>
          <InputContainer>
            <Input
              width="232px"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputBtn onClick={handleAuth}>인증요청</InputBtn>
          </InputContainer>
          <Input
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter new password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm password"
            value={confirmPw}
            onChange={(e) => setConfirmPw(e.target.value)}
          />
          <SignUpBtn onClick={(handleSignUp, toggle)}>Sign me up</SignUpBtn>
          {isShowing ? (
            <Modal
              isShowing={isShowing}
              hide={toggle}
              width="321px"
              height="161px"
            >
              <CompleteContainer>
                <LogoImg
                  src="https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/blog-512.png"
                  alt="logo"
                />
                <Text fontSize="12px">
                  회원가입이 완료되었습니다. <br />
                  어서오세요
                </Text>
              </CompleteContainer>
            </Modal>
          ) : null}
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

const InputContainer = styled.div`
  display: flex;
`;

const InputBtn = styled.button`
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
  &:hover {
    cursor: pointer;
  }
`;

const CompleteContainer = styled.div`
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 62px;
  height: 62px;
`;
