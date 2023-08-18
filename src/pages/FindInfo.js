import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Input from "../components/Input";
import Title from "../components/Title";
import axios from "axios";

const FindInfo = () => {
  const [findUserName, setFindUserName] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [afterFindPw, setAfterFindPw] = useState(false);
  const [token, setToken] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const handleFindUserName = (e) => {
    e.preventDefault();
    axios({
      url: "http://52.79.222.161:8080/findUsername",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
      data: {
        name,
        email,
      },
    })
      .then(function (response) {
        alert(`찾으시는 username은 ${response.data.username}입니다.`);
      })
      .catch((error) => {
        alert("해당하는 username이 없습니다.");
      });
  };

  const handleFindPw = (e) => {
    e.preventDefault();
    axios({
      url: "http://52.79.222.161:8080/findPassword",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
      data: {
        username,
        name,
        email,
      },
    })
      .then(function (response) {
        alert("이메일을 확인해주세요");
        console.log(response);
        setAfterFindPw(true);
      })
      .catch((error) => {
        alert("해당하는 password가 없습니다.");
      });
  };

  const handleResetPw = () => {};

  return (
    <FindInfoWrapper>
      <Nav />
      <FindInfoContainer>
        <ButtonContainer>
          <InputBtn onClick={() => setFindUserName(true)}>
            username 찾기
          </InputBtn>
          <InputBtn onClick={() => setFindUserName(false)}>
            password 찾기
          </InputBtn>
        </ButtonContainer>
        {findUserName ? (
          <InputContainer>
            <Title marginTop="5px" textAlign="left">
              Username 찾기
            </Title>
            <Input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <FindButton onClick={handleFindUserName}>찾기</FindButton>
          </InputContainer>
        ) : afterFindPw ? (
          <InputContainer>
            <Title marginTop="5px" textAlign="left">
              Password 초기화
            </Title>
            <Input
              placeholder="Enter your token"
              value={token}
              onChange={(e) => {
                setToken(e.target.value);
              }}
            />
            <Input
              placeholder="Enter new password"
              value={pw}
              onChange={(e) => {
                setPw(e.target.value);
              }}
            />
            <Input
              placeholder="Confirm new password"
              value={confirmPw}
              onChange={(e) => {
                setConfirmPw(e.target.value);
              }}
            />
            <FindButton onClick={handleResetPw}>찾기</FindButton>
          </InputContainer>
        ) : (
          <InputContainer>
            <Title marginTop="5px" textAlign="left">
              Password 찾기
            </Title>
            <Input
              placeholder="Enter your username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <FindButton onClick={handleFindPw}>찾기</FindButton>
          </InputContainer>
        )}
      </FindInfoContainer>
    </FindInfoWrapper>
  );
};

export default FindInfo;

const FindInfoWrapper = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
`;

const FindInfoContainer = styled.div`
  align-items: center;
  border: 1px solid #848484;
  border-radius: 10px;
  background-color: #fff;
  width: 500px;
  height: 400px;
  margin: auto;
`;

const ButtonContainer = styled.div`
  float: right;
  display: flex;
  padding-right: 10px;
  gap: 10px;
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

const InputContainer = styled.div`
  margin-top: 80px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
`;

const FindButton = styled.button`
  margin-top: 30px;
  width: 304px;
  height: 35px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  &:hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
`;
