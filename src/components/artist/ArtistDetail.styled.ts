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
    margin-top: 80px;
  }
`;

export const Discography = styled.div`
  ul {
    margin: 0;
    margin-top: var(--spacing-8);
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: var(--spacing-6);
    list-style: none;

    @media (min-width: 920px) {
      gap: var(--spacing-8);
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
  }

  li {
    width: 100%;
  }
`;
