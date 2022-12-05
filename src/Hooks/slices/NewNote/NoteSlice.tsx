import { createSlice } from "@reduxjs/toolkit";

type NewNote = {
  header: string;
  content: string;
  fontFamily: string;
  backgroundColor: string;
  pinned: boolean;
  tags: string;
};
const initialState: NewNote = {
  header: "",
  content: "",
  fontFamily: "'Nunito Sans', sans-serif",
  backgroundColor: "#935353",
  pinned: false,
  tags: "",
};
const newNoteSlice = createSlice({
  name: "new-note",
  initialState,
  reducers: {
    setTitleHandler: (state, action) => {
      state.header = action.payload;
    },
    setContentHandler: (state, action) => {
      state.content = action.payload;
    },
    setFontHandler: (state, action) => {
      state.fontFamily = action.payload;
    },
    setColorHandler: (state, action) => {
      state.backgroundColor=action.payload
    },
    setPinnedHandler: (state, action) => {
      state.pinned=action.payload.checkedValue
    },
    setTaggedHandler: (state, action) => {
      console.log(action);
    },
  },
  extraReducers: {},
});
export const noteReducer = newNoteSlice.reducer;
export const noteActions = newNoteSlice.actions;
