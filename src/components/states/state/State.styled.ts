import styled, { keyframes } from "styled-components";
import { slideUp } from "../../style/animations";
import { TStateType } from "./types";

const rotate = keyframes`
  20% {
    border-radius: 40% 20% 80% 40%;
  }


  30% {
    border-radius: 90% 30% 45% 95%;
  }

  40% {
    border-radius: 45% 80% 40% 62%;
    transform: rotate(80deg);
  }

  60% {
    border-radius: 100% 10% 45% 29%;
  }
`;

export const Wrapper = styled.div`
  text-align: center;
  max-width: 600px;
  margin: auto;

  > * {
    transform-origin: bottom center;
  }

  h1 {
    animation: ${slideUp} 0.5s ease-out both;
  }

  p {
    opacity: 0.5;
    line-height: 1.7;
    animation: ${slideUp} 0.5s 0.3s ease-out both;
  }
`;

export const Icon = styled.div<{ type: TStateType }>`
  position: relative;
  display: inline-block;

  &::before,
  &::after {
    content: ${({ type }) =>
      type === "initial" || type === "loading" ? "''" : undefined};
    background-color: rgb(var(--spotify-brand));
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    z-index: -1;
    border-radius: 60% 50% 40% 50%;
    width: 85%;
    height: 85%;
    mix-blend-mode: lighten;
    margin: 5px auto 0;
    animation: ${rotate} 8s infinite linear;
    filter: blur(6px);
  }

  &::before {
    background-color: rebeccapurple;
    animation-duration: 11s;
    animation-delay: -5s;
    border-radius: 50% 80% 75% 40%;
  }

  svg {
    color: ${({ type }) =>
      type === "initial" || type === "loading"
        ? `rgb(var(--spotify-black))`
        : `rgb(var(--spotify-brand))`};
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
`;
