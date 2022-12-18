import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

type SignupType = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  username: string;
  signupstatus: "idle" | "pending" | "succeeded" | "failed";
};
const initialState: SignupType = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  username: "",
  signupstatus: "idle",
};
export const signupButtonHandler = createAsyncThunk(
  "signup-auth/signupButtonHandler",
  async ({ firstname, lastname, email, password, username }: SignupType) => {
    const userID = uuidv4();
    const user = {
      userId:userID,
      username: username.toLowerCase(),
      firstName: firstname,
      email,
      lastName: lastname,
      password,
      bio: "",
    };
    const response = await axios.post(
      "https://notesly-backend.onrender.com/signup/",
      {
        user: user,
      }
    );
    return response.data;
  }
);
const SignupSlice = createSlice({
  name: "signup-user",
  initialState,
  reducers: {
    setFirstNameHandler: (state, action) => {
      state.firstname = action.payload;
    },
    setLastNameHandler: (state, action) => {
      state.lastname = action.payload;
    },
    setEmailHandler: (state, action) => {
      state.email = action.payload;
    },
    setPasswordHandler: (state, action) => {
      state.password = action.payload;
    },
    setUsernameHandler: (state, action) => {
      state.username = action.payload;
    },
    setIdleHandler: (state, action) => {
      state.signupstatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signupButtonHandler.pending, (state, action) => {
      state.signupstatus = "pending";
    });
    builder.addCase(signupButtonHandler.fulfilled, (state, action) => {
      // extract token from payload and save it in the localstorage
      const token = action.payload.token;

      localStorage.setItem("token", token);
      // set status to localstorage
      state.signupstatus = "succeeded";
      state.firstname = "";
      state.lastname = "";
      state.email = "";
      state.password = "";
      state.username = "";
    });
    builder.addCase(signupButtonHandler.rejected, (state, action) => {
      state.signupstatus = "failed";
      state.username = "";
      state.password = "";
    });
  },
});
export const signupReducer = SignupSlice.reducer;
export const signupSlice = SignupSlice.actions;
