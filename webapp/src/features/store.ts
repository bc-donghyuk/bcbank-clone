import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import RootReducer from "./rootReducer";

export const store = configureStore({
  reducer: RootReducer,
  middleware: [logger],
});

export type AppDispatch = typeof store.dispatch;
export default store;
