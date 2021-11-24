import styled, { keyframes } from "styled-components";
import { fadeIn } from "../style/animations";

const marquee = keyframes`
  0%,
  10% {
    transform: translate3d(0, 0, 0)
  }

  90%,
  100% {
    transform: translate3d(min(-100% + var(--containerWidth), 0%), 0, 0);
  }
`;

export const Record = styled.button`
  position: relative;
  transform-origin: center bottom;
  background: transparent;
  border: 0;
  color: var(--text-color);
  text-align: left;
  padding: 0;
  width: 100%;

  span {
    animation-play-state: paused;
  }

  &:focus,
  &:hover {
    span > span {
      animation: ${marquee} max(var(--duration), 2s) ease-in-out infinite both
        alternate;
      display: inline-block;
      animation-play-state: running;
    }
  }
`;

export const Cover = styled.div<{ loaded: boolean }>`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  background-color: rgb(var(--spotify-black));
  position: relative;
  transition: 0.25s ease-out;

  &:focus,
  &:hover {
    @media (pointer: fine) and (hover: hover) {
      z-index: var(--z-index-10);
      transform: perspective(800px) rotateY(-4deg) skewY(-1deg) scale(1.02);
    }

    &::before {
      transform: translateX(13%) rotate(80deg);
    }
  }

  &::before,
  &::after {
    content: ${({ loaded }) => (loaded ? "''" : undefined)};
    position: absolute;
  }

  &::after {
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(255, 255, 255, 0)
    );
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (pointer: fine) and (hover: hover) {
    &::before {
      border-radius: 50%;
      top: 2%;
      left: 2%;
      right: 2%;
      bottom: 2%;
      background-color: #000;
      background: linear-gradient(
            30deg,
            transparent 40%,
            rgba(42, 41, 40, 0.85) 40%
          )
          no-repeat 100% 0,
        linear-gradient(60deg, rgba(42, 41, 40, 0.85) 60%, transparent 60%)
          no-repeat 0 100%,
        repeating-radial-gradient(
          #2a2928,
          #2a2928 4px,
          #ada9a0 5px,
          #2a2928 6px
        );
      background-size: 50% 100%, 100% 50%, 100% 100%;
      z-index: -1;
      transition: 0.35s ease-out;
      animation: ${fadeIn} 0.5s ease-out;
    }
  }
`;

export const CoverImage = styled.img<{ loaded: boolean }>`
  transition: opacity 0.5s ease-out;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1;
`;

export const Marquee = styled.span`
  display: block;
  margin-top: var(--spacing-3);
  font-weight: 600;
  font-size: 1.4rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
