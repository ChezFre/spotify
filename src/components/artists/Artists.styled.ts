import styled from "styled-components";
import { slideUp } from "../style/animations";

export const Artists = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  margin: auto;
  list-style: none;
  animation: ${slideUp} 0.1s ease-out both;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: var(--spacing-6);

  @media (min-width: 920px) {
    gap: var(--spacing-8);
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  li {
    width: 100%;
  }
`;
