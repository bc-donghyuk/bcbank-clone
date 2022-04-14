import React from "react";
import { FormHelperText, Theme } from "@mui/material";
import styled from "@emotion/styled";

import colors from "styles/colors";

const HelpMessageStyle = (theme: Theme) => ({
  fontSize: "11px",
  marginTop: "10px",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "normal",
  fontXize: "12px",
  color: colors.grayscale.gray4,
  [theme.breakpoints.up("lg")]: {
    fontSize: "14px",
  },
});

interface Props {
  message: string;
}

const HelpMessage: React.FC<Props> = ({ message }) => {
  if (!message) return null;

  return (
    <FormHelperText sx={HelpMessageStyle} component={"div"}>
      {message}
    </FormHelperText>
  );
};

export default HelpMessage;
