import styled from "styled-components";

export const Text = styled.p``;

export const Code = styled.code`
  display: inline-block;
  font-family: "Ubuntu Mono", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${(props) => (props.hover ? "#828282" : "#333")};
  margin-bottom: 1.2rem;
`;
