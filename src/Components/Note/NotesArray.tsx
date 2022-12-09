import { useState } from "react";
import { useLocation } from "react-router-dom";
import { HeaderTags } from "../Header/HeaderTags";
import { Search } from "../Search/Search";
import { Note } from "./Note";
import "./Notes.css";
import { NoteProps } from "./Notes.type";
type DisplayArray = {
  todisplayArray: NoteProps[];
};
export const NotesArray = ({ todisplayArray }: DisplayArray) => {
  const { pathname } = useLocation();
  const [tagName, setTag] = useState<string>("All");
  todisplayArray = todisplayArray.filter((notes) => {
    if (tagName === "All") {
      return notes;
    } else {
      return notes.tags.find((tag) => tag === tagName);
    }
  });
  return (
    <div className="notes-array">
      <Search />
      {HeaderTags(pathname, { todisplayArray }, tagName, setTag)}
      {todisplayArray?.map((note) => (
        <Note
          key={note.noteId}
          header={note.header}
          content={note.content}
          fontFamily={note.fontFamily}
          backgroundColor={note.backgroundColor}
          pinned={note.pinned}
          tags={note.tags}
          noteId={note.noteId}
          createDate={note.createDate}
          formatDate={note.formatDate}
        />
      ))}

      {todisplayArray.length === 0 && <div>This section is empty !</div>}
    </div>
  );
};
