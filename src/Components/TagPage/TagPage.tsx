import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNoteHandler } from "../../Hooks/slices/NewNote/NoteSlice";
import { getDetails } from "../../Hooks/slices/User/UserDetails";
import { AppDispatch, RootState } from "../../Hooks/store";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { NotesArray } from "../Note/NotesArray";
import { DashboardCTA } from "../UserCTA/DashboardCTA";

export const TagPage = () => {
  const dispatch=useDispatch<AppDispatch>()
  const {allNotes}=useSelector((store:RootState)=>store.noteReducer)
  useEffect(() => {
    dispatch(getDetails());
    dispatch(getNoteHandler())
  }, []);
  return (
    <div>
      <Header />
      <div className="user-body">
        <DashboardCTA />
        <NotesArray todisplayArray={allNotes} />
      </div>
      <Footer />
    </div>
  );
};
