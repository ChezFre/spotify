import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-index-9);
  background-color: rgba(var(--spotify-black, 0.8));
  backdrop-filter: blur(8px);

  display: grid;
  align-items: center;
  gap: var(--spacing-5);
  grid-template-columns: 300px 1fr 300px;
  padding: var(--spacing-4) var(--spacing-10);

  > svg {
    width: 100%;
    max-width: 140px;
    color: var(--spotify-brand);
    place-self: center;
  }
`;

export const Main = styled.main`
  display: grid;
  padding: 0 var(--spacing-10) var(--spacing-4);
`;
