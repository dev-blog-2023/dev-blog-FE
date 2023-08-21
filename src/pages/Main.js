import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [articles, setArticles] = useState([]);
  const [pageNumbers, setPageNumbers] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axios({
      url: `http://52.79.222.161:8080/`,
      method: "get",
      headers: {
        withCredentials: true,
      },
    }).then(function (response) {
      setArticles(response.data.content);
      setPageNumbers(response.data.totalPages);
    });
  }, []);

  const handleWrite = () => {
    const loginData = JSON.parse(window.sessionStorage.getItem("loginUser"));
    if (loginData) {
      navigate("/board-form");
    } else {
      alert("로그인이 필요한 서비스입니다.");
    }
  };

  const handleShowBoard = (e) => {
    const pageNum = Number(e.target.textContent);
    axios({
      url: `http://52.79.222.161:8080/?page=${pageNum - 1}`,
      method: "get",
      headers: {
        withCredentials: true,
      },
    }).then(function (response) {
      setArticles(response.data.content);
    });
  };

  const handlePagination = () => {
    const pages = [];
    for (let i = 0; i < pageNumbers; i++) {
      pages.push(
        <Page key={i} onClick={handleShowBoard}>
          {i + 1}
        </Page>
      );
    }
    return pages;
  };

  return (
    <div>
      <Nav />
      <WriteBtn onClick={handleWrite}>게시글 작성</WriteBtn>
      {articles &&
        articles.map((article) => (
          <Card
            key={article.id}
            content={article.content}
            title={article.title}
            writer={article.writer}
            date={article.createDateTime.substr(0, 10)}
          />
        ))}
      <PaginationContainer>{handlePagination()}</PaginationContainer>
    </div>
  );
};

export default Main;

const WriteBtn = styled.button`
  float: right;
  background-color: #fff;
  width: 113px;
  height: 34px;
  border: 1px solid #000;
  color: #000;
  border-radius: 5px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #000;
  }
`;

const PaginationContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Page = styled.button`
  display: inline-block;
  border: none;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;
