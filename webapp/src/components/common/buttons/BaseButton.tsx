import { Button, CircularProgress } from "@mui/material";
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
  color: colors.grayscale.white,
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
  color: colors.brand.dark,
});

const darkButtonStyle = () => ({
  background: colors.grayscale.gray8,
  color: colors.grayscale.white,

  "&:hover": {
    background: colors.grayscale.gray6,
    color: colors.grayscale.gray4,
    "@media (hover: none)": {
      background: colors.grayscale.gray8,
      color: colors.grayscale.white,
    },
  },

  "&:active": {
    background: colors.grayscale.gray9,
    color: colors.grayscale.white,
  },

  "&:disabled": {
    background: colors.state.disabled.bg,
    color: colors.state.disabled.default,
  },
});

const darkSpinnerStyle = () => ({
  color: colors.grayscale.white,
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
  color: colors.grayscale.gray8,
});

const spinnerSize = {
  small: 15,
  medium: 18,
  large: 22,
};

export type BaseButtonTheme = "primary" | "secondary" | "dark" | "outline" | "transparent";
export type BaseButtonSize = "small" | "medium" | "large";

export interface BaseButtonProps {
  theme: BaseButtonTheme;
  size: BaseButtonSize;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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
  disabled = false,
  fullWidth = false,
  textColor,
  styles,
  loading = false,
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
    case "dark":
      themeStyles = darkButtonStyle;
      spinnerClasses = darkSpinnerStyle;
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
      {loading ? <CircularProgress size={spinnerSize[size]} sx={spinnerClasses} /> : children}
    </Button>
  );
};

export default BaseButton;
