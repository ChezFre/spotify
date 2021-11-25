import styled from "styled-components";
import { slideInLeft } from "../style/animations";
import BaseArtist from "./Artist";

export const ArtistDetail = styled.section`
  display: grid;
  grid-auto-rows: min-content;

  @media (min-width: 600px) {
    grid-template-columns: 240px 1fr;
    gap: var(--spacing-5);
  }

  @media (min-width: 920px) {
    gap: var(--spacing-15);
  }
`;

export const Artist = styled(BaseArtist)`
  animation: ${slideInLeft} 0.25s ease-out both;
  @media (min-width: 600px) {
    margin-top: 67px;
  }
`;
