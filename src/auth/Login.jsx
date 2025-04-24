import React, { useState } from "react";
import { Icons } from "../assets/icons/icon";
import { Button } from "../components/UI/Button";
import styled from "styled-components";
import { Input } from "../components/UI/Input";
import { useInput } from "../hooks/useInput";
import { toast } from "react-toastify";

export const Login = () => {
  const [errors, setErrors] = useState({});
  const firstName = useInput("");
  const email = useInput();
  const username = useInput("");
  const lastName = useInput("");
  const phoneNumber = useInput("");
  const countryCode = useInput("+996");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!firstName.value.trim()) newErrors.firstName = "First name is required";
    if (!lastName.value.trim()) newErrors.lastName = "Last name is required";
    if (!username.value.trim()) newErrors.username = "Username is required";
    if (!email.value.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      newErrors.email = "Invalid email format";
    }

    if (!/^\d{9,}$/.test(phoneNumber.value)) {
      newErrors.phoneNumber = "Phone must contain at least 9 digits";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fill out all required fields");
    } else {
      toast.success("Form submitted successfully!");
      const data = {
        firstName: firstName.value,
        email: email.value,
        username: username.value,
        lastName: lastName.value,
        phoneNumber: phoneNumber.value,
        countryCode: countryCode.value,
      };
      firstName.reset();
      email.reset();
      username.reset();
      lastName.reset();
      phoneNumber.reset();
      console.log(data);
    }
  };
  const handleReset = () => {
    firstName.reset();
    email.reset();
    username.reset();
    lastName.reset();
    phoneNumber.reset();
    toast.success("Successfully deleted!");
  };
  const isFormEmpty = [
    firstName.value,
    lastName.value,
    username.value,
    email.value,
    phoneNumber.value,
    countryCode.value !== "+996" ? countryCode.value : "",
  ].every((val) => val === "");
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledPTag>Personal Information</StyledPTag>
      <StyledContainerAuth>
        <LeftBlockInput>
          <label htmlFor="firstName">
            First Name <StyledStar>*</StyledStar>
          </label>
          <StyledInput
            type="text"
            name="name"
            id="firstName"
            value={firstName.value}
            onChange={firstName.onChange}
          />
          <label htmlFor="email">
            Email address <StyledStar>*</StyledStar>
          </label>
          <StyledInput
            type="email"
            name="email"
            id="email"
            value={email.value}
            onChange={email.onChange}
          />
          <label htmlFor="username">
            Username <StyledStar>*</StyledStar>
          </label>
          <StyledInput
            type="text"
            name="username"
            id="username"
            value={username.value}
            onChange={username.onChange}
          />
        </LeftBlockInput>
        <RightBlockInput>
          <label htmlFor="lastName">
            Last Name <StyledStar>*</StyledStar>
          </label>
          <StyledInput
            type="text"
            name="lastName"
            id="lastName"
            value={lastName.value}
            onChange={lastName.onChange}
          />
          <label htmlFor="phone">
            Phone Number <StyledStar>*</StyledStar>
          </label>
          <BlockNumber>
            <StyledCountryCode
              value={countryCode.value}
              onChange={countryCode.onChange}
            >
              <option value="+996">+996</option>
              <option value="+7">+7</option>
              <option value="+374">+374</option>
              <option value="+998">+998</option>
              <option value="+375">+375</option>
            </StyledCountryCode>
            <InputPhoneNumber
              type="tel"
              name="phone"
              id="phone"
              value={phoneNumber.value}
              onChange={phoneNumber.onChange}
            />
          </BlockNumber>
          <StyledBlockEdit>
            <p>Photo</p>
            <StyledBlockEdit2>
              <StyledBlockImageIcon>
                <Icons.Image />
              </StyledBlockImageIcon>
              <Button variant={"change"}>Change</Button>
              <Button
                variant={"remove"}
                type="button"
                onClick={handleReset}
                disabled={isFormEmpty}
              >
                Remove
              </Button>
              <Button variant={"change"} type={"submit"}>
                Send
              </Button>
            </StyledBlockEdit2>
          </StyledBlockEdit>
        </RightBlockInput>
      </StyledContainerAuth>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const StyledContainerAuth = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 28px;
`;
const StyledPTag = styled.p`
  width: 200px;
  color: rgb(61, 61, 61);
  font-weight: 600;
  line-height: 16px;
  margin-right: 43%;
`;
const LeftBlockInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const RightBlockInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledInput = styled(Input)`
  margin-bottom: 30px;
`;
const BlockNumber = styled.div`
  display: flex;
  gap: 10px;
`;
const StyledCountryCode = styled.select`
  width: 78px;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid rgb(234, 234, 234);
  border-radius: 3px;
`;
const InputPhoneNumber = styled(Input)`
  width: 329px;
`;
const StyledStar = styled.span`
  font-size: 22px;
  font-weight: 400;
  line-height: 15px;
  color: rgb(240, 56, 0);
`;
const StyledBlockEdit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
const StyledBlockEdit2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 23px;
`;
const StyledBlockImageIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid rgb(234, 234, 234);
  cursor: pointer;
`;
