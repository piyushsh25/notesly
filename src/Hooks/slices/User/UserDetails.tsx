import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UserState } from "./User.types";

const initialState: UserState = {
  name: "",
  userstatus: "idle",
  bio: [],
  userError: false,
  firstName: "",
  lastName: "",
  email: "",
  createDate: "",
};
export const getDetails = createAsyncThunk("user/getDetails", async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get("https://notesly-backend.onrender.com/me", {
    headers: { authorization: token },
  });
  return response.data;
});
const UserSlice = createSlice({
  name: "userdetails",
  initialState,
  reducers: {
    setUserHandler: (state, action) => {
      state.userError = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state, action) => {
      state.userstatus = "pending";
    });
    builder.addCase(getDetails.rejected, (state, action) => {
      state.userstatus = "error";
      state.userError = true;
      localStorage.clear();
    });
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.name = action.payload.user[0].username;
      state.firstName = action.payload.user[0].firstName;
      state.lastName = action.payload.user[0].lastName;
      state.email = action.payload.user[0].email;
      state.createDate = action.payload.user[0].createDate;
      state.userError = false;
      state.userstatus = "succeeded";
    });
  },
});
export const userReducer = UserSlice.reducer;
export const userActions = UserSlice.actions;
