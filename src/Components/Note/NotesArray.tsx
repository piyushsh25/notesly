import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../../Hooks/store";
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
  const {getNoteStatus}=useSelector((store:RootState)=>store.noteReducer)
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
      {HeaderTags(pathname, tagName, setTag)}
      {getNoteStatus!=="pending"?<>
      {todisplayArray?.map((note) => (
        <Note
          header={note.header}
          content={note.content}
          fontFamily={note.fontFamily}
          backgroundColor={note.backgroundColor}
          pinned={note.pinned}
          tags={note.tags}
          noteId={note.noteId}
          createDate= {note.createDate}
          formatDate={note.formatDate}
        />
      ))}</>:<> <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    /></>}
     
      {todisplayArray.length===0 && <div>This section is empty !</div>}
    </div>
  );
};
