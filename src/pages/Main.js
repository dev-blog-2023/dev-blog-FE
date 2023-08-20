import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import axios from "axios";

const Main = () => {
  const [articles, setArticles] = useState([]);

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

  return (
    <div>
      <Nav />
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
