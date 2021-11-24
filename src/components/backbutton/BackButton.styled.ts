import styled from "styled-components";

export const BackButton = styled.button`
  -webkit-appearance: none;
  appearance: none;
  background: none;
  border: 0;
  position: relative;
  transition: 0.25s ease-out;
  color: var(--spotify-white);
  width: var(--spacing-11);
  height: var(--spacing-11);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  svg {
    display: block;
  }

  &:not([disabled]) {
    &:hover,
    &:focus {
      cursor: pointer;
      background-color: rgba(var(--spotify-white), 0.1);
    }
  }

  &[disabled] {
    opacity: 0.5;
  }
`;
