import { NoteProps } from "../../../Components/Note/Notes.type";
export type NoteId = {
  noteId: string;
};
export type NewNote = {
  header: string;
  content: string;
  fontFamily: string;
  backgroundColor: string;
  pinned: boolean;
  tags: string[];
  tagHolder: string;
  noteId:string;
  createDate:string;
  updateDate:string
};
export interface Note extends NewNote {
  allNotes: NoteProps[];
  archiveNotes: NoteProps[];
  trashNotes: NoteProps[];
  saveStatus: "idle" | "pending" | "succeeded" | "failed";
  getNoteStatus: "idle" | "pending" | "succeeded" | "failed";
  getArchiveStatus: "idle" | "pending" | "succeeded" | "failed";
  getTrashStatus: "idle" | "pending" | "succeeded" | "failed";
  CTAstatus: "idle" | "pending" | "succeeded" | "failed";
  getSingleNoteStatus: "idle" | "pending" | "succeeded" | "failed";
  formatDate: string;
  CTAmessage: string;
  showDeleteAll: boolean;
}
