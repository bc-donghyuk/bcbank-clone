import React from "react";
import { FormHelperText, Theme } from "@mui/material";
import styled from "@emotion/styled";
import HaruTrans from "components/HaruTrans";

const FormHelperTextStyle = (theme: Theme) => ({
  margin: "10px 0 0 0",
  fontWeight: "bold",
  fontSize: "11px",

  [theme.breakpoints.up("lg")]: {
    fontSize: "14px",
  },
});

interface Props {
  error: string;
  dataAttributes?: { [key: string]: string };
}

const ErrorMessage: React.FC<Props> = ({ error, dataAttributes }) => {
  return !!error ? (
    <FormHelperText sx={FormHelperTextStyle} component={"div"} {...dataAttributes}>
      <HaruTrans ns="errors" i18nKey={error} />
    </FormHelperText>
  ) : null;
};

export default ErrorMessage;
