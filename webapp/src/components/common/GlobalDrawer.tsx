import React from "react";

import Drawer from "./drawer/Drawer";

import useGlobalDrawer from "hooks/useGlobalDrawer";

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
