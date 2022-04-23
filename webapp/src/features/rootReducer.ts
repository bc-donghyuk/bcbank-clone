import { combineReducers } from "@reduxjs/toolkit";

import featureConfigReducer from "@core/features/featureConfig/featureConfigSlice";

const reducer = combineReducers({
  featureConfig1: featureConfigReducer,
  featureConfig2: featureConfigReducer,
});

export type RootState = ReturnType<typeof reducer>;
export default reducer;
