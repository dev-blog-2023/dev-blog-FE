import React, { useState } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import useModal from "../hooks/useModal";
import Modal from "../components/Modal";
import Text from "../components/Text";
import { useNavigate } from "react-router-dom";

const BoardForm = () => {
  const { isShowing, toggle } = useModal();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const username = JSON.parse(
    window.sessionStorage.getItem("loginUser")
  ).username;
  const navigate = useNavigate();

  const handleUploadImage = (e) => {
    if (!e.target.files) {
      return;
    }
    setFile(e.target.files[0]);
  };
  const handleComplete = () => {
    if (title === "" || content === "") {
      alert("필수항목을 기입해주세요.");
      return;
    }
  };

  const moveToList = () => {
    navigate("/");
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
        <Title textAlign="left">게시글 작성</Title>
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
            <Input width="194px" height="30px" value={username} disabled />
          </InputContainer>
          <InputContainer>
            <Label>내용 * </Label>
            <TextArea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label>
              첨부 <br />
              파일{" "}
            </Label>
            <Input
              type="file"
              width="567px"
              height="83px"
              accept="image/*"
              onChange={handleUploadImage}
            />
          </InputContainer>
        </FormContainer>
        <ButtonContainer>
          <Button onClick={moveToList}>목록으로</Button>
          <Button onClick={handleComplete}>작성완료</Button>
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
            <Text fontSize="12px">게시물 등록이 완료되었습니다.</Text>
          </CompleteContainer>
        </Modal>
      ) : null}
    </BoardContainer>
  );
};

export default BoardForm;

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

const TextArea = styled.textarea`
  width: 567px;
  height: 84px;
  border-radius: 5px;
  margin-top: 20px;
  border: 1px solid #848484;
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
  margin-top: 50px;
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
