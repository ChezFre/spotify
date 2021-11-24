import { keyframes } from "styled-components";

export const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 10px, 0);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`;

export const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: scale3d(.95, .95, .95)
  }
`;
