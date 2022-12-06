import { createSlice } from "@reduxjs/toolkit";
import { Toast } from "./Toast.types";


const initialState: Toast = {
  showToast: false,
  messageHeader: "",
  messageDescription: "",
  color: ""
};
const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.messageHeader = action.payload.header;
      state.messageDescription = action.payload.description;
      state.color = action.payload.color;
    },
    setToastHandler: (state, action) => {
      state.showToast = action.payload.message;
    }

  },
});
export const toastReducer = toastSlice.reducer;
export const toastAction = toastSlice.actions;
