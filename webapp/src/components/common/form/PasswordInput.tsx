import styled from "@emotion/styled";
import { FormGroup, FormHelperText, IconButton, InputAdornment, InputLabel, Theme } from "@mui/material";
import React, { useState } from "react";
import { Control, FieldError } from "react-hook-form";

import Input from "./Input";
import colors from "styles/colors";
import { ExclamationIcon } from "assets/icons";
import AuthIcon from "assets/icons/AuthIcon";
import HaruTrans from "components/HaruTrans";

const ErrorColor = "#eb3640";

const InputLabelStyle = () => ({
  lineHeight: "14px",
  color: colors.grayscale.gray5,
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "12px",
});

const InputStyle = (theme: Theme) => ({
  height: "40px",
  lineHeight: "19px",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
  color: colors.grayscale.gray8,
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
    borderBottom: `1px solid ${colors.grayscale.gray2}`,
  },

  "&:hover:not(.Mui-disabled):before": {
    borderBottom: `1px solid ${colors.grayscale.gray2}`,
  },
});

const FormHelperTextStyle = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  marginTop: "10px",
  color: ErrorColor,
  fontWeight: "bold",
  fontSize: "11px",
  [theme.breakpoints.up("lg")]: {
    fontSize: "14px",
  },
});

const IconButtonStyle = () => ({
  padding: 0,
});

const IconWrapper = styled.div`
  display: flex;
  padding-right: 5px;
`;

interface Props {
  name: string;
  control: Control;
  label?: string;
  placeholder: string;
  error?: FieldError;
  withErrorMessage?: boolean;
  withIcon?: boolean;
}

const PasswordInput: React.FC<Props> = ({
  name,
  control,
  label,
  error,
  withErrorMessage = true,
  withIcon = true,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (event: React.MouseEvent) => event.preventDefault();

  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const EndAdornment = (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        sx={IconButtonStyle}
        onMouseDown={handleMouseDownPassword}
        onClick={handleClickShowPassword}
      >
        <AuthIcon type={showPassword ? "eyeOpen" : "eyeClose"} />
      </IconButton>
    </InputAdornment>
  );

  return (
    <FormGroup>
      {label && (
        <InputLabel shrink htmlFor={name} sx={InputLabelStyle}>
          {label}
        </InputLabel>
      )}

      <Input
        name={name}
        id={name}
        control={control}
        type={showPassword ? "text" : "password"}
        sx={InputStyle}
        endAdornment={EndAdornment}
        {...rest}
      />
      {withErrorMessage && error && (
        <FormHelperText sx={FormHelperTextStyle}>
          {withIcon && (
            <IconWrapper>
              <ExclamationIcon color={ErrorColor} />
            </IconWrapper>
          )}
          {}
          <HaruTrans ns="errors" i18nKey={error.message} />
        </FormHelperText>
      )}
    </FormGroup>
  );
};

export default PasswordInput;
