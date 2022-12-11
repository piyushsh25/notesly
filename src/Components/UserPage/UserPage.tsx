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
  const { CTAstatus } = useSelector(
    (store: RootState) => store.noteReducer
  );
  useEffect(() => {
    dispatch(getDetails());
  }, []);
  useEffect(() => {
    if (CTAstatus === "failed") {
      toast.error("Note action error.");
      dispatch(noteActions.setCTAstatusIdle({}))
    }
    if (CTAstatus === "succeeded") {
      toast.success("Note action success.");
      dispatch(noteActions.setCTAstatusIdle({}))
    }
  }, [CTAstatus]);
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
