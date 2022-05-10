import produce from "immer";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { flashMessageState as $flashMessageState } from "recoil/atoms/flashMessage";

const useFlashMessage = () => {
  const [flashMessageState, setFlashMessageState] = useRecoilState($flashMessageState);

  const addMessage = useCallback(() => {
    setFlashMessageState(
      produce(draft => {
        // draft.message =
      }),
    );
  }, [setFlashMessageState]);

  return { addMessage };
};

export default useFlashMessage;
