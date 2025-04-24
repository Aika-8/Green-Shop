import React from "react";
import styled from "styled-components";

export const Blog = () => {
  return (
    <Wrapper>
      <StyledDescroption>Product Description</StyledDescroption>
      <StyledPTag>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
        tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare
        lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
        cursus eu, suscipit id nulla. <br /> Pellentesque aliquet, sem eget
        laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros
        eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce
        aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed
        commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi
        posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat
        et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in
        imperdiet ligula euismod eget. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground.{" "}
      </StyledPTag>
      <span>Living Room:</span>
      <StyledPTag>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </StyledPTag>
      <span>Dining Room:</span>
      <StyledPTag>
        The benefits of houseplants are endless. In addition to cleaning the air
        of harmful toxins, they can help to improve your mood, reduce stress and
        provide you with better sleep. Fill every room of your home with
        houseplants and their restorative qualities will improve your life.
      </StyledPTag>
      <span>Office:</span>
      <StyledPTag>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </StyledPTag>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 18px;
  padding: 0px 120px;
`;
const StyledDescroption = styled.p`
  width: 100%;
  height: 27px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgb(70, 163, 88);
  font-size: 17px;
  font-weight: 700;
  line-height: 16px;
  padding-bottom: 12px;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`;
const StyledPTag = styled.p`
  color: rgb(114, 114, 114);
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;
