import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
    const response = await axios.post(
      "https://notesly-backend.onrender.com/login/",
      {
        user: user,
      }
    );
    return response.data;
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
      console.log("pending")
      state.loginLoadState = "pending";
    });
    builder.addCase(loginHandler.fulfilled, (state, action) => {
      // extract token from payload and save it in the localstorage
      const token = action.payload.token;
      localStorage.setItem("token", token);
      // set the status to succeeded
      state.loginLoadState = "succeeded";
      //clear the username and passoword field after successful login
      state.username = "";
      state.password = "";
      console.log("succedded")
    });
    builder.addCase(loginHandler.rejected, (state, action) => {
      console.log("failed")
      state.loginLoadState = "failed";
    });
  },
});
export const loginReducer = loginSlice.reducer;
export const loginActions = loginSlice.actions;
