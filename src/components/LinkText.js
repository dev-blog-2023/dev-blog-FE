import React from "react";
import styled from "styled-components";

const LinkText = ({ children, href }) => {
  return <Link href={href}>{children}</Link>;
};

export default LinkText;

const Link = styled.a`
  text-decoration: underline;
  color: #f86f03;
  &:hover {
    cursor: pointer;
  }
`;
