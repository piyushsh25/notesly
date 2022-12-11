import {
  addToArchiveHandler,
  deleteNoteHandler,
} from "../../Hooks/slices/NewNote/NoteReducer";
import { NoteEditProps } from "./Notes.type";

export const archiveButtonHandler = ({
  header,
  content,
  fontFamily,
  backgroundColor,
  pinned,
  tags,
  noteId,
  createDate,
  formatDate,
  isSelected,
  setIsSelected,
  dispatch,
}: NoteEditProps) => {
  setIsSelected(noteId);
  dispatch(
    addToArchiveHandler({
      header,
      content,
      fontFamily,
      backgroundColor,
      pinned,
      tags,
      noteId,
      createDate,
      formatDate,
    })
  );
};
export const noteDeleteHandler = ({
  header,
  content,
  fontFamily,
  backgroundColor,
  noteId,
  pinned,
  tags,
  createDate,
  formatDate,
  isSelected,
  dispatch,
  setIsSelected,
}: NoteEditProps) => {
  setIsSelected(noteId);
  dispatch(
    deleteNoteHandler({
      header,
      content,
      fontFamily,
      backgroundColor,
      noteId,
      pinned,
      tags,
      createDate,
      formatDate,
    })
  );
};
