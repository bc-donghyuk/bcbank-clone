import produce from "immer";
import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

interface FlashMessageState {
  message: null;
}

export const flashMessageState = atom<FlashMessageState>({
  key: "flashMessageState",
  default: {
    message: null,
  },
});

interface AddMessage {
  type: "addMessage";
  body: React.FC<any> | (() => React.ReactNode) | string;
  targetUrl: string;
  messageType?: number;
  customIcon?: React.ReactNode;
}

export const useFlashMessage = () => {
  const [state, dispatch] = useRecoilState(flashMessageState);

  const addMessage = ({ body, targetUrl, type, customIcon }: AddMessage) =>
    useCallback(() => {
      dispatch(
        produce(draft => {
          // draft.message = new Message({})
        }),
      );
    }, [dispatch]);

  return { state, addMessage };
};
