import { Note } from "./NewNote.types";

export const initialState: Note = {
  header: "",
  content: "",
  fontFamily: "'Nunito Sans', sans-serif",
  backgroundColor: "#ffffff",
  pinned: false,
  tags: [],
  tagHolder: "",
  noteId: "",
  saveStatus: "idle",
  allNotes: [],
  getNoteStatus: "idle",
  archiveNotes: [],
  trashNotes: [],
  getArchiveStatus: "idle",
  getTrashStatus: "idle",
  getSingleNoteStatus: "idle",
  CTAstatus: "idle",
  formatDate: "",
  CTAmessage: "",
  showDeleteAll: false,
  createDate: "",
  updateDate: "",
  filteredNote:[]
};
