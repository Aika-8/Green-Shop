import React from "react";
import { IconsButton } from "./UI/IconsButton";
import { Icons } from "../assets/icons/icon";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <StyledHeader>
      <ContainerHeader>
        <IconsButton>
          <StyledLinkLogo>
            <Icons.Logo to="/" />
          </StyledLinkLogo>
        </IconsButton>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink>Shop</StyledLink>
          <StyledLink>Plant Care</StyledLink>
          <StyledLink to="/blog">Blogs</StyledLink>
        </StyledNav>
        <StyledBlockClientFnc>
          <BlockLoupeBasket>
            <Icons.Search />
            <Icons.Basket />
          </BlockLoupeBasket>
          <StyledLogout>
            <StyledLink to="/auth">
              <Icons.Logout />
              <StyledSpanLogout>Logout</StyledSpanLogout>
            </StyledLink>
          </StyledLogout>
        </StyledBlockClientFnc>
      </ContainerHeader>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 15;
  background-color: #ffffff;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`;
const ContainerHeader = styled.div`
  width: 90%;
  padding: 0 40px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const StyledLinkLogo = styled(NavLink)`
  color: rgb(61, 61, 61);
  font-weight: 400;
  line-height: 20px;
  text-decoration: none;
  &:hover,
  :active {
    font-weight: 700;
    cursor: pointer;
  }
`;
const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(61, 61, 61);
  font-weight: 400;
  line-height: 20px;
  text-decoration: none;
  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
  &:active {
    font-weight: 700;
    cursor: pointer;
    padding-top: 27px;
    padding-bottom: 20px;
    border-bottom: 3px solid rgb(70, 163, 88);
  }
`;
const StyledBlockClientFnc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const BlockLoupeBasket = styled(IconsButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const StyledLogout = styled.div`
  width: 100px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border-radius: 6px;
  background: rgb(70, 163, 88);
`;
const StyledSpanLogout = styled.span`
  color: #ffffff;
  line-height: 20px;
  padding-left: 4px;
`;
