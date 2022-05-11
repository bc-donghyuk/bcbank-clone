import React from "react";
import { useGlobalDrawer } from "recoil/atoms/globalDrawer";

import Drawer from "./drawer/Drawer";

interface Props {}

const GlobalDrawer: React.FC<Props> = () => {
  const { state: drawer, closeGlobalDrawer } = useGlobalDrawer();

  const handleClose = () => {
    if (drawer.handleClose) {
      drawer.handleClose();
    }

    closeGlobalDrawer();
  };

  return (
    <Drawer anchor="bottom" open={drawer.open} onClose={handleClose}>
      {drawer.component && <drawer.component {...drawer.componentProps} />}
    </Drawer>
  );
};

export default GlobalDrawer;
