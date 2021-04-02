import React from "react";
import * as Styled from "./styles";

const PageWrapper = ({ title = "Buttons", children }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      {children}
    </Styled.Wrapper>
  );
};

export default PageWrapper;
