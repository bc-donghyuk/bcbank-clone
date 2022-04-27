import React from "react";
import BaseSnackbar from "@mui/material/Snackbar";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

import colors from "styles/colors";

interface Props {
  open: boolean;
  message: string;
  theme: "default" | "error" | "success" | "warning";
  onClose: () => void;
  vertical?: "top" | "bottom";
  horizontal?: "left" | "center" | "right";
}

const defaultStyle = () => ({
  zIndex: 10000,
  "& .MuiPaper-root": {
    background: colors.grayscale.gray6,
    fontSize: "14px",
    borderRadius: "4px",
  },
});

const errorStyle = () => ({
  zIndex: 10000,
  "& .MuiPaper-root": {
    background: colors.state.error.default,
    fontSize: "14px",
    borderRadius: "4px",
  },
});

const successStyle = () => ({
  zIndex: 10000,
  "& .MuiPaper-root": {
    background: colors.state.success.default,
    fontSize: "14px",
    borderRadius: "4px",
  },
});

const warningStyle = () => ({
  zIndex: 10000,
  "& .MuiPaper-root": {
    background: colors.state.warning.default,
    fontSize: "14px",
    borderRadius: "4px",
  },
});

const iconButtonStyle = () => ({
  paddingLeft: "16px",
});

const Snackbar: React.FC<Props> = ({ open, message, theme, onClose, vertical, horizontal }) => {
  let themeStyles = {};

  switch (theme) {
    case "default":
      themeStyles = defaultStyle;
      break;
    case "error":
      themeStyles = errorStyle;
      break;
    case "success":
      themeStyles = successStyle;
      break;
    case "warning":
      themeStyles = warningStyle;
      break;
  }

  return (
    <BaseSnackbar
      open={open}
      message={message}
      onClose={onClose}
      sx={themeStyles}
      anchorOrigin={{ vertical, horizontal }}
      autoHideDuration={3000}
      action={
        <IconButton aria-label="close" color="inherit" sx={iconButtonStyle} onClick={onClose}>
          <Close />
        </IconButton>
      }
    />
  );
};

Snackbar.defaultProps = {
  vertical: "bottom",
  horizontal: "center",
};

export default Snackbar;
