import React, { useEffect, useState } from "react";
import BaseDrawer from "@mui/material/Drawer";

import { LAYER_4_ZINDEX } from "styles/constants";
import { isMobile } from "styles/devices";

interface DrawerStyle {
  left: number;
  width: number;
}

const DrawerStyle = (props: DrawerStyle | null) => ({
  zIndex: `${LAYER_4_ZINDEX} !important`,

  "& .MuiDrawer-paper": {
    left: !isMobile() && props?.left ? `${props.left}px` : 0,
    width: !isMobile() && props?.width ? `${props.width}px` : "100%",
    borderRadius: "8px 8px 0 0",
  },
});

interface Props {
  children: React.ReactNode;
  anchor: "bottom" | "left" | "right" | "top";
  open: boolean;
  onClose: () => void;
}

const Drawer: React.FC<Props> = ({ children, anchor, open, onClose }) => {
  const [position, setPosition] = useState<{ left: number; width: number } | null>(null);

  const handleResize = () => {
    const element = document.getElementById("desktop-mobile-view-wrapper");

    if (element) {
      const { x: left, width } = element.getBoundingClientRect();
      setPosition({ left, width });
    } else {
      setPosition(null);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile()) {
      const desktopWrapper = document.getElementById("desktop-mobile-view-wrapper");
      if (desktopWrapper) {
        const { x: left, width } = desktopWrapper.getBoundingClientRect();
        setPosition({ left, width });
      }
    }
  }, [open]);

  return (
    <BaseDrawer anchor={anchor} open={open} onClose={onClose} sx={DrawerStyle(position)}>
      {children}
    </BaseDrawer>
  );
};

export default Drawer;
