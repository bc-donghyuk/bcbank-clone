import produce from "immer";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { flashMessageState as $flashMessageState } from "recoil/atoms/flashMessage";

interface message {
  type: "addMessage";
  body: React.FC<any> | (() => React.ReactNode) | string;
  targetUrl: string;
  messageType?: number;
  customIcon?: React.ReactNode;
}

const useFlashMessage = () => {
  const [flashMessageState, setFlashMessageState] = useRecoilState($flashMessageState);

  const addMessage = ({ body, targetUrl, type, customIcon }:message) => useCallback(() => {
    setFlashMessageState(
      produce(draft => {
        // draft.message = new Message({})
      }),
    );
  }, [setFlashMessageState]));

  return { addMessage };
};

export default useFlashMessage;
