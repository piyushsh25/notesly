import { Note } from "../Note/Note";
import { Search } from "../Search/Search";
import "../Note/Notes.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Hooks/store";
import { getNoteHandler } from "../../Hooks/slices/NewNote/NoteSlice";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import { pinnedTotal, unpinnedTotal } from "./UserHelperFunction";
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
  }, [getNoteStatus]);

  const totalPinned = notes?.reduce(pinnedTotal, 0);
  const unPinned = notes?.reduce(unpinnedTotal, 0);
  return (
    <div
      className={
        (totalPinned || unPinned) === 0 ? "notes-array empty" : "notes-array"
      }
    >
      <Search />
      <div className="h2">Pinned : {totalPinned}</div>
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
      {getNoteStatus === "succeeded" && totalPinned === 0 && (
        <div>No notes pinned! </div>
      )}
      <div className="h2">OTHER : {unPinned}</div>
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

      {getNoteStatus === "pending" && (
        <Spinner animation="grow" variant="dark" />
      )}
      {(getNoteStatus === "succeeded" && unPinned === 0) && <div>No notes to display! </div>}
    </div>
  );
};
