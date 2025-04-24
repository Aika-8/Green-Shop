import React from "react";
import styled from "styled-components";
const StylesButton = (variant) => {
  switch (variant) {
    case "change": {
      return {
        width: "98px",
        height: "40px",
        fontSize: "14px",
        fontWeight: "700",
        color: "#ffffff",
        borderRadius: "3px",
        background: "rgb(70, 163, 88)",
      };
    }
    case "remove": {
      return {
        width: "74px",
        height: "40px",
        fontSize: "14px",
        fontWeight: "400",
        borderRadius: "3px",
        background: "#ffffff",
      };
    }
    case "back": {
      return {
        width: "100px",
        height: "30px",
        position: "fixed",
        top: "78%",
        right: "12%",
        borderRadius: "20px",
        backgroundColor: "#e0e0e0",
        color: "#333",
      };
    }
    default:
      return null;
  }
};
export const Button = ({ children, type, onClick, variant, ...rest }) => {
  return (
    <StyledButton type={type} onClick={onClick} variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};
const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  ${(props) => StylesButton(props.variant)}
`;
