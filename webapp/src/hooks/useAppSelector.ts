import { TypedUseSelectorHook, useSelector } from "react-redux";

import { RootState } from "features/rootReducer";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
