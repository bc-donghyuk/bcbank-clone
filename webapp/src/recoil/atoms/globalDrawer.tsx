import produce from "immer";
import { useCallback, useMemo } from "react";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

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

export const globalDrawerActions = () => {
  const dispatch = useSetRecoilState(globalDrawerState);

  return useMemo(
    () => ({
      openGlobalDrawer: (params: {
        component: React.FC<any>;
        componentProps?: any;
        closeEventKey?: string;
        handleClose?: () => void;
      }) => {
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

      closeGlobalDrawer: () => {
        dispatch(
          produce(draft => {
            draft.open = false;
            draft.component = null;
            draft.componentProps = null;
          }),
        );
      },
    }),
    [dispatch],
  );
};

export const useGlobalDrawer = () => {
  const state = useRecoilValue(globalDrawerState);
  const { openGlobalDrawer, closeGlobalDrawer } = globalDrawerActions();

  return {
    state,
    openGlobalDrawer,
    closeGlobalDrawer,
  };
};
