import { combineReducers } from "@reduxjs/toolkit";

import featureConfigReducer from "@core/features/featureConfig/featureConfigSlice";

const reducer = combineReducers({
  featureConfig: featureConfigReducer,
});

export type RootState = ReturnType<typeof reducer>;
export default reducer;
