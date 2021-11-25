import styled from "styled-components";

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: var(--spacing-6);
  list-style: none;

  @media (min-width: 920px) {
    gap: var(--spacing-8);
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  li {
    width: 100%;
  }
`;

export default List;
