import styled from "styled-components";
import { fadeIn } from "../style/animations";

export const FallbackContainer = styled.div`
  animation: ${fadeIn} 0.25s 0.5s both;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: rgba(var(--spotify-white), 0.2);
  color: rgb(var(--spotify-brand));

  svg {
    width: 40%;
    height: 40%;
  }
`;
