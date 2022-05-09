import { atom } from "recoil";

interface IFlashMessageData {}

export const flashMessageState = atom<IFlashMessageData>({
  key: "flashMessageState",
  default: {},
});
