import { useMemo } from "react";
import produce from "immer";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

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

const flashMessageAction = () => {
  const dispatch = useSetRecoilState(flashMessageState);

  return useMemo(
    () => ({
      addMessage: (payload: AddMessage) => {
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
      },

      addErrorMessage: (payload: AddErrorMessage) => {
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
      },

      close: () => {
        dispatch(
          produce(draft => {
            draft.message = null;
          }),
        );
      },
    }),
    [dispatch],
  );
};

export const useFlashMessage = () => {
  const state = useRecoilValue(flashMessageState);
  const { addMessage, addErrorMessage, close } = flashMessageAction();

  return { state, addMessage, addErrorMessage, close };
};
