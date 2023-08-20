import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [articles, setArticles] = useState([]);
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
