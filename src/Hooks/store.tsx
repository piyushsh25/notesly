import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/loginSlice";
import { toastReducer } from "./slices/ToastSlice";
import { userReducer } from "./slices/UserDetails";

export const store = configureStore({
  reducer: { loginReducer, userReducer, toastReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
