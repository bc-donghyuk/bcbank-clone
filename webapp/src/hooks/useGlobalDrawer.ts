import React, { useCallback } from "react";
import { useRecoilState } from "recoil";

import { globalDrawerState as $globalDrawerState } from "recoil/atoms/globalDrawer";
import produce from "immer";

const useGlobalBanner = () => {
  const [globalDrawerState, setGlobalDrawerState] = useRecoilState($globalDrawerState);

  const openGlobalDrawer = useCallback(
    (params: { component: React.FC<any>; componentProps?: any; closeEventKey?: string; handleClose?: () => void }) => {
      setGlobalDrawerState(
        produce(draft => {
          draft.open = true;
          draft.component = params.component;
          draft.componentProps = params.componentProps;
          draft.closeEventKey = params.closeEventKey;
          draft.handleClose = params.handleClose;
        }),
      );
    },
    [setGlobalDrawerState],
  );

  const closeGlobalDrawer = useCallback(
    () =>
      setGlobalDrawerState(
        produce(draft => {
          draft.open = false;
          draft.component = null;
          draft.componentProps = null;
        }),
      ),
    [setGlobalDrawerState],
  );
  return { state: globalDrawerState, openGlobalDrawer, closeGlobalDrawer };
};

export default useGlobalBanner;
