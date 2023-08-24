import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import Text from "../components/Text";
import CommentForm from "../pages/CommentForm";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import useModal from "../hooks/useModal";
import CommentItem from "../pages/CommentItem";

const BoardDetail = () => {
  const { boardId } = useParams();
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");
  const [writeDate, setWriteDate] = useState("");
  const [comment, setComment] = useState([]);
  const navigate = useNavigate();
  const loginData = JSON.parse(window.sessionStorage.getItem("loginUser"));
  const { isShowing, toggle } = useModal();

  useEffect(() => {
    axios({
      url: `http://52.79.222.161:8080/api/board/${boardId}`,
      method: "get",
      headers: {},
    })
      .then(function (response) {
        setTitle(response.data.title);
        setContent(response.data.content);
        setWriter(response.data.writer);
        setWriteDate(response.data.createDateTime.substr(0, 10));
        setComment(response.data.commentList);
        console.log(response.data);
      })
      .catch((error) => {
        alert("게시글을 불러올 수 없습니다.");
      });
  }, []);

  const handleDelete = () => {
    const answer = window.confirm("게시글을 삭제하시겠습니까?");
    if (answer) {
      axios({
        url: `http://52.79.222.161:8080/api/board/${boardId}/delete`,
        method: "post",
        headers: {
          authorization: `bearer ${loginData.token}`,
        },
      })
        .then(function (response) {
          navigate("/");
        })
        .catch((error) => {
          alert("다시 시도해주시길 바랍니다.");
        });
    }
  };

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
          {loginData && loginData.username === writer && (
            <>
              <ListBtn
                onClick={() => navigate(`/board-update-form/${boardId}`)}
              >
                수정
              </ListBtn>
              <ListBtn onClick={handleDelete}>삭제</ListBtn>
            </>
          )}

          <ListBtn onClick={() => navigate("/")}>목록으로</ListBtn>
        </ButtonContainer>

        <InfoContainer>
          <Text marginTop="10px">작성자: {writer}</Text>
          <Text marginTop="2px">작성일자: {writeDate}</Text>
        </InfoContainer>
        <Img />
        <ContentContainer>{content}</ContentContainer>
        <CommentImg
          src="https://cdn0.iconfinder.com/data/icons/evericons-24px-vol-1/24/comment-text-256.png"
          alt="commentImg"
        />
        {loginData && <CommentBtn onClick={toggle}>댓글 작성</CommentBtn>}
        <CommentForm boardId={boardId} isShowing={isShowing} hide={toggle} />
        {comment &&
          comment.map((item) => <CommentItem key={item.id} item={item} />)}
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

const CommentBtn = styled.button`
  float: right;
  width: 100px;
  height: 34px;
  color: #000;

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
