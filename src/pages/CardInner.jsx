import React, { useState } from "react";
import { cards } from "../utils/constants/cards";
import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";
import { Button } from "../components/UI/Button";

export const CardInner = () => {
  const { cardId } = useParams();
  const selectedCard = cards.find((card) => card.id === Number(cardId));
  const [mainImage, setMainImage] = useState(selectedCard?.image);
  if (!selectedCard) return <p>Карточка не найдена</p>;

  return (
    <Wrapper>
      <StyledImageBlock>
        <SmallImageBlock>
          {selectedCard.images?.map((img, index) => (
            <div key={index} onClick={() => setMainImage(img)}>
              <StyledImage src={img} alt={selectedCard.title} />
            </div>
          ))}
        </SmallImageBlock>
        <ContainerImageMain>
          <StyledMainImage src={mainImage} alt={selectedCard.title} />
        </ContainerImageMain>
      </StyledImageBlock>
      <DetailsSection>
        <StyledH2>{selectedCard.title}</StyledH2>
        <StyledPrice>${selectedCard.price}</StyledPrice>
        <ContainerDescription>
          <p>Short Description:</p>
          <StyledDescription>{selectedCard.description}</StyledDescription>
        </ContainerDescription>
        <NavLink to="/main">
          <Button variant={"back"}>← Back</Button>
        </NavLink>
      </DetailsSection>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 52px;
`;
const StyledImageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;
const SmallImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  width: 100px;
  height: 100px;
  background-color: rgb(251, 251, 251);
  cursor: pointer;
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const ContainerImageMain = styled.div`
  width: 444px;
  height: 444px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(251, 251, 251);
`;
const StyledMainImage = styled.img`
  width: 404px;
  height: 404px;
  object-fit: contain;
`;
const DetailsSection = styled.div`
  width: 574px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 21px;
`;
const StyledH2 = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 16px;
`;
const StyledPrice = styled.span`
  color: rgb(70, 163, 88);
  font-size: 22px;
  font-weight: 700;
  line-height: 16px;
`;
const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;
const StyledDescription = styled.p`
  color: rgb(114, 114, 114);
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;
