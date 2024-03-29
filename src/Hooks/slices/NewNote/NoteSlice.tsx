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
  getIndividualNotes,
  moveToNoteHandler,
  deleteTrashHandler,
  deleteAllTrashHandler,
  getIndividualArchive,
  getIndividualTrash,
  editIndividualNote,
} from "./NoteReducer";
export {
  getArchivedHandler,
  getNoteHandler,
  getTrashHandler,
  saveNewNoteHandler,
  getIndividualNotes,
  addToArchiveHandler,
  deleteNoteHandler,
  editNoteHandler,
  moveToNoteHandler,
  deleteTrashHandler,
  getIndividualArchive,
  getIndividualTrash,
  editIndividualNote,
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
    setDeleteAllModal: (state, action) => {
      state.showDeleteAll = action.payload.message;
    },
    setClearForm: (state, action) => {
      state.saveStatus = "idle";
      state.header = "";
      state.content = "";
      state.fontFamily = "'Nunito Sans', sans-serif";
      state.backgroundColor = "#ffffff";
      state.pinned = false;
      state.tags = [];
      state.formatDate = "";
      state.createDate = "";
    },
    setSearchHandler: (state, action) => {
      const value = action.payload.value;
      if(value===""){
         state.filteredNote=[]
      }
      state.filteredNote = state.allNotes.filter((note) => {
        const tagHolder=note.tags.join("")
        return note.header.toLowerCase().includes(value.toLowerCase()) || note.content.toLowerCase().includes(value.toLowerCase()) || tagHolder.toLowerCase().includes(value.toLowerCase());
      });
    
    
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
    //get all notes
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
    //get individual notes
    builder.addCase(getIndividualNotes.pending, (state, action) => {
      state.getSingleNoteStatus = "pending";
    });
    builder.addCase(getIndividualNotes.fulfilled, (state, action) => {
      state.getSingleNoteStatus = "succeeded";
      state.header = action.payload.message[0].header;
      state.tags = action.payload.message[0].tags;
      state.tagHolder = action.payload.message[0].tags.join();
      state.pinned = action.payload.message[0].pinned;
      state.noteId = action.payload.message[0].noteId;
      state.fontFamily = action.payload.message[0].fontFamily;
      state.formatDate = action.payload.message[0].formatDate;
      state.createDate = action.payload.message[0].createDate;
      state.backgroundColor = action.payload.message[0].backgroundColor;
      state.content = action.payload.message[0].content;
    });
    builder.addCase(getIndividualNotes.rejected, (state, action) => {
      state.getSingleNoteStatus = "failed";
    });
    //edit individual notes
    builder.addCase(editIndividualNote.pending, (state, action) => {
      state.saveStatus = "pending";
    });
    builder.addCase(editIndividualNote.fulfilled, (state, action) => {
      state.saveStatus = "succeeded";
      state.CTAmessage = "Success. Note Edited";
      console.log(action.payload);
      state.header = action.payload.message[0].header;
      state.tags = action.payload.message[0].tags;
      state.tagHolder = action.payload.message[0].tags.join();
      state.pinned = action.payload.message[0].pinned;
      state.noteId = action.payload.message[0].noteId;
      state.fontFamily = action.payload.message[0].fontFamily;
      state.formatDate = action.payload.message[0].formatDate;
      state.createDate = action.payload.message[0].createDate;
      state.backgroundColor = action.payload.message[0].backgroundColor;
      state.content = action.payload.message[0].content;
    });
    builder.addCase(editIndividualNote.rejected, (state, action) => {
      state.saveStatus = "failed";
      state.CTAmessage = "Failed to edit note.";
    });
    // get individual archives
    builder.addCase(getIndividualArchive.pending, (state, action) => {
      state.getSingleNoteStatus = "pending";
    });
    builder.addCase(getIndividualArchive.fulfilled, (state, action) => {
      state.getSingleNoteStatus = "succeeded";
      state.header = action.payload.message[0].header;
      state.tags = action.payload.message[0].tags;
      state.pinned = action.payload.message[0].pinned;
      state.noteId = action.payload.message[0].noteId;
      state.fontFamily = action.payload.message[0].fontFamily;
      state.formatDate = action.payload.message[0].formatDate;
      state.createDate = action.payload.message[0].createDate;
      state.backgroundColor = action.payload.message[0].backgroundColor;
      state.content = action.payload.message[0].content;
    });
    builder.addCase(getIndividualArchive.rejected, (state, action) => {
      state.getSingleNoteStatus = "failed";
    });
    // get individual trash
    builder.addCase(getIndividualTrash.pending, (state, action) => {
      state.getSingleNoteStatus = "pending";
      console.log("lo");
    });
    builder.addCase(getIndividualTrash.fulfilled, (state, action) => {
      state.getSingleNoteStatus = "succeeded";
      state.header = action.payload.message[0].header;
      state.tags = action.payload.message[0].tags;
      state.pinned = action.payload.message[0].pinned;
      state.noteId = action.payload.message[0].noteId;
      state.fontFamily = action.payload.message[0].fontFamily;
      state.formatDate = action.payload.message[0].formatDate;
      state.createDate = action.payload.message[0].createDate;
      state.backgroundColor = action.payload.message[0].backgroundColor;
      state.content = action.payload.message[0].content;
    });
    builder.addCase(getIndividualTrash.rejected, (state, action) => {
      state.getSingleNoteStatus = "failed";
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
      state.showDeleteAll = false;
    });
    builder.addCase(deleteAllTrashHandler.rejected, (state, action) => {
      state.CTAstatus = "failed";
      state.CTAmessage = "Error. Couldn't delete note.";
    });
  },
});
export const noteReducer = noteSlice.reducer;
export const noteActions = noteSlice.actions;
