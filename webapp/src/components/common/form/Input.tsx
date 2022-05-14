import React from "react";
import { InputLabel, Input as BaseInput, InputProps, FormControl, Theme, ThemeOptions } from "@mui/material";
import { Control, Controller } from "react-hook-form";

import ErrorMessage from "./ErrorMessage";
import HelpMessage from "./HelpMessage";

import colors from "styles/colors";

const InputLabelStyle = () => ({
  lineHeight: "20px",
  paddingBottom: "2px",
  color: colors.grayscale.gray5,
  fontWeight: "bold",
  fontStyle: "normal",
  fontSize: "16px", // 12px = 16px * 0.75 (shrink)
});

const InputStyle = (withBorderBottom?: boolean, withInputPadding?: boolean) => (theme: Theme) => ({
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
  control: Control;
  error?: string;
  label?: string;
  defaultValue?: string;
  withInputPadding?: boolean;
  withBorderBottom?: boolean;
  withErrorMessage?: boolean;
}

const Input: React.FC<Props> = ({
  name,
  control,
  label,
  type = "text",
  error,
  defaultValue = "",
  withInputPadding = false,
  withBorderBottom = true,
  withErrorMessage = true,
  endAdornment,
  ...rest
}) => {
  return (
    <FormControl fullWidth error={!!error}>
      {label && (
        <InputLabel shrink htmlFor={name} sx={InputLabelStyle}>
          {label}
        </InputLabel>
      )}
      <Controller
        name={name}
        defaultValue={defaultValue}
        control={control}
        render={({ field }) => (
          <BaseInput
            id={name}
            type={type}
            fullWidth
            sx={InputStyle(withBorderBottom, withInputPadding)}
            endAdornment={endAdornment}
            {...field}
            {...rest}
          />
        )}
      />
      {withErrorMessage && <ErrorMessage error={error} />}
      {!error && <HelpMessage message={error} />}
    </FormControl>
  );
};

export default Input;
