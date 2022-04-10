import React from "react";
import { InputLabel, Input as BaseInput, InputProps, FormControl, Theme, ThemeOptions } from "@mui/material";

import colors from "styles/colors";

const CssInputLabel = () => ({
  lineHeight: "20px",
  paddingBottom: "2px",
  color: colors.grayscale.gray5,
  fontWeight: "bold",
  fontStyle: "normal",
  fontSize: "16px", // 12px = 16px * 0.75 (shrink)
});

const CssInput = (withBorderBottom?: boolean, withInputPadding?: boolean) => (theme: Theme) => ({
  height: "48px",
  lineHeight: "19px",
  color: colors.grayscale.gray8,
  fontWeight: 500,
  fontStyle: "normal",
  fontSize: "16px",
  [theme.breakpoints.up("lg")]: {
    height: "60px",
  },

  "& .MuiInput-input": {
    height: "40px",
    padding: withInputPadding ? "0 14px" : "0",
    [theme.breakpoints.up("lg")]: {
      height: "60px",
    },
  },

  "&:before": {
    borderBottom: withBorderBottom ? `1px solid ${colors.grayscale.gray2}` : "none",
  },

  "&:hover:not(.Mui-disabled):before": {
    borderBottom: withBorderBottom ? `1px solid ${colors.grayscale.gray2}` : "none",
  },
});

interface Props extends Omit<InputProps, "error"> {
  name: string;
  label?: string;
  error?: string;
  withBorderBottom?: boolean;
  withInputPadding?: boolean;
  withErrorMessage?: boolean;
}

const Input: React.FC<Props> = ({
  name,
  label,
  type = "text",
  error,
  withBorderBottom,
  withInputPadding,
  withErrorMessage,
  ...rest
}) => {
  return (
    <>
      <FormControl fullWidth>
        {label && (
          <InputLabel htmlFor={name} sx={CssInputLabel} shrink>
            {label}
          </InputLabel>
        )}
        <BaseInput id={name} sx={CssInput(withBorderBottom, withInputPadding)} type={type} fullWidth {...rest} />
      </FormControl>
    </>
  );
};

Input.defaultProps = {
  withInputPadding: false,
  withBorderBottom: true,
  withErrorMessage: true,
};

export default Input;
