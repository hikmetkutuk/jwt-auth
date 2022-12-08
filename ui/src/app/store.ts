import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { authState } from "./auth/types";
import { authReducer } from "./auth/reducer";

export interface IAppState {
  auth: authState;
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
