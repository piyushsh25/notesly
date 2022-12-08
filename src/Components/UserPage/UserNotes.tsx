import { Note } from "../Note/Note";
import { NoteProps } from "../Note/Notes.type";
import { Search } from "../Search/Search";
import "../Note/Notes.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Hooks/store";
import { getNoteHandler } from "../../Hooks/slices/NewNote/NoteSlice";
export const UserNotes = () => {
  /* font-family: 'Freehand', cursive;
font-family: 'Lora', serif;
font-family: 'Nunito Sans', sans-serif;
font-family: 'PT Sans', sans-serif;
font-family: 'Fasthand', cursive;
font-family: 'Fuzzy Bubbles', cursive;
*/

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getNoteHandler());
  }, []);
  const { allNotes: notes } = useSelector(
    (store: RootState) => store.noteReducer
  );
  console.log(notes);
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
      {notes.reduce(pinnedTotal, 0) === 0 && <div>No notes pinned! </div>}
      <div className="h2">OTHER : {notes.reduce(unpinnedTotal, 0)}</div>
      {notes?.map(
        (note) =>
          !note.pinned && (
            <Note
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
    </div>
  );
};
