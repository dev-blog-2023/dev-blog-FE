import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Form from "../components/Form";
import Input from "../components/Input";
import Text from "../components/Text";
import useModal from "../hooks/useModal";
import Modal from "../components/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

const SignUp = () => {
  const { isShowing, toggle } = useModal();
  const [verified, setVerified] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userToken, setUserToken] = useState("");
  const [authShow, setAuthShow] = useState(false);
  const [isSame, setIsSame] = useState(false);
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleDuplicate = (e) => {
    e.preventDefault();
    axios({
      url: "http://52.79.222.161:8080/verifyUsername",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
      data: {
        username: userName,
      },
    })
      .then(function (response) {
        if (response.status === 200) {
          setVerified(true);
          alert("중복되지 않는 username입니다.");
        } else {
          alert("중복된 username입니다. \n 다시 입력해주세요.");
          setUserName("");
          setVerified(false);
        }
      })
      .catch((error) => {
        alert("다시 시도해주십시오.");
        console.log(error.response);
      });
  };

  const handleAuth = (e) => {
    e.preventDefault();
    setAuthShow(true);
    axios({
      url: "http://52.79.222.161:8080/verifyEmail",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
      data: {
        email: userEmail,
      },
    })
      .then(function (response) {
        console.log("이메일 전송 완료");
      })
      .catch((error) => {
        alert("다시 시도해주십시오.");
        console.log(error.response);
      });
  };

  const handleToken = (e) => {
    e.preventDefault();
    axios({
      url: `http://52.79.222.161:8080/verifyEmail/${userToken}`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
      data: {
        email: userEmail,
      },
    })
      .then(function (response) {
        if (response.status === 200) {
          setIsSame(true);
          alert("인증이 완료되었습니다.");
        } else {
          setIsSame(false);
          alert("일치하지 않는 토큰입니다. \n 다시 확인해주세요.");
          setUserToken("");
        }
      })
      .catch((error) => {
        alert("다시 시도해주십시오.");
        console.log(error.response);
      });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    if (!verified) {
      alert("중복확인을 해주세요.");
      return;
    }
    if (!isSame) {
      alert("이메일 인증 요청을 완료해주세요.");
      return;
    }
    if (!confirmed) {
      alert("비밀번호를 일치시켜주세요.");
      return;
    }
    axios({
      url: "http://52.79.222.161:8080/signup",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
      data: {
        username: userName,
        name: name,
        password: pw,
        email: userEmail,
      },
    })
      .then(function (response) {
        console.log(response);
        toggle();
        navigate("/");
      })
      .catch((error) => {
        alert("다시 시도해주십시오.");
        console.log(error.response);
      });
  };

  const handleUserName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

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
              onChange={handleUserName}
            />
            <InputBtn onClick={handleDuplicate}>중복확인</InputBtn>
          </InputContainer>
          <InputContainer>
            <Input
              width="232px"
              placeholder="Enter email"
              value={userEmail}
              onChange={(e) => {
                e.preventDefault();
                setUserEmail(e.target.value);
              }}
            />
            <InputBtn onClick={handleAuth}>인증요청</InputBtn>
          </InputContainer>
          {authShow ? (
            <InputContainer>
              <Input
                width="232px"
                placeholder="Enter token"
                value={userToken}
                onChange={(e) => {
                  e.preventDefault();
                  setUserToken(e.target.value);
                }}
              />
              <InputBtn onClick={handleToken}>확인</InputBtn>
            </InputContainer>
          ) : null}
          <Input
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter new password"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
              setConfirmed(e.target.value === confirmPw);
            }}
          />
          <Input
            type="password"
            placeholder="Confirm password"
            value={confirmPw}
            onChange={(e) => {
              setConfirmPw(e.target.value);
              setConfirmed(e.target.value === pw);
            }}
          />
          <SignUpBtn onClick={handleSignUp}>Sign me up</SignUpBtn>
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
