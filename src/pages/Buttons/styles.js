import styled from "styled-components";

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 30rem));
  grid-gap: 2rem;
  align-items: end;
  margin-bottom: 4.5rem;
`;

export const Column = styled.div``;

export const Code = styled.code`
  display: inline-block;
  font-family: "Ubuntu Mono", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: #333;
  margin-bottom: 1.2rem;
`;

export const HoverCode = styled(Code)`
  color: #828282;
`;
