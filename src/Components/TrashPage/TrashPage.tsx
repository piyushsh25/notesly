import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTrashHandler } from "../../Hooks/slices/NewNote/NoteSlice";
import { getDetails } from "../../Hooks/slices/User/UserDetails";
import { AppDispatch, RootState } from "../../Hooks/store";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { NotesArray } from "../Note/NotesArray";
import { DashboardCTA } from "../UserCTA/DashboardCTA";
import { TrashModal } from "./TrashModal";
import "./TrashPage.css";
export const TrashPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { trashNotes, getTrashStatus, showDeleteAll } = useSelector(
    (store: RootState) => store.noteReducer
  );
  useEffect(() => {
    dispatch(getTrashHandler());
    dispatch(getDetails());
  }, []);
  useEffect(() => {
    showDeleteAll
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [showDeleteAll]);
  return (
    <div className="trash-body">
      <Header />
      <div className="user-body">
        <DashboardCTA />
        {getTrashStatus === "pending" ? (
          <div className="center-spinner">
            Hold tight.. loading trash
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          </div>
        ) : (
          <NotesArray todisplayArray={trashNotes} />
        )}
      </div>
      {/* confirm delete all modal */}
      {showDeleteAll && <TrashModal />}
      <Footer />
    </div>
  );
};
