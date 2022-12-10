import { Note } from "./NewNote.types";

export const initialState: Note = {
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
    getTrashStatus:"idle",
    archiveCTAstatus:"idle",
    trashCTAstatus:"idle"
  };