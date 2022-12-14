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
  moveToNoteHandler,
  deleteTrashHandler,
  deleteAllTrashHandler,
} from "./NoteReducer";
export {
  getArchivedHandler,
  getNoteHandler,
  getTrashHandler,
  saveNewNoteHandler,
  addToArchiveHandler,
  deleteNoteHandler,
  editNoteHandler,moveToNoteHandler,deleteTrashHandler
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
    setDeleteAllModal:(state,action)=>{
      state.showDeleteAll=action.payload.message
    }
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
      state.allNotes = action.payload.message.notes;
      state.archiveNotes = action.payload.message.archiveNotes;
      state.trashNotes = action.payload.message.trashNotes;
      state.CTAstatus = "succeeded";
      state.CTAmessage = "Success. Added to trash.";
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
    // move to main notes handler
    builder.addCase(moveToNoteHandler.pending, (state, action) => {
      state.CTAstatus = "pending";
    });
    builder.addCase(moveToNoteHandler.fulfilled, (state, action) => {
      state.allNotes = action.payload.message.notes;
      state.archiveNotes = action.payload.message.archiveNotes;
      state.trashNotes = action.payload.message.trashNotes;
      state.CTAstatus = "succeeded";
      state.CTAmessage = "Success. Moved to notes.";
    });
    builder.addCase(moveToNoteHandler.rejected, (state, action) => {
      state.CTAstatus = "failed";
      state.CTAmessage = "Error. Couldn't move note.";
    });
    // delete individual note from trash
    builder.addCase(deleteTrashHandler.pending, (state, action) => {
      state.CTAstatus = "pending";
    });
    builder.addCase(deleteTrashHandler.fulfilled, (state, action) => {
      state.trashNotes = action.payload.message.trashNotes;
      state.CTAstatus = "succeeded";
      state.CTAmessage = "Success. Note deleted permanently.";
    });
    builder.addCase(deleteTrashHandler.rejected, (state, action) => {
      state.CTAstatus = "failed";
      state.CTAmessage = "Error. Couldn't delete note.";
    });
    // delete all trash notes
    builder.addCase(deleteAllTrashHandler.pending, (state, action) => {
      state.CTAstatus = "pending";
    });
    builder.addCase(deleteAllTrashHandler.fulfilled, (state, action) => {
      state.trashNotes = action.payload.message.trashNotes;
      state.CTAstatus = "succeeded";
      state.CTAmessage = "Success. All note deleted permanently.";
      state.showDeleteAll=false
    });
    builder.addCase(deleteAllTrashHandler.rejected, (state, action) => {
      state.CTAstatus = "failed";
      state.CTAmessage = "Error. Couldn't delete note.";
    });
  },
});
export const noteReducer = noteSlice.reducer;
export const noteActions = noteSlice.actions;
