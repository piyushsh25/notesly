import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { NoteProps } from "../../../Components/Note/Notes.type";
import { NewNote, Note } from "./NewNote.types";
const initialState: Note = {
  header: "",
  content: "",
  fontFamily: "'Nunito Sans', sans-serif",
  backgroundColor: "#ffffff",
  pinned: false,
  tags: [],
  tagHolder:"",
  saveStatus: "idle",
  allNotes: [],
  getNoteStatus: "idle",
  archiveNotes: [],
  trashNotes: [],
  getArchiveStatus:"idle",
  getTrashStatus:"idle"
};
//get notes
export const getNoteHandler = createAsyncThunk(
  "getNote/getNoteHandler",
  async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      "https://notesly-backend.onrender.com/notes/",
      { headers: { authorization: token } }
    );
    return response.data;
  }
);
// get archived notes
export const getArchivedHandler = createAsyncThunk(
  "getNote/getArchivedHandler",
  async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      "https://notesly-backend.onrender.com/archive/",
      { headers: { authorization: token } }
    );
    return response.data;
  }
);
export const saveNewNoteHandler = createAsyncThunk(
  "saveNote/saveNewNoteHandler",
  async ({
    header,
    content,
    fontFamily,
    backgroundColor,
    pinned,
    tagHolder,
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
      tags:tagHolder.split(" "),
    };
    const response = await axios.post(
      "https://notesly-backend.onrender.com/notes/add/",
      { user: user },
      { headers: { authorization: token } }
    );
    return response.data;
  }
);
const noteSlice = createSlice({
  name: "new-note",
  initialState,
  reducers: {
    //save note reducers
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
      state.tagHolder = action.payload;
    },
    setSaveStatusIdle: (state, action) => {
      state.saveStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    // save note
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
      state.tags = [];
    });
    builder.addCase(saveNewNoteHandler.rejected, (state, action) => {
      state.saveStatus = "failed";
    });
    //get note
    builder.addCase(getNoteHandler.pending, (state, action) => {
      state.getNoteStatus="pending"
    });
    builder.addCase(getNoteHandler.fulfilled, (state, action) => {
      state.getNoteStatus="succeeded"
      state.allNotes=action.payload.message
    });
    builder.addCase(getNoteHandler.rejected, (state, action) => {
      state.getNoteStatus="failed"
    });
    //get archive
    builder.addCase(getArchivedHandler.pending, (state, action) => {
      state.getArchiveStatus="pending"
    });
    builder.addCase(getArchivedHandler.fulfilled, (state, action) => {
      state.getArchiveStatus="succeeded"
      state.archiveNotes=action.payload.message
    });
    builder.addCase(getArchivedHandler.rejected, (state, action) => {
      state.getArchiveStatus="failed"
    });
  },
});
export const noteReducer = noteSlice.reducer;
export const noteActions = noteSlice.actions;
