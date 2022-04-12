import React from "react";
import { InputLabel, Input as BaseInput, InputProps, FormControl, Theme, ThemeOptions } from "@mui/material";
import { FieldValues } from "react-hook-form";

import colors from "styles/colors";

const CssInputLabel = () => ({
  lineHeight: "20px",
  paddingBottom: "2px",
  color: colors.grayscale.gray5,
  fontWeight: "bold",
  fontStyle: "normal",
  fontSize: "16px", // 12px = 16px * 0.75 (shrink)
});

const CssInput = (withBorderBottom?: boolean) => (theme: Theme) => ({
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
    padding: 0,
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
  label?: string;
  error?: string;
  withBorderBottom?: boolean;
  withErrorMessage?: boolean;
  field: FieldValues;
}

const Input: React.FC<Props> = ({
  field,
  label,
  type = "text",
  error,
  withBorderBottom,
  withErrorMessage,
  endAdornment,
  ...rest
}) => {
  return (
    <FormControl fullWidth>
      {label && (
        <InputLabel shrink htmlFor={field.name} sx={CssInputLabel}>
          {label}
        </InputLabel>
      )}
      <BaseInput
        id={field.name}
        type={type}
        fullWidth
        sx={CssInput(withBorderBottom)}
        endAdornment={endAdornment}
        {...field}
        {...rest}
      />
    </FormControl>
  );
};

Input.defaultProps = {
  withBorderBottom: true,
  withErrorMessage: true,
};

export default Input;
