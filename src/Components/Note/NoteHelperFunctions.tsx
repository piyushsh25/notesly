import {
  addToArchiveHandler,
  deleteAllTrashHandler,
  deleteNoteHandler,
  deleteTrashHandler,
  editNoteHandler,
  moveToNoteHandler,
} from "../../Hooks/slices/NewNote/NoteReducer";
import { noteActions } from "../../Hooks/slices/NewNote/NoteSlice";
import { AppDispatch } from "../../Hooks/store";
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

// move to home
export const addToHomeHandler = ({
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
    moveToNoteHandler({
      noteId,
      header,
      content,
      fontFamily,
      backgroundColor,
      pinned,
      tags,
      createDate,
      formatDate,
    })
  );
};

// delete specific note from trash.
export const deleteTrashButton = ({
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
    deleteTrashHandler({
      noteId,
      header,
      content,
      fontFamily,
      backgroundColor,
      pinned,
      tags,
      createDate,
      formatDate,
    })
  );
};

// delete all notes from trash
type DeleteAllProps = {
  dispatch: AppDispatch;
};
export const deleteAllTrash = ({ dispatch }: DeleteAllProps) => {
  dispatch(deleteAllTrashHandler());
};
