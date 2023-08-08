import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import Text from "../components/Text";

const BoardDetail = () => {
  return (
    <BoardContainer>
      <LogoContainer>
        <LogoImg
          src="https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/blog-512.png"
          alt="logo"
        />
      </LogoContainer>
      <DetailContainer>
        <Title textAlign="left">첫번째 블로그 제목입니다.</Title>
        <ListBtn>목록으로</ListBtn>
        <Img />
        <InfoContainer>
          <Text marginTop="10px">작성자: 이미란</Text>
          <Text marginTop="2px">작성일자: 2023-08-08</Text>
        </InfoContainer>
        <ContentContainer>
          내용입니다.
          <br />
          내용입니다.
        </ContentContainer>
        <CommentImg
          src="https://cdn0.iconfinder.com/data/icons/evericons-24px-vol-1/24/comment-text-256.png"
          alt="commentImg"
        />
        <CommentInfoContainer>
          <Text marginTop="10px">작성자: 기범</Text>
          <Text marginTop="10px">작성일자: 2023-08-09</Text>
        </CommentInfoContainer>
        <Comment>Comment.....</Comment>
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
  margin-right: 600px;
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
