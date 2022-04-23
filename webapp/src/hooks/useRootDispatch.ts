import { useDispatch } from "react-redux";

import type { AppDispatch } from "features/store";

export const useRootDispatch = () => useDispatch<AppDispatch>();
