import { createTheme } from "@mui/material";

import colors from "./colors";

const MuiTheme = createTheme({
  breakpoints: {
    values: {
      sm: 375,
      md: 768,
      lg: 1280,
    },
  },
  palette: {
    primary: { main: colors.brand["100"] },
  },
  status: {
    danger: "orange",
  },
  typography: {
    fontFamily: "Roboto",
  },
  overrides: {
    MuiExpansionPanelSummary: {
      root: {
        "&$expanded": {
          minHeight: 48,
        },
      },
      content: {
        "&$expanded": {
          margin: "12px 0",
        },
      },
    },
  },
});

export default MuiTheme;
