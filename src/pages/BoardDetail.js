import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import Text from "../components/Text";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BoardDetail = () => {
  const { boardId } = useParams();
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");
  const [writeDate, setWriteDate] = useState("");
  const [comment, setComment] = useState([]);
  const navigate = useNavigate();
  const loginData = JSON.parse(window.sessionStorage.getItem("loginUser"));

  useEffect(() => {
    axios({
      url: `http://52.79.222.161:8080/board/${boardId}`,
      method: "get",
      headers: {},
    })
      .then(function (response) {
        setTitle(response.data.title);
        setContent(response.data.content);
        setWriter(response.data.writer);
        setWriteDate(response.data.createDateTime.substr(0, 10));
        setComment(response.data.commentList);
      })
      .catch((error) => {
        alert("게시글을 불러올 수 없습니다.");
      });
  }, []);

  return (
    <BoardContainer>
      <LogoContainer>
        <LogoImg
          src="https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/blog-512.png"
          alt="logo"
        />
      </LogoContainer>
      <DetailContainer>
        <Title textAlign="left">{title}</Title>
        <ButtonContainer>
          {loginData.username === writer && (
            <>
              <ListBtn>수정</ListBtn>
              <ListBtn>삭제</ListBtn>
            </>
          )}

          <ListBtn onClick={() => navigate("/")}>목록으로</ListBtn>
        </ButtonContainer>
        <Img />
        <InfoContainer>
          <Text marginTop="10px">작성자: {writer}</Text>
          <Text marginTop="2px">작성일자: {writeDate}</Text>
        </InfoContainer>
        <ContentContainer>{content}</ContentContainer>
        <CommentImg
          src="https://cdn0.iconfinder.com/data/icons/evericons-24px-vol-1/24/comment-text-256.png"
          alt="commentImg"
        />
        {comment &&
          comment.map((item) => (
            <div key={item.id}>
              <CommentInfoContainer>
                <Text marginTop="10px">작성자: {item.writer}</Text>
                <Text marginTop="10px">
                  작성일자: {item.createDateTime.substr(0, 10)}
                </Text>
              </CommentInfoContainer>
              <Comment>{item.content}</Comment>
              {item.childList &&
                item.childList.map((child) => (
                  <ChildComment key={child.id}>{child.content}</ChildComment>
                ))}
            </div>
          ))}
      </DetailContainer>
    </BoardContainer>
  );
};

export default BoardDetail;

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

const DetailContainer = styled.div`
  margin-top: 80px;
  margin-left: 50px;
  width: 100vw;
`;

const ListBtn = styled.button`
  float: right;
  width: 100px;
  height: 34px;
  color: #000;

  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  margin-top: 5px;
  border: 1px solid #000;
  &:hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
`;

const Img = styled.img`
  background-color: #d9d9d9;
  margin-top: 100px;
  width: 635px;
  height: 250px;
`;

const InfoContainer = styled.div`
  text-align: right;
  margin-right: 600px;
`;

const ContentContainer = styled.div`
  overflow-y: scroll;
  border-radius: 5px;
  border: 1px solid #848484;
  width: 635px;
  text-align: center;
`;

const CommentImg = styled.img`
  margin-top: 30px;
  width: 58px;
  height: 55px;
`;

const CommentInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 600px;
`;

const Comment = styled.div`
  border-radius: 5px;
  border: 1px solid #848484;
  width: 635px;
`;

const ChildComment = styled.div`
  border-radius: 5px;
  border: 1px solid #848484;
  width: 635px;
  margin-left: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
