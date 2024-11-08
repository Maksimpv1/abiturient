import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileSlice from "./profileSlice/profileSlice";

const rootReducer = combineReducers({
  profile: profileSlice,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
