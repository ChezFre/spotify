import styled from "styled-components";
import { slideUp } from "../style/animations";

export const Artists = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  margin: auto;
  animation: ${slideUp} 0.1s ease-out both;
  gap: var(--spacing-8);
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  list-style: none;

  li {
    display: flex;
    width: 100%;
  }
`;
