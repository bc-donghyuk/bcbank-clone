import { atom } from "recoil";

interface FlashMessageState {
  message: null;
}

export const flashMessageState = atom<FlashMessageState>({
  key: "flashMessageState",
  default: {
    message: null,
  },
});
