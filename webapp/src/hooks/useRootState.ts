import { TypedUseSelectorHook, useSelector } from "react-redux";

import { RootState } from "features/rootReducer";

export const useRootState: TypedUseSelectorHook<RootState> = useSelector;
