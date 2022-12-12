import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrashHandler } from "../../Hooks/slices/NewNote/NoteSlice";
import { getDetails } from "../../Hooks/slices/User/UserDetails";
import { AppDispatch, RootState } from "../../Hooks/store";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { NotesArray } from "../Note/NotesArray";
import { DashboardCTA } from "../UserCTA/DashboardCTA";

export const TrashPage = () => {
  const dispatch=useDispatch<AppDispatch>()
  const {trashNotes}=useSelector((store:RootState)=>store.noteReducer)
  useEffect(() => {
    dispatch(getDetails());
    dispatch(getTrashHandler())
  }, []);
  return (
    <div>
      <Header />
      <div className="user-body">
        <DashboardCTA />
        <NotesArray todisplayArray={trashNotes} />
      </div>
      <Footer />
    </div>
  );
};
