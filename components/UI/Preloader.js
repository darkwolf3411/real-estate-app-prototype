import React from "react";
import styled, { keyframes, css } from "styled-components";

const spinnerSpin = keyframes`
100% {
    transform: rotate(360deg);
}
`;
const spinnerFade = keyframes`
20% {
    opacity: .1;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: .1;
  }
`;
const StyledPreloader = styled.div`
  position: relative;
  margin: auto;
  box-sizing: border-box;
  background-clip: padding-box;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  -webkit-mask: linear-gradient(rgba(0, 0, 0, 0.1), #000000 90%);
  transform-origin: 50% 60%;
  transform: perspective(200px) rotateX(66deg);
  animation: spinner-wiggle 1.2s infinite;
  &:before,
  &:after {
    content: "";
    position: absolute;
    margin: -4px;
    box-sizing: inherit;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    opacity: 0.05;
    border: inherit;
    border-color: transparent;
    animation: ${spinnerSpin} 1.2s cubic-bezier(0.6, 0.2, 0, 0.8) infinite,
    ${spinnerFade} 1.2s linear infinite;
  }
  &:before{
    border-top-color: #66e6ff;  
  }
  &:after {
    border-top-color: #f0db75;
    animation-delay: 0.3s;
  }
`;

const Preloader = (props) => {
  return (
    <StyledPreloader {...props} />
  );
};

export default Preloader;
