import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./NoteState";
import {
  getArchivedHandler,
  getNoteHandler,
  getTrashHandler,
  saveNewNoteHandler,
  addToArchiveHandler,
  deleteNoteHandler,
  editNoteHandler,
} from "./NoteReducer";
export {
  getArchivedHandler,
  getNoteHandler,
  getTrashHandler,
  saveNewNoteHandler,
  addToArchiveHandler,
  deleteNoteHandler,
  editNoteHandler
} from "./NoteReducer";

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
    setCTAstatusIdle: (state, action) => {
      state.CTAstatus = "idle";
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
      state.getNoteStatus = "pending";
    });
    builder.addCase(getNoteHandler.fulfilled, (state, action) => {
      state.getNoteStatus = "succeeded";
      state.allNotes = action.payload.message;
    });
    builder.addCase(getNoteHandler.rejected, (state, action) => {
      state.getNoteStatus = "failed";
    });
    //get archive
    builder.addCase(getArchivedHandler.pending, (state, action) => {
      state.getArchiveStatus = "pending";
    });
    builder.addCase(getArchivedHandler.fulfilled, (state, action) => {
      state.getArchiveStatus = "succeeded";
      state.archiveNotes = action.payload.message;
    });
    builder.addCase(getArchivedHandler.rejected, (state, action) => {
      state.getArchiveStatus = "failed";
    });
    //get trash
    builder.addCase(getTrashHandler.pending, (state, action) => {
      state.getTrashStatus = "pending";
    });
    builder.addCase(getTrashHandler.fulfilled, (state, action) => {
      state.getTrashStatus = "succeeded";
      state.trashNotes = action.payload.message;
    });
    builder.addCase(getTrashHandler.rejected, (state, action) => {
      state.getTrashStatus = "failed";
    });
    //add to archives
    builder.addCase(addToArchiveHandler.pending, (state, action) => {
      state.CTAstatus = "pending";
    });
    builder.addCase(addToArchiveHandler.fulfilled, (state, action) => {
      state.allNotes = action.payload.message.userNotes;
      state.archiveNotes = action.payload.message.archiveNotes;
      state.CTAstatus = "succeeded";
      state.CTAmessage = "Success. Added to archive.";
    });
    builder.addCase(addToArchiveHandler.rejected, (state, action) => {
      state.CTAstatus = "failed";
      state.CTAmessage = "Error. Could not add to archive.";
    });
    //delete note by id
    builder.addCase(deleteNoteHandler.pending, (state, action) => {
      state.CTAstatus = "pending";
    });
    builder.addCase(deleteNoteHandler.fulfilled, (state, action) => {
      state.allNotes = action.payload.message;
      state.CTAstatus = "succeeded";
      state.CTAmessage = "Success. Note deleted.";
    });
    builder.addCase(deleteNoteHandler.rejected, (state, action) => {
      state.CTAstatus = "failed";
      state.CTAmessage = "Error. Couldn't delete note.";
    });
    //edit note handler
    builder.addCase(editNoteHandler.pending, (state, action) => {
      state.CTAstatus = "pending";
    });
    builder.addCase(editNoteHandler.fulfilled, (state, action) => {
      state.allNotes = action.payload.message;
      state.CTAstatus = "succeeded";
      state.CTAmessage = "Success. Note edited.";
    });
    builder.addCase(editNoteHandler.rejected, (state, action) => {
      state.CTAstatus = "failed";
      state.CTAmessage = "Error. Couldn't edit note.";
    });
  },
});
export const noteReducer = noteSlice.reducer;
export const noteActions = noteSlice.actions;
