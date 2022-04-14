import React from "react";
import { InputLabel, Input as BaseInput, InputProps, FormControl, Theme, ThemeOptions } from "@mui/material";
import { Control, Controller, FieldErrors } from "react-hook-form";

import colors from "styles/colors";
import HelpMessage from "./HelpMessage";

const InputLabelStyle = () => ({
  lineHeight: "20px",
  paddingBottom: "2px",
  color: colors.grayscale.gray5,
  fontWeight: "bold",
  fontStyle: "normal",
  fontSize: "16px", // 12px = 16px * 0.75 (shrink)
});

const InputStyle = (withBorderBottom?: boolean) => (theme: Theme) => ({
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
  name: string;
  control: Control;
  error?: FieldErrors;
  errorMessage?: string;
  label?: string;
  withBorderBottom?: boolean;
  withErrorMessage?: boolean;
}

const Input: React.FC<Props> = ({
  name,
  control,
  label,
  type = "text",
  error,
  errorMessage,
  withBorderBottom,
  withErrorMessage,
  endAdornment,
  ...rest
}) => {
  return (
    <FormControl fullWidth>
      {label && (
        <InputLabel shrink htmlFor={name} sx={InputLabelStyle}>
          {label}
        </InputLabel>
      )}
      <Controller
        name={name}
        control={control}
        rules={{ minLength: { value: 10, message: "10" } }}
        render={({ field }) => (
          <BaseInput
            id={name}
            type={type}
            fullWidth
            sx={InputStyle(withBorderBottom)}
            endAdornment={endAdornment}
            {...field}
            {...rest}
          />
        )}
      />
      {error && error[name] && errorMessage && <HelpMessage message={errorMessage} />}
    </FormControl>
  );
};

Input.defaultProps = {
  withBorderBottom: true,
  withErrorMessage: true,
};

export default Input;
