import { useLocation } from "react-router-dom";
import { Search } from "../Search/Search";
import { Note } from "./Note";
import "./Notes.css";
import { NoteProps } from "./Notes.type";
type DisplayArray = {
  todisplayArray: NoteProps[];
};
export const NotesArray = ({ todisplayArray }: DisplayArray) => {
  const { pathname } = useLocation();
  return (
    <div className="notes-array">
      <Search />
      <div className="array-header-cta-all">
        <div className="h2">
          {pathname.slice(1, pathname.length).toLocaleUpperCase()} : {todisplayArray.length}
        </div>
        <div className="trash-icon">
          <i className="bi bi-trash"></i>
        </div>
      </div>
      {todisplayArray?.map((note) => (
        <Note
          header={note.header}
          content={note.content}
          fontFamily={note.fontFamily}
          backgroundColor={note.backgroundColor}
          pinned={note.pinned}
        />
      ))}
    </div>
  );
};
