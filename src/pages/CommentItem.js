import React, { useState } from "react";
import styled from "styled-components";
import Text from "../components/Text";
import axios from "axios";
import { useParams } from "react-router-dom";

const CommentItem = ({ item }) => {
  const { boardId } = useParams();
  const loginData = JSON.parse(window.sessionStorage.getItem("loginUser"));
  const [isDisabled, setIsDisabled] = useState(true);
  const [commentContent, setCommentContent] = useState(item.content);

  const handleUpdateComment = (commentId) => {
    axios({
      url: `http://52.79.222.161:8080/comment/${commentId}/edit`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${loginData.token}`,
      },
      data: {
        boardId,
        content: commentContent,
      },
    })
      .then(function (response) {
        setIsDisabled(true);
        window.location.reload();
      })
      .catch((error) => {
        alert("다시 시도해주시길 바랍니다.");
      });
  };

  return (
    <>
      <CommentInfoContainer>
        <Text marginTop="10px">작성자: {item.writer}</Text>

        <Text marginTop="10px">
          작성일자: {item.createDateTime.substr(0, 10)}
          {loginData && item.writer === loginData.username && (
            <ButtonContainer>
              {isDisabled ? (
                <CommentSubBtn onClick={() => setIsDisabled(false)}>
                  수정
                </CommentSubBtn>
              ) : (
                <CommentSubBtn onClick={(id) => handleUpdateComment(item.id)}>
                  수정완료
                </CommentSubBtn>
              )}
              <CommentSubBtn>삭제</CommentSubBtn>
            </ButtonContainer>
          )}
        </Text>
      </CommentInfoContainer>
      <Comment
        value={commentContent}
        disabled={isDisabled}
        onChange={(e) => setCommentContent(e.target.value)}
      ></Comment>
    </>
  );
};

export default CommentItem;

const CommentInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 600px;
`;

const Comment = styled.input`
  border-radius: 5px;
  border: 1px solid #848484;
  width: 635px;
`;

const CommentSubBtn = styled.button`
  float: right;
  width: 60px;
  height: 20px;
  color: #000;
  font-size: 6px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  margin-top: 40px;
  border: 1px solid #000;
  &:hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
`;

const ButtonContainer = styled.div`
  float: right;
  display: flex;
  gap: 10px;
`;
