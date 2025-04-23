import React from "react";
import styled from "styled-components";

export const Input = ({ type, onChange, value, id, name, ...rest }) => {
  return (
    <StyledInput
      id={id}
      value={value}
      onChange={onChange}
      type={type}
      name={name}
      {...rest}
    />
  );
};
const StyledInput = styled.input`
  width: 417px;
  height: 40px;
  border: 1px solid rgb(234, 234, 234);
  border-radius: 3px;
`;
