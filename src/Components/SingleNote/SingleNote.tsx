import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getIndividualNotes } from "../../Hooks/slices/NewNote/NoteReducer";
import { AppDispatch } from "../../Hooks/store";
import { Header } from "../Header/Header";
import { DashboardCTA } from "../UserCTA/DashboardCTA";
import { NoteDetails } from "./NoteDetails";
import "./SingleNote.css"
export const SingleNote = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const dispatch=useDispatch<AppDispatch>()
  const noteId = pathName.slice(6, pathName.length) as string;
  useEffect(() => {
    dispatch(getIndividualNotes({noteId}))
  }, []);
  return (
    <div>
      <Header />

      <div className="user-body">
        <DashboardCTA />
        {/* add component here:  user details like date created, edit delete buttons */}
        <NoteDetails />
      </div>
    </div>
  );
};
