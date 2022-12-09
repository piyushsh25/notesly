import { Note } from "../Note/Note";
import { NoteProps } from "../Note/Notes.type";
import { Search } from "../Search/Search";
import "../Note/Notes.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Hooks/store";
import { getNoteHandler } from "../../Hooks/slices/NewNote/NoteSlice";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
export const UserNotes = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getNoteHandler());
  }, []);
  const { allNotes: notes, getNoteStatus } = useSelector(
    (store: RootState) => store.noteReducer
  );
  useEffect(() => {
    if (getNoteStatus === "failed") {
      toast.error("Error loading notes. Please refresh the page");
    }
  });
  function pinnedTotal(acc: number, curr: NoteProps) {
    return curr.pinned ? (acc = acc + 1) : acc;
  }
  function unpinnedTotal(acc: number, curr: NoteProps) {
    return !curr.pinned ? (acc = acc + 1) : acc;
  }
  return (
    <div className="notes-array">
      <Search />
      <div className="h2">Pinned : {notes.reduce(pinnedTotal, 0)}</div>
      {notes?.map(
        (note) =>
          note.pinned && (
            <Note
              key={note.noteId}
              header={note.header}
              content={note.content}
              fontFamily={note.fontFamily}
              backgroundColor={note.backgroundColor}
              pinned={note.pinned}
              tags={note.tags}
              noteId={note.noteId}
              formatDate={note.formatDate}
              createDate={note.createDate}
            />
          )
      )}
      {getNoteStatus === "pending" && (
        <Spinner animation="grow" variant="dark" />
      )}
      {notes.reduce(pinnedTotal, 0) === 0 && <div>No notes pinned! </div>}
      <div className="h2">OTHER : {notes.reduce(unpinnedTotal, 0)}</div>
      {notes?.map(
        (note) =>
          !note.pinned && (
            <Note
              key={note.noteId}
              header={note.header}
              content={note.content}
              fontFamily={note.fontFamily}
              backgroundColor={note.backgroundColor}
              pinned={note.pinned}
              tags={note.tags}
              noteId={note.noteId}
              formatDate={note.formatDate}
              createDate={note.createDate}
            />
          )
      )}
      {notes.reduce(unpinnedTotal, 0) === 0 && <div>No notes to display! </div>}
      {getNoteStatus === "pending" && (
        <Spinner animation="grow" variant="dark" />
      )}
    </div>
  );
};
