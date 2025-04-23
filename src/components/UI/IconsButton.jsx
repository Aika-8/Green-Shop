import React from "react";
import styled from "styled-components";

export const IconsButton = ({ icon, children, onClick, style, ...rest }) => {
  return (
    <StyledIconsButton onClick={onClick} style={style} {...rest}>
      {null ?? icon}
      {children}
    </StyledIconsButton>
  );
};
const StyledIconsButton = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
