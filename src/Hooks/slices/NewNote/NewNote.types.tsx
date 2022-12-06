export type NewNote = {
    header: string;
    content: string;
    fontFamily: string;
    backgroundColor: string;
    pinned: boolean;
    tags: string;
    saveStatus:"idle" | "pending" | "succeeded" | "failed"
  };