import { useCallback } from "react";
import produce from "immer";
import { atom, useRecoilState } from "recoil";

import { IMessage, Message } from "model/IMessage";
import { MESSAGE__TYPE__FAILED } from "constants/flashMessage";

interface FlashMessageState {
  message: IMessage | null;
}

export const flashMessageState = atom<FlashMessageState>({
  key: "flashMessageState",
  default: {
    message: null,
  },
});

interface AddErrorMessage {
  body: () => React.ReactNode | string;
  targetUrl: string;
  customIcon?: React.ReactNode;
}

interface AddMessage extends AddErrorMessage {
  messageType: number;
}

export const useFlashMessage = () => {
  const [state, dispatch] = useRecoilState(flashMessageState);

  const addMessage = (payload: AddMessage) =>
    useCallback(() => {
      dispatch(
        produce(draft => {
          draft.message = new Message({
            body: payload.body,
            targetUrl: payload.targetUrl,
            type: payload.messageType,
            customIcon: payload.customIcon,
          });
        }),
      );
    }, [dispatch]);

  const addErrorMessage = (payload: AddErrorMessage) =>
    useCallback(() => {
      dispatch(
        produce(draft => {
          draft.message = new Message({
            body: payload.body,
            targetUrl: payload.targetUrl,
            type: MESSAGE__TYPE__FAILED,
            customIcon: payload.customIcon,
          });
        }),
      );
    }, [dispatch]);

  const close = () => {
    useCallback(() => {
      dispatch(
        produce(draft => {
          draft.message = null;
        }),
      );
    }, [dispatch]);
  };

  return { state, addMessage, addErrorMessage, close };
};
