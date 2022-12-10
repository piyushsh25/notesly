import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { noteActions } from "../../Hooks/slices/NewNote/NoteSlice";
import { getDetails } from "../../Hooks/slices/User/UserDetails";
import { AppDispatch, RootState } from "../../Hooks/store";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { DashboardCTA } from "../UserCTA/DashboardCTA";
import "./User.css";
import { UserNotes } from "./UserNotes";
export const UserPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { archiveCTAstatus } = useSelector(
    (store: RootState) => store.noteReducer
  );
  useEffect(() => {
    dispatch(getDetails());
  }, []);
  useEffect(() => {
    if (archiveCTAstatus === "failed") {
      toast.error("Failed to archive note.");
      dispatch(noteActions.setArchiveCTAstatusIdle({}))
    }
    if (archiveCTAstatus === "succeeded") {
      toast.success("Note archive success.");
      dispatch(noteActions.setArchiveCTAstatusIdle({}))
    }
  }, [archiveCTAstatus]);
  return (
    <div>
      <Header />
      <div className="user-body">
        <DashboardCTA />
        <UserNotes />
      </div>
      <Footer />
    </div>
  );
};
