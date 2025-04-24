import React, { useContext } from "react";
import styled from "styled-components";
import { IconsButton } from "../components/UI/IconsButton";
import { Icons } from "../assets/icons/icon";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";

export const MainPage = () => {
  const { state, addToBasketFromMain } = useContext(ProductsContext);
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/main/${id}`);
  };
  const filteredCards = state.productsCatalog.filter(
    (item) =>
      item.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      item.price.toString().includes(state.searchQuery.toLowerCase())
  );
  return (
    <StyledList>
      {filteredCards.length === 0 ? (
        <NoProductsText>No products found...</NoProductsText>
      ) : (
        <>
          {filteredCards?.map((item) => (
            <StyledCardItem
              key={item.id}
              onClick={() => handleCardClick(item.id)}
            >
              <StyledImageBlock>
                <StyledImage src={item.image} alt={item.title} />
              </StyledImageBlock>
              <GroupIcons>
                <StyledIcons
                  onClick={(e) => {
                    e.stopPropagation();
                    addToBasketFromMain(item.id);
                  }}
                >
                  <Icons.GreenBasket />
                </StyledIcons>
                <StyledIcons
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Icons.Heart />
                </StyledIcons>
                <StyledIcons
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Icons.Search />
                </StyledIcons>
              </GroupIcons>
              <BlockTitlePrice>
                <StyledTitle>{item.title}</StyledTitle>
                <StyledPrice>${item.price}</StyledPrice>
              </BlockTitlePrice>
            </StyledCardItem>
          ))}
        </>
      )}
    </StyledList>
  );
};
const StyledList = styled.ul`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 41px;
  position: relative;
`;
const GroupIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 72%;
  z-index: 1;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
`;
const StyledCardItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  transition: transform 0.4s ease-in-out;
  &:hover {
    transform: scale(1.04);
    border-top: 1px solid rgb(70, 163, 88);
    cursor: pointer;
  }
  &:hover ${GroupIcons} {
    opacity: 1;
    pointer-events: auto;
  }
`;
const StyledImageBlock = styled.div`
  width: 258px;
  height: 300px;
  background-color: rgb(251, 251, 251);
`;
const StyledImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
`;
const StyledIcons = styled(IconsButton)`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: rgb(255, 255, 255);
`;
const BlockTitlePrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const StyledTitle = styled.p`
  color: rgb(61, 61, 61);
  font-weight: 400;
  line-height: 16px;
`;
const StyledPrice = styled.span`
  color: rgb(70, 163, 88);
  font-size: 18px;
  font-weight: 700;
`;
const NoProductsText = styled.p`
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #999;
  margin-top: 50px;
  margin-left: 40%;
`;
