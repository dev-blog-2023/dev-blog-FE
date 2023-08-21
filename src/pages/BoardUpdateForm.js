import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import useModal from "../hooks/useModal";
import Modal from "../components/Modal";
import Text from "../components/Text";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const BoardUpdateForm = () => {
  const { boardId } = useParams();
  const navigate = useNavigate();
  const { isShowing, toggle } = useModal();
  const loginData = JSON.parse(window.sessionStorage.getItem("loginUser"));
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios({
      url: `http://52.79.222.161:8080/board/${boardId}`,
      method: "get",
      headers: {},
    })
      .then(function (response) {
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch((error) => {
        alert("게시글을 불러올 수 없습니다.");
      });
  }, []);

  const handleUpdate = () => {
    axios({
      url: `http://52.79.222.161:8080/board/${boardId}/edit`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${loginData.token}`,
      },
      data: {
        title,
        content,
      },
    })
      .then(function (response) {
        toggle();
        navigate(`/board/${boardId}`);
      })
      .catch((error) => {
        alert("다시 시도해주시길 바랍니다.");
      });
  };

  return (
    <BoardContainer>
      <LogoContainer>
        <LogoImg
          src="https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/blog-512.png"
          alt="logo"
        />
      </LogoContainer>
      <FormWrapper>
        <Title textAlign="left">게시글 수정</Title>
        <ConfirmMessage>* 표시는 필수 입력 항목입니다.</ConfirmMessage>
        <FormContainer>
          <InputContainer>
            <Label>제목 * </Label>
            <Input
              width="567px"
              height="30px"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label>작성자</Label>
            <Input
              width="194px"
              height="30px"
              value={loginData.username}
              disabled
            />
          </InputContainer>
          <InputContainer>
            <Label>내용 * </Label>
            <Input
              width="567px"
              height="84px"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </InputContainer>
        </FormContainer>
        <ButtonContainer>
          <Button onClick={() => navigate(`/board/${boardId}`)}>
            이전으로
          </Button>
          <Button onClick={handleUpdate}>수정완료</Button>
        </ButtonContainer>
      </FormWrapper>
      {isShowing ? (
        <Modal isShowing={isShowing} width="321px" height="161px">
          <ModalBtnContainer>
            <CancelBtn onClick={toggle}>X</CancelBtn>
          </ModalBtnContainer>
          <CompleteContainer>
            <ModalLogoImg
              src="https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/blog-512.png"
              alt="logo"
            />
            <Text fontSize="12px">게시물 수정이 완료되었습니다.</Text>
          </CompleteContainer>
        </Modal>
      ) : null}
    </BoardContainer>
  );
};

export default BoardUpdateForm;

const BoardContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const LogoContainer = styled.div`
  width: 400px;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 150px;
  height: 150px;
`;

const FormWrapper = styled.div`
  margin-top: 80px;
  margin-left: 50px;
  width: 100vw;
`;

const ConfirmMessage = styled.p`
  font-size: 16px;
  margin-right: 600px;
  text-align: right;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Label = styled.span`
  margin-top: 20px;
`;

const Input = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 20px;
  border: 1px solid #848484;
`;

const ButtonContainer = styled.div`
  margin-top: 100px;
  margin-right: 600px;
`;

const Button = styled.button`
  float: right;
  width: 100px;
  height: 34px;
  color: #000;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  margin-right: 10px;
  margin-top: 5px;
  border: 1px solid #000;
  &:hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
`;

const CompleteContainer = styled.div`
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalLogoImg = styled.img`
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
