import React from "react";
import styled from "styled-components";

const Card = ({ content, title, writer, date }) => {
  return (
    <CardContainer>
      <CardContent>{content}</CardContent>
      <CardTitle>{title}</CardTitle>
      <CardWriter>작성자: {writer}</CardWriter>
      <CardDate>{date}</CardDate>
    </CardContainer>
  );
};
export default Card;

const CardContent = styled.div`
  width: 243px;
  height: 150px;
  font-size: 12px;
  text-align: center;
  background-color: #f2f2f2;
  border-radius: 10px;
`;

const CardContainer = styled.div`
  display: inline-block;
  margin-left: 20px;
  margin-top: 20px;
  width: 243px;
  height: 250px;
  border: 1px solid #000;
  border-radius: 10px;
`;

const CardTitle = styled.p`
  text-align: left;
  font-size: 16px;
  font-weight: bolder;
  margin-left: 20px;
`;

const CardWriter = styled.p`
  font-size: 12px;
  text-align: right;
  padding-right: 10px;
`;

const CardDate = styled.p`
  font-size: 12px;
  text-align: right;
  padding-right: 10px;
`;
