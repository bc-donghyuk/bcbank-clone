import React from "react";

import BaseButton, { BaseButtonProps } from "./BaseButton";

interface Props extends BaseButtonProps {}

const Button: React.FC<Props> = ({ children, onClick, size, theme, disabled, textColor, fullWidth, ...others }) => {
  return (
    <BaseButton
      size={size}
      theme={theme}
      disabled={disabled}
      onClick={onClick}
      fullWidth={fullWidth}
      textColor={textColor}
      {...others}
    >
      {children}
    </BaseButton>
  );
};

export default Button;
