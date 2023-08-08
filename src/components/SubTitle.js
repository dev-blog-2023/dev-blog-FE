import React from "react";
import styled from "styled-components";

const SubTitle = ({ children }) => {
  return <SubTitleContainer>{children}</SubTitleContainer>;
};

export default SubTitle;

const SubTitleContainer = styled.p`
  text-align: center;
`;
