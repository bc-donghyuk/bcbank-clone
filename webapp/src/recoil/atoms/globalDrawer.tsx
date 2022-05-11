import produce from "immer";
import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

interface GlobalDrawerState {
  open: boolean;
  handleClose?: () => void;
  closeEventKey?: string;
  component: React.FC | null;
  componentProps?: any;
}

export const globalDrawerState = atom<GlobalDrawerState>({
  key: "globalDrawerState",
  default: {
    open: false,
    handleClose: undefined,
    closeEventKey: undefined,
    component: null,
    componentProps: null,
  },
});

export const useGlobalDrawer = () => {
  const [state, dispatch] = useRecoilState(globalDrawerState);

  const openGlobalDrawer = useCallback(
    (params: { component: React.FC<any>; componentProps?: any; closeEventKey?: string; handleClose?: () => void }) => {
      dispatch(
        produce(draft => {
          draft.open = true;
          draft.component = params.component;
          draft.componentProps = params.componentProps;
          draft.closeEventKey = params.closeEventKey;
          draft.handleClose = params.handleClose;
        }),
      );
    },
    [dispatch],
  );

  const closeGlobalDrawer = useCallback(
    () =>
      dispatch(
        produce(draft => {
          draft.open = false;
          draft.component = null;
          draft.componentProps = null;
        }),
      ),
    [dispatch],
  );

  return { state, openGlobalDrawer, closeGlobalDrawer };
};
