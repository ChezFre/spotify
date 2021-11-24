import styled from "styled-components";
import { slideInLeft } from "../style/animations";
import BaseArtist from "./Artist";

export const ArtistDetail = styled.section`
  display: grid;
  grid-auto-rows: min-content;
  grid-template-columns: 240px 1fr;
  gap: var(--spacing-15);
`;

export const Artist = styled(BaseArtist)`
  animation: ${slideInLeft} 0.25s ease-out both;
  margin-top: 80px;
`;

export const Discography = styled.div`
  ul {
    margin: 0;
    margin-top: var(--spacing-8);
    padding: 0;
    display: grid;
    gap: var(--spacing-8);
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    list-style: none;
  }

  li {
    width: 100%;
  }
`;
