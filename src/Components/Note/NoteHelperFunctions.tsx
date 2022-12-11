import {
  addToArchiveHandler,
  deleteNoteHandler,
  editNoteHandler,
} from "../../Hooks/slices/NewNote/NoteReducer";
import { NoteEditProps, NoteProps } from "./Notes.type";

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

export const pinButtonHandler = ({
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
  setIsSelected,
  dispatch,
}: NoteEditProps) => {
  const noteData: NoteProps = {
    noteId,
    header,
    content,
    fontFamily,
    backgroundColor,
    pinned: !pinned,
    tags,
    createDate,
    formatDate,
  };
  setIsSelected(noteId);
  dispatch(editNoteHandler(noteData));
};
