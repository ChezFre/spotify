import styled, { css } from "styled-components";
import { fadeIn } from "../style/animations";

const artist = css`
  padding: 0;
  appearance: none;
  background: none;
  border: 0;
  color: var(--text-color);
  text-align: left;
  width: 100%;
`;

export const Wrapper = styled.div`
  ${artist}
`;

export const Button = styled.button`
  ${artist}

  &:focus,
  &:hover {
    cursor: pointer;

    > div {
      transform: scale(0.98);
    }

    span:first-of-type {
      color: var(--spotify-brand);
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  transition: 0.15s ease-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    box-shadow: 2.8px 2.8px 2.2px rgba(30, 215, 96, 0.02),
      6.7px 6.7px 5.3px rgba(30, 215, 96, 0.028),
      12.5px 12.5px 10px rgba(30, 215, 96, 0.035),
      22.3px 22.3px 17.9px rgba(30, 215, 96, 0.042),
      41.8px 41.8px 33.4px rgba(30, 215, 96, 0.05),
      100px 100px 80px rgba(30, 215, 96, 0.07);
  }
`;

export const FallbackContainer = styled.div`
  animation: ${fadeIn} 0.25s 0.25s both;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: rgba(var(--spotify-white), 0.05);
  color: rgb(var(--spotify-brand));

  svg {
    width: 40%;
    height: 40%;
  }
`;

export const Image = styled.img<{ loaded: boolean }>`
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: opacity 0.5s ease-out;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
`;

export const Name = styled.span`
  display: block;
  margin-top: var(--spacing-3);
  font-weight: 600;
  font-size: 1.4rem;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: 0.15s ease-out;
`;

export const AlbumCount = styled.span`
  display: block;
  margin-top: var(--spacing-1);
  font-weight: 600;
  opacity: 0.5;
`;
