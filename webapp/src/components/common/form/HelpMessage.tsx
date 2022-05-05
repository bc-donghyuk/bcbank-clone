import React from "react";
import { FormHelperText, Theme } from "@mui/material";

import colors from "styles/colors";
import HaruTrans from "components/HaruTrans";

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
  message?: string;
}

const HelpMessage: React.FC<Props> = ({ message }) => {
  return !!message ? (
    <FormHelperText sx={HelpMessageStyle} component={"div"}>
      <HaruTrans ns="errors" i18nKey={message} />
    </FormHelperText>
  ) : null;
};

export default HelpMessage;
