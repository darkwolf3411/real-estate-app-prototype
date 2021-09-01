import React from "react";
import Link from "next/link";
import styled, {css} from "styled-components";

const LinkStyle = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: unset;
  font-size: 21px;
  cursor: pointer;
  font-family: ${({theme})=> theme.fonts.primary};
  margin-left: 10px;
  transition: all .2s ease-in;
  &:hover{
    color: ${({ theme }) => theme.colors.primaryActive};
    transition: all .2s ease-in;
  }
`;

const A = ({ href, children }) => {
  return (
    <Link href={href}>
      <LinkStyle>{children}</LinkStyle>
    </Link>
  );
};

export default A;
