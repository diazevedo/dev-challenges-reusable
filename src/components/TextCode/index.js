import React from "react";

import * as Styled from "./styles";

const TextCode = ({ children, hover = false }) => {
  return (
    <Styled.Text>
      <Styled.Code hover={hover}>{children}</Styled.Code>
    </Styled.Text>
  );
};

export default TextCode;
