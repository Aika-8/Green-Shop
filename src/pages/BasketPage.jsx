import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { Button } from "../components/UI/Button";
import { Icons } from "../assets/icons/icon";
import styled from "styled-components";
import { IconsButton } from "../components/UI/IconsButton";

export const BasketPage = () => {
  const { state, increment, decrement, deleteFromBasket } =
    useContext(ProductsContext);
  const totalAmount = state.basket.reduce((acc, item) => acc + item.amount, 0);
  const TotalPrice = state.basket
    .reduce((acc, item) => acc + item.amount * item.price, 0)
    .toFixed(2);
  return (
    <Wrapper>
      <h1>Basket</h1>
      {state.basket.length > 0 ? (
        <ContainerBasketAndDelivery>
          <ProductsList>
            {state.basket.map((item) => (
              <div key={item.id}>
                <WrapperOrderData>
                  <SmallImageBlock>
                    <StyledImage src={item.image} alt={item.title} />
                  </SmallImageBlock>
                  <GroupDataProduct>
                    <p>{item.title}</p>
                    <BlockIconsInBasket>
                      <Icons.Heart />
                      <IconsButton onClick={() => deleteFromBasket(item.id)}>
                        <Icons.Delete />
                      </IconsButton>
                    </BlockIconsInBasket>
                  </GroupDataProduct>
                  <IncreaseDecreaseGroup>
                    <Button
                      variant={"decrease"}
                      onClick={() => decrement(item.id)}
                    >
                      -
                    </Button>
                    <span>{item.amount}</span>
                    <Button
                      variant={"increase"}
                      onClick={() => increment(item.id)}
                    >
                      +
                    </Button>
                  </IncreaseDecreaseGroup>
                  <span>${item.price}</span>
                </WrapperOrderData>
              </div>
            ))}
          </ProductsList>
          <ContainerDelivery>
            <div>
              <StyledPTag>Select the delivery address</StyledPTag>
              <TotalProducts>
                <span>Products, </span>
                {totalAmount}
              </TotalProducts>
              <BlockTotalPrice>
                <h3>Total</h3>
                <h3>${TotalPrice}</h3>
              </BlockTotalPrice>
            </div>
            <Button variant={"order"}>Order</Button>
          </ContainerDelivery>
        </ContainerBasketAndDelivery>
      ) : (
        <div>
          <p>The basket is still empty</p>
          <p>
            Take a look at the main page — we've collected products there that
            you might like.
          </p>
          <Button variant={"change"}>Go to the main page</Button>
        </div>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 120px;
  margin-bottom: 100px;
`;
const ProductsList = styled.ul`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const ContainerBasketAndDelivery = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 50px;
`;
const WrapperOrderData = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
`;
const SmallImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  width: 150px;
  height: 150px;
  background-color: rgb(251, 251, 251);
  cursor: pointer;
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const GroupDataProduct = styled.div`
  width: fit-content;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 100px;
`;
const BlockIconsInBasket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
const IncreaseDecreaseGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const ContainerDelivery = styled.div`
  width: 400px;
  height: fit-content;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  z-index: 14;
  left: 70%;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;
const StyledPTag = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: rgb(70, 163, 88);
`;
const TotalProducts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #989898;
  margin-top: 10px;
`;
const BlockTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
