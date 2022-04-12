import { Button } from "@mui/material";
import React from "react";
import colors from "styles/colors";

const baseButtonStyle = () => ({
  height: "36px",
  fontSize: "14px",
  fontFamily: "Roboto",
  lineHeight: "20px",
  letterSpacing: "0.3px",
  padding: "8px 14px",
  minWidth: "initial",
  color: "inherit",
  textTransform: "inherit",

  "&.MuiButton-sizeSmall": {
    height: "28px",
    fontSize: "12px",
    fontFamily: "Roboto",
    lineHeight: "16px",
    letterSpacing: "0.3px",
    padding: "6px 10px",
    fontWeight: 500,
  },

  "&.MuiButton-sizeLarge": {
    height: "48px",
    fontSize: "15px",
    fontFamily: "Roboto",
    lineHeight: "24px",
    letterSpacing: "0.3px",
    padding: "12px 20px",
  },
});

const primaryButtonStyle = () => ({
  background: colors.brand[100],
  color: colors.grayscale.white,

  "&:hover": {
    background: colors.brand[60],
    "@media (hover: none)": {
      background: colors.brand[100],
    },
  },
  "&:active": {
    background: colors.brand.dark,
    color: "rgba(255,255,255, 0.4)",
  },
  "&:disabled": {
    background: colors.state.disabled.bg,
    color: colors.state.disabled.default,
  },
});

const primarySpinnerStyle = () => ({
  colorPrimary: {
    color: colors.grayscale.white,
  },
});

const secondaryButtonStyle = () => ({
  background: colors.brand[20],
  color: colors.brand.dark,

  "&:hover": {
    background: colors.brand.bg,
    color: colors.brand[60],
    "@media (hover: none)": {
      background: colors.brand[20],
      color: colors.brand.dark,
    },
  },

  "&:active": {
    background: colors.brand[40],
    color: colors.brand[80],
  },

  "&:disabled": {
    background: colors.state.disabled.bg,
    color: colors.state.disabled.default,
  },
});

const secondarySpinnerStyle = () => ({
  colorPrimary: {
    color: colors.brand.dark,
  },
});

const outlineButtonStyle = () => ({
  background: colors.grayscale.white,
  color: colors.grayscale.gray8,
  border: `1px solid ${colors.grayscale.gray2}`,
  borderRadius: "4px",

  "&:hover": {
    border: 0,
    "@media (hover: none)": {
      border: `1px solid ${colors.grayscale.gray2}`,
    },
  },

  "&:active": {
    background: colors.grayscale.gray0,
    color: colors.grayscale.gray9,
    borderColor: colors.grayscale.gray0,
  },

  "&:disabled": {
    background: colors.state.disabled.bg,
    color: colors.state.disabled.default,
  },
});

const outlineSpinnerStyle = () => ({
  colorPrimary: {
    color: colors.grayscale.gray8,
  },
});

export type BaseButtonTheme = "primary" | "secondary" | "outline" | "transparent";
export type BaseButtonSize = "small" | "medium" | "large";

export interface BaseButtonProps {
  theme: BaseButtonTheme;
  size: BaseButtonSize;
  type?: "button" | "submit" | "reset" | undefined;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  fullWidth?: boolean;
  textColor?: string;
  styles?: any;
  loading?: boolean;
  children: React.ReactNode;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  theme,
  size,
  type,
  onClick,
  children,
  disabled,
  fullWidth,
  textColor,
  styles,
  loading,
  ...other
}) => {
  let variant: "text" | "contained" | "outlined" = "contained";
  let themeStyles = {};
  let spinnerClasses = {};

  if (theme === "transparent") variant = "text";
  else if (theme === "outline") variant = "outlined";

  switch (theme) {
    case "primary":
      themeStyles = primaryButtonStyle;
      spinnerClasses = primarySpinnerStyle;
      break;
    case "secondary":
      themeStyles = secondaryButtonStyle;
      spinnerClasses = secondarySpinnerStyle;
      break;
    case "outline":
      themeStyles = outlineButtonStyle;
      spinnerClasses = outlineSpinnerStyle;
      break;
    default:
  }

  return (
    <Button
      size={size}
      type={type}
      variant={variant}
      fullWidth={fullWidth}
      sx={[baseButtonStyle, themeStyles, styles]}
      onClick={!loading ? onClick : () => {}}
      disabled={disabled}
      disableElevation
      {...other}
    >
      {children}
    </Button>
  );
};

export default BaseButton;
