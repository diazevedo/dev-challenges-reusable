import styled from "styled-components";

export const Column = styled.div``;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 25rem));
  grid-gap: 2rem;
  align-items: end;
  margin-bottom: 4.5rem;
`;
