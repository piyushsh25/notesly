import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { noteActions } from "../../Hooks/slices/NewNote/NoteSlice";
import { AppDispatch, RootState } from "../../Hooks/store";
import { HeaderTags } from "../Header/HeaderTags";
import { Note } from "./Note";
import "./Notes.css";
import { NoteProps } from "./Notes.type";
type DisplayArray = {
  todisplayArray: NoteProps[];
};
export const NotesArray = ({ todisplayArray }: DisplayArray) => {
  const { pathname } = useLocation();
  const [tagName, setTag] = useState<string>("All");
  const {CTAstatus,CTAmessage}=useSelector((store:RootState)=>store.noteReducer)
  const dispatch=useDispatch<AppDispatch>()
  todisplayArray = todisplayArray.filter((notes) => {
    if (tagName === "All") {
      return notes;
    } else {
      return notes.tags.find((tag) => tag === tagName);
    }
  });
  useEffect(() => {
    if (CTAstatus === "failed") {
      toast.error(CTAmessage);
      dispatch(noteActions.setCTAstatusIdle({}))
    }
    if (CTAstatus === "succeeded") {
      toast.success(CTAmessage);
      dispatch(noteActions.setCTAstatusIdle({}))
    }
  }, [CTAstatus]);
  const emotyArray=(todisplayArray.length===0)
  return (
    <div className={!emotyArray?"notes-array":"notes-array empty"}>
     
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
