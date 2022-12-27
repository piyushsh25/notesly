import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/Login/loginSlice";
import { noteReducer } from "./slices/NewNote/NoteSlice";
import { signupReducer } from "./slices/Signup/SignupSlice";
import { toastReducer } from "./slices/Toast/ToastSlice";
import { userReducer } from "./slices/User/UserDetails";

export const store = configureStore({
  reducer: {
    loginReducer,
    userReducer,
    toastReducer,
    signupReducer,
    noteReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
