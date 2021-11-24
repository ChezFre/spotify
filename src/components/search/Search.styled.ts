import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

export const Submit = styled.button`
  position: absolute;
  right: var(--spacing-5);
  width: var(--spacing-7);
  height: var(--spacing-7);
  top: 0;
  bottom: 0;
  margin: auto;
  color: var(--text-color);
  background: transparent;
  border: 0;
  cursor: pointer;
  transition: 0.25s ease-out;
`;

export const SearchBar = styled.input`
  border: none;
  background-color: transparent;
  border-radius: calc(var(--spacing-11) / 2);
  appearance: none;
  -webkit-appearance: none;
  font-family: inherit;
  color: var(--text-color);
  height: var(--spacing-11);
  width: var(--spacing-11);
  outline: none;
  transition: 0.25s ease-out;
  will-change: width;
  padding: var(--spacing-2) var(--spacing-5);

  &:hover {
    background-color: rgba(var(--spotify-white), 0.1);
  }

  &:focus,
  &:valid {
    width: 100%;
    background-color: rgba(var(--spotify-white), 0.1);
    padding: var(--spacing-2) var(--spacing-5);
    padding-right: var(--spacing-15);
  }

  &:not(:focus):invalid ~ button {
    pointer-events: none;
    right: 10px;
  }

  &:invalid ~ button {
    pointer-events: none;
  }

  &:not(:focus) {
    cursor: pointer;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`;
