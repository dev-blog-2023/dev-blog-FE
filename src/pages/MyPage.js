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
  const token = JSON.parse(window.sessionStorage.getItem("loginUser")).token;
  const { isShowing, toggle } = useModal();
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [originalPw, setOriginalPw] = useState("");
  const [newPw, setNewPw] = useState("");

  useEffect(() => {
    axios({
      url: `http://52.79.222.161:8080/user`,
      method: "get",
      headers: {
        authorization: `bearer ${token}`,
      },
    })
      .then(function (response) {
        setUserName(response.data.username);
        setName(response.data.name);
        setEmail(response.data.email);
      })
      .catch((error) => {
        alert("내 정보를 불러올 수 없습니다.");
      });
  }, []);

  const handleUpdate = () => {
    setIsDisabled(() => false);
  };

  const handleLeave = () => {
    const answer = window.confirm("탈퇴하시겠습니까?");
    if (answer) {
      alert("서비스를 이용해주셔서 감사합니다.");
    }
  };

  const handleUserName = () => {
    axios({
      url: "http://52.79.222.161:8080/verifyUsername",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
      data: {
        username: username,
      },
    })
      .then(function (response) {
        const answer = window.confirm(
          "중복되지 않은 username입니다. \n해당 username을 사용하시겠습니까?"
        );
        if (answer) {
          axios({
            url: `http://52.79.222.161:8080/user/editUsername`,
            method: "post",
            headers: {
              "Content-Type": "application/json",
              authorization: `bearer ${token}`,
            },
            data: {
              username: username,
            },
          })
            .then(function (res) {
              toggle();
            })
            .catch((error) => {
              alert("다시 시도해주시길 바랍니다.");
            });
        }
      })
      .catch((error) => {
        alert("중복되는 username입니다. \n다시 확인해주십시오.");
        console.log(error.response);
      });
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
          <Input
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            disabled={isDisabled}
          />
          {!isDisabled && (
            <MyPageBtn onClick={handleUserName}>중복확인</MyPageBtn>
          )}
        </InputContainer>
        <InputContainer>
          <Label>name</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isDisabled}
          />
          {!isDisabled && <MyPageBtn>변경</MyPageBtn>}
        </InputContainer>
        {!isDisabled && (
          <>
            <InputContainer>
              &nbsp;
              <Label>기존 PW</Label>
              <Input
                type="password"
                value={originalPw}
                onChange={(e) => setOriginalPw(e.target.value)}
              />
              <Label></Label>
            </InputContainer>
            <InputContainer>
              <Label>새로운 PW</Label>
              <Input
                type="password"
                value={newPw}
                onChange={(e) => setNewPw(e.target.value)}
              />
              <MyPageBtn>변경</MyPageBtn>
            </InputContainer>
          </>
        )}
        <InputContainer>
          <Label>email</Label>
          <Input value={email} disabled={isDisabled} />
          {!isDisabled && <MyPageBtn>인증</MyPageBtn>}
        </InputContainer>
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
  width: 600px;
  height: 650px;
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

const MyPageBtn = styled.button`
  float: right;
  width: 70px;
  height: 40px;
  color: #000;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #000;
  text-align: center;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #000;
  }
`;
