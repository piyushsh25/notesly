import { AsyncThunk, createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginInitialState, User } from "./loginSlice.types";
const initialState: LoginInitialState = {
  username: "",
  password: "",
  loginLoadState: "idle",
  message: "",
};

export type State = LoginInitialState;
export const loginHandler = createAsyncThunk(
  "auth/loginHandler",
  async ({ username, password }: User) => {
    const user: User = {
      username: username,
      password: password,
    };
    const response = await axios.post("http://localhost:5000/login/", {
      user: user,
    });
    return response;
  }
);
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsernameHandler: (state, action) => {
      state.username = action.payload;
    },
    setPasswordHandler: (state, action) => {
      state.password = action.payload;
    },
    setIdleHandler: (state, action) => {
      state.loginLoadState = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginHandler.pending, (state, action) => {
      console.log("pend");
      state.loginLoadState = "pending";
    });
    builder.addCase(loginHandler.fulfilled, (state, action) => {
      console.log(action);
      state.loginLoadState = "succeeded";
    });
    builder.addCase(loginHandler.rejected, (state, action) => {
      state.loginLoadState = "failed";
    });
  },
});
export const loginReducer = loginSlice.reducer;
export const loginActions = loginSlice.actions;
