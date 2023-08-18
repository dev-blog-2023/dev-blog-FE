import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useModal from "../hooks/useModal";
import Login from "../pages/Login";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const { isShowing, toggle } = useModal();
  const [login, setLogin] = useState(false);
  const loginData = JSON.parse(window.sessionStorage.getItem("loginUser"));
  const navigate = useNavigate();

  useEffect(() => {
    if (loginData) {
      setLogin(true);
    }
  }, [loginData]);

  const handleLogout = (e) => {
    navigate("/");
    setLogin(false);
    window.sessionStorage.removeItem("loginUser");
  };

  return (
    <NavContainer>
      <LogoImg
        src="https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/blog-512.png"
        alt="logo"
      />
      {!login ? (
        <>
          <SignInBtn onClick={toggle}>Login</SignInBtn>
          <Login isShowing={isShowing} hide={toggle} />
        </>
      ) : (
        <>
          <SignInBtn onClick={handleLogout}>Logout</SignInBtn>
          <UserText>{loginData.username}님 어서오세요!</UserText>
        </>
      )}
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
  &:hover {
    cursor: pointer;
  }
`;

const UserText = styled.span`
  margin-top: 20px;
  margin-right: 20px;
  float: right;
  color: #fff;
  font-size: 12px;
`;
