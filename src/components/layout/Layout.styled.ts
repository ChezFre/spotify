import styled from "styled-components";

export const Header = styled.header`
  order: 1;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #191414cc;
  z-index: var(--z-index-9);
  backdrop-filter: blur(7px);
  align-items: center;
  display: grid;
  gap: var(--spacing-3);
  padding: var(--spacing-4) var(--spacing-4);
  grid-template-columns: min-content 1fr;

  @media (min-width: 530px) {
    order: unset;
    top: 0;
    grid-template-columns: min-content 1fr 300px;
  }

  @media (min-width: 920px) {
    gap: var(--spacing-5);
    grid-template-columns: 300px 1fr 300px;
    padding: var(--spacing-4) var(--spacing-16);
  }

  > svg {
    color: var(--spotify-brand);
    max-width: 140px;
    width: 100%;
    place-self: center;

    @media (max-width: 529px) {
      grid-column: 1 / span 2;
      grid-row: 1;
    }

    @media (min-width: 530px) and (max-width: 919px) {
      place-self: flex-start;
    }
  }

  form {
    @media (max-width: 529px) {
      grid-row: 2;
      grid-column: span 2;
    }
  }

  > button {
    grid-row: 1;
    grid-column: 1;
  }
`;

export const Main = styled.main`
  margin-top: var(---spacing-10);
  padding: var(--spacing-4) var(--spacing-4);
  height: inherit;
  display: grid;

  @media (min-width: 920px) {
    padding: var(--spacing-4) var(--spacing-16);
  }
`;
