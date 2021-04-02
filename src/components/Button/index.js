import React from "react";
import Icon from "../Icon";

import * as Styled from "./styles";

const Button = ({
  variant = false,
  hover = false,
  disabledShadow = false,
  disabled = false,
  startIcon = false,
  endIcon = false,
  children,
  color = "default",
  size = "lg",
}) => {
  return (
    <Styled.Button
      color={color}
      variant={variant}
      hover={hover}
      disabledShadow={disabledShadow}
      disabled={disabled}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {startIcon && <Icon startIcon>{startIcon}</Icon>}
      {children}
      {endIcon && <Icon endIcon>{endIcon}</Icon>}
    </Styled.Button>
  );
};

export default Button;
