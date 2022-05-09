import { atom } from "recoil";

interface IGlobalDrawerData {
  open: boolean;
  handleClose?: () => void;
  closeEventKey?: string;
  component: React.FC | null;
  componentProps?: any;
}

export const globalDrawerState = atom<IGlobalDrawerData>({
  key: "globalDrawerState",
  default: {
    open: false,
    handleClose: undefined,
    closeEventKey: undefined,
    component: null,
    componentProps: null,
  },
});
