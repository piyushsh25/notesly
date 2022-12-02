import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/loginSlice";
import { userReducer } from "./slices/UserDetails";

export const store = configureStore({
  reducer: { loginReducer, userReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
