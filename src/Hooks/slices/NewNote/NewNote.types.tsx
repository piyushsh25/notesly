export type NewNote = {
  header: string;
  content: string;
  fontFamily: string;
  backgroundColor: string;
  pinned: boolean;
  tags: string;
  saveStatus: "idle" | "pending" | "succeeded" | "failed";
};
export interface Note extends NewNote{
  allNotes: NewNote[];
  archiveNotes: NewNote[];
  trashNotes: NewNote[];
}
