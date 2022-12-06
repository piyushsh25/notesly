import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { NewNote } from "./NewNote.types";

const initialState: NewNote = {
  header: "",
  content: "",
  fontFamily: "'Nunito Sans', sans-serif",
  backgroundColor: "#ffffff",
  pinned: false,
  tags: "",
  saveStatus: "idle",
};
export const saveNewNoteHandler = createAsyncThunk(
  "saveNote/saveNewNoteHandler",
  async ({
    header,
    content,
    fontFamily,
    backgroundColor,
    pinned,
    tags,
  }: NewNote) => {
    const noteId = uuidv4();
    const token = localStorage.getItem("token");
    const user = {
      noteId,
      header,
      content,
      fontFamily,
      backgroundColor,
      pinned,
      tags,
    };
    const response = await axios.post(
      "https://notesly-backend.onrender.com/notes/addsadd/",
      { user: user },
      { headers: { authorization: token } }
    );
    return response.data;
  }
);
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
      state.backgroundColor = action.payload;
    },
    setPinnedHandler: (state, action) => {
      state.pinned = action.payload.checkedValue;
    },
    setTaggedHandler: (state, action) => {
      state.tags = action.payload;
    },
    setSaveStatusIdle:(state,action)=>{
      state.saveStatus="idle"
    }
  },
  extraReducers: (builder) => {
    builder.addCase(saveNewNoteHandler.pending, (state, action) => {
      state.saveStatus = "pending";
    });
    builder.addCase(saveNewNoteHandler.fulfilled, (state, action) => {
      state.saveStatus = "succeeded";
      state.header = "";
      state.content = "";
      state.fontFamily = "'Nunito Sans', sans-serif";
      state.backgroundColor = "#ffffff";
      state.pinned = false;
      state.tags = "";
    });
    builder.addCase(saveNewNoteHandler.rejected, (state, action) => {
      state.saveStatus = "failed";
    });
  },
});
export const noteReducer = newNoteSlice.reducer;
export const noteActions = newNoteSlice.actions;
