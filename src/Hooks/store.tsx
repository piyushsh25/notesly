import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/Login/loginSlice";
import { noteReducer } from "./slices/NewNote/NoteSlice";
import { signupReducer } from "./slices/Signup/SignupSlice";
import { userReducer } from "./slices/User/UserDetails";

export const store = configureStore({
  reducer: {
    loginReducer,
    userReducer,
    signupReducer,
    noteReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
