import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <CardContainer>
      <CardImg />
      <CardTitle>첫번째 블로그 제목입니다.</CardTitle>
      <CardDate>2023-08-08</CardDate>
    </CardContainer>
  );
};
export default Card;

const CardImg = styled.img`
  width: 243px;
  height: 208px;
  background-color: #d9d9d9;
  border-radius: 10px;
`;

const CardContainer = styled.div`
  margin-left: 20px;
  width: 243px;
  height: 283px;
  border: 1px solid #000;
  border-radius: 10px;
`;

const CardTitle = styled.p`
  text-align: left;
  font-size: 16px;
  font-weight: bolder;
`;

const CardDate = styled.p`
  font-size: 12px;
  text-align: right;
  padding-right: 5px;
`;
