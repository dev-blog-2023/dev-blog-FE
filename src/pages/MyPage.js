import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Modal from "../components/Modal";
import useModal from "../hooks/useModal";
import Text from "../components/Text";
import axios from "axios";

const MyPage = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const { isShowing, toggle } = useModal();

  useEffect(() => {}, []);

  const handleUpdate = () => {
    setIsDisabled(() => false);
  };

  const handleLeave = () => {
    const answer = window.confirm("탈퇴하시겠습니까?");
    if (answer) {
      alert("서비스를 이용해주셔서 감사합니다.");
    }
  };

  return (
    <MyPageContainer>
      <Nav />
      <MyInfoContainer>
        <Title>My Info</Title>
        <ButtonContainer>
          <Button color="#000" onClick={handleUpdate}>
            내 정보 수정
          </Button>
          <Button color="#FF0000" onClick={handleLeave}>
            탈퇴하기
          </Button>
        </ButtonContainer>
        <InputContainer>
          <Label>username</Label>
          <Input disabled={isDisabled} />
        </InputContainer>
        <InputContainer>
          <Label>name</Label>
          <Input disabled={isDisabled} />
        </InputContainer>
        <InputContainer>
          <Label>email</Label>
          <Input disabled={isDisabled} />
        </InputContainer>
        {!isDisabled ? (
          <CompleteBtn onClick={toggle}>수정완료</CompleteBtn>
        ) : null}
      </MyInfoContainer>
      {isShowing ? (
        <Modal isShowing={isShowing} hide={toggle} width="321px" height="161px">
          <ModalBtnContainer>
            <CancelBtn onClick={toggle}>X</CancelBtn>
          </ModalBtnContainer>
          <CompleteContainer>
            <LogoImg
              src="https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/blog-512.png"
              alt="logo"
            />
            <Text fontSize="12px">내 정보가 수정이 완료되었습니다.</Text>
          </CompleteContainer>
        </Modal>
      ) : null}
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
    color: #fff;
    background-color: ${(props) => props.color};
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

const ModalBtnContainer = styled.div`
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 0px;
`;

const CancelBtn = styled.button`
  margin-top: 10px;
  outline: none;
  border: none;
  background-color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

const CompleteBtn = styled.button`
  width: 305px;
  height: 36px;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 5px;
  margin: 30px auto;
  &:hover {
    cursor: pointer;
  }
`;
