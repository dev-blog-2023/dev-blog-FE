import React from "react";
import styled from "styled-components";
import useModal from "../hooks/useModal";
import Login from "../pages/Login";

const Nav = () => {
  const { isShowing, toggle } = useModal();

  return (
    <NavContainer>
      <LogoImg
        src="https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/blog-512.png"
        alt="logo"
      />
      <SignInBtn onClick={toggle}>Login</SignInBtn>
      <Login isShowing={isShowing} hide={toggle} />
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  height: 50px;
  background-color: #000;
  margin-bottom: 60px;
  position: relative;
`;

const LogoImg = styled.img`
  width: 42px;
  height: 42px;
  position: absolute;
  right: 50%;
`;

const SignInBtn = styled.button`
  float: right;
  width: 122px;
  height: 40px;
  color: #000;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  margin-top: 5px;
  margin-right: 10px;
`;
