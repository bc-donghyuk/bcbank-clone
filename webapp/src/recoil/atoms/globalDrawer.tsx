import { atom } from "recoil";

export interface globalDrawerData {
  open: boolean;
  handleClose?: () => void;
  closeEventKey?: string;
  component: React.FC | null;
  componentProps?: any;
}

export const globalDrawerState = atom<globalDrawerData>({
  key: "globalDrawerState",
  default: {
    open: false,
    handleClose: undefined,
    closeEventKey: undefined,
    component: null,
    componentProps: null,
  },
});
