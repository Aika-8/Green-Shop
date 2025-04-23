import React from "react";
import { IconsButton } from "./UI/IconsButton";
import { Icons } from "../assets/icons/icon";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <ContainerHeader>
        <IconsButton>
          <Icons.Logo />
        </IconsButton>
        <StyledNav>
          <StyledPTag>Home</StyledPTag>
          <StyledPTag>Shop</StyledPTag>
          <StyledPTag>Plant Care</StyledPTag>
          <StyledPTag>Blogs</StyledPTag>
        </StyledNav>
        <StyledBlockClientFnc>
          <BlockLoupeBasket>
            <Icons.Search />
            <Icons.Basket />
          </BlockLoupeBasket>
          <StyledLogout>
            <IconsButton>
              <Icons.Logout />
              <StyledSpanLogout>Logout</StyledSpanLogout>
            </IconsButton>
          </StyledLogout>
        </StyledBlockClientFnc>
      </ContainerHeader>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  width: 100%;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  z-index: 15;
  margin-top: 16px;
  background-color: #ffffff;
`;
const ContainerHeader = styled.div`
  width: 90%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 25px;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`;
const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const StyledPTag = styled.p`
  font-weight: 400;
  line-height: 20px;
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
