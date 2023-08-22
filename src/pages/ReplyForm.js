import React, { useState } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import Input from "../components/Input";
import Form from "../components/Form";
import Modal from "../components/Modal";
import axios from "axios";

axios.defaults.withCredentials = true;

const ReplyForm = ({ boardId, commentId, isShowing, hide }) => {
  const [comment, setComment] = useState("");
  const loginData = JSON.parse(window.sessionStorage.getItem("loginUser"));

  const handleWriteReply = (e) => {
    const token = loginData.token;
    e.preventDefault();
    axios({
      url: `http://52.79.222.161:8080/comment/save`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${token}`,
      },
      data: {
        boardId: boardId,
        parentId: commentId,
        content: comment,
      },
    })
      .then(function (response) {
        window.location.reload();
      })
      .catch((error) => {
        alert("다시 시도해주시길 바랍니다.");
      });
  };

  return isShowing ? (
    <Modal>
      <LogoContainer>
        <LogoImg
          src="https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/blog-512.png"
          alt="logo"
        />
      </LogoContainer>
      <CommentFormContainer>
        <CancelBtn onClick={hide}>X</CancelBtn>
        <Title marginTop="100px">대댓글 작성</Title>
        <Form>
          <Input
            placeholder="Enter your comment"
            value={comment}
            onChange={(e) => {
              e.preventDefault();
              setComment(e.target.value);
            }}
          />
          <CompleteBtn onClick={handleWriteReply}>작성완료</CompleteBtn>
        </Form>
      </CommentFormContainer>
    </Modal>
  ) : null;
};

export default ReplyForm;

const LogoContainer = styled.div`
  border-top-left-radius: 10px;
  background-color: #000;
  width: 211px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CommentFormContainer = styled.div`
  width: 430px;
`;

const LogoImg = styled.img`
  width: 62px;
  height: 62px;
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

const CompleteBtn = styled.button`
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
