import { AppDispatch } from "../../Hooks/store";

//
export type NoteProps = {
  header: string;
  content: string;
  fontFamily: string;
  backgroundColor: string;
  pinned: boolean;
  tags: string[];
  noteId: string;
  createDate: string;
  formatDate: string;
};

export interface NoteEditProps extends NoteProps {
  isSelected: string;
  setIsSelected: React.Dispatch<React.SetStateAction<string>>;
  dispatch:AppDispatch
}
