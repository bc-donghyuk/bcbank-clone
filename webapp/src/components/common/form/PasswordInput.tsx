import styled from "@emotion/styled";
import { FormGroup, FormHelperText, IconButton, InputAdornment, InputLabel, Theme } from "@mui/material";
import React from "react";

import colors from "styles/colors";
import { ExclamationIcon } from "assets/icons";
import AuthIcon from "assets/icons/AuthIcon";
import Input from "./Input";

const ErrorColor = "#eb3640";

const CssInputLabel = () => ({
  lineHeight: "14px",
  color: colors.grayscale.gray5,
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "12px",
});

const CssInput = (theme: Theme) => ({
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

const CssFormHelperText = (theme: Theme) => ({
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

const CssIconButton = () => ({
  padding: 0,
});

const EndAdornment = (
  <InputAdornment position="end">
    <IconButton aria-label="toggle password visibility" sx={CssIconButton}>
      <AuthIcon type={"eyeOpen"} />
    </IconButton>
  </InputAdornment>
);

const IconWrapper = styled.div`
  display: flex;
  padding-right: 5px;
`;

interface Props {
  name: string;
  label?: string;
  placeholder: string;
  error?: string;
  withErrorMessage?: boolean;
  withIcon?: boolean;
}

const PasswordInput: React.FC<Props> = ({ name, label, error, withErrorMessage, withIcon, ...rest }) => {
  return (
    <>
      <FormGroup>
        {label && (
          <InputLabel htmlFor={name} sx={CssInputLabel} shrink>
            {label}
          </InputLabel>
        )}
        <Input fullWidth name={name} id={name} sx={CssInput} type="password" endAdornment={EndAdornment} {...rest} />
        {withErrorMessage && !!error && (
          <FormHelperText sx={CssFormHelperText}>
            {withIcon && (
              <IconWrapper>
                <ExclamationIcon color={ErrorColor} />
              </IconWrapper>
            )}
            {error}
          </FormHelperText>
        )}
      </FormGroup>
    </>
  );
};

PasswordInput.defaultProps = {
  withErrorMessage: true,
  withIcon: true,
};

export default PasswordInput;
