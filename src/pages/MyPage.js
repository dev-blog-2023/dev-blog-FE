import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Title from "../components/Title";

const MyPage = () => {
  return (
    <MyPageContainer>
      <Nav />
      <MyInfoContainer>
        <Title>My Info</Title>
        <ButtonContainer>
          <Button color="#000">내 정보 수정</Button>
          <Button color="#FF0000">탈퇴하기</Button>
        </ButtonContainer>
        <InputContainer>
          <Label>username</Label>
          <Input />
        </InputContainer>
        <InputContainer>
          <Label>name</Label>
          <Input />
        </InputContainer>
        <InputContainer>
          <Label>email</Label>
          <Input />
        </InputContainer>
      </MyInfoContainer>
    </MyPageContainer>
  );
};

export default MyPage;

const MyPageContainer = styled.div``;

const MyInfoContainer = styled.div`
  margin: 0 auto;
  width: 550px;
  height: 600px;
  border: 1px solid #848484;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: inline-block;
  float: right;
`;

const Button = styled.button`
  float: right;
  background-color: #fff;
  width: 113px;
  height: 34px;
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  border-radius: 5px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const InputContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 15px auto;
`;

const Label = styled.span`
  display: inline-block;
  width: 100px;
`;

const Input = styled.input`
  width: 304px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #848484;
`;
