import styled from "styled-components";
import React from "react";
import Card from "../components/Card";

const Main = () => {
  return (
    <div>
      <Nav />
      <SignInBtn>Login</SignInBtn>
      <Card />
    </div>
  );
};

export default Main;

const Nav = styled.div`
  height: 50px;
  background-color: #000;
`;

const SignInBtn = styled.button`
  width: 122px;
  height: 40px;
  color: #000;
  background-color: #fff;
  border-radius: 10px;
`;
